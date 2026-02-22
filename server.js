require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { chromium } = require('playwright-chromium');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'DemoEnginez Screenshot Server',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Single screenshot endpoint
app.post('/screenshot', async (req, res) => {
  const { url, waitTime = 3000, fullPage = false, width = 1920, height = 1080 } = req.body;
  
  if (!url) {
    return res.status(400).json({ 
      success: false,
      error: 'URL is required' 
    });
  }
  
  console.log(`📸 [${new Date().toISOString()}] Capturing: ${url}`);
  
  let browser;
  const startTime = Date.now();
  
  try {
    // Launch browser
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--disable-extensions'
      ]
    });
    
    const context = await browser.newContext({
      viewport: { width, height },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      deviceScaleFactor: 1
    });
    
    const page = await context.newPage();
    
    // Set timeouts
    page.setDefaultTimeout(30000);
    page.setDefaultNavigationTimeout(30000);
    
    // Navigate to URL
    await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait for additional rendering
    await page.waitForTimeout(waitTime);
    
    // Capture screenshot
    const screenshot = await page.screenshot({
      type: 'jpeg',
      quality: 85,
      fullPage: fullPage
    });
    
    await browser.close();
    
    const duration = Date.now() - startTime;
    const base64Image = screenshot.toString('base64');
    
    console.log(`✅ [${duration}ms] Screenshot captured: ${base64Image.length} bytes`);
    
    res.json({
      success: true,
      screenshot: base64Image,
      format: 'jpeg',
      encoding: 'base64',
      size: base64Image.length,
      duration: duration,
      url: url,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error(`❌ Screenshot error for ${url}:`, error.message);
    
    if (browser) {
      try {
        await browser.close();
      } catch (e) {
        console.error('Error closing browser:', e.message);
      }
    }
    
    res.status(500).json({
      success: false,
      error: error.message,
      url: url,
      timestamp: new Date().toISOString()
    });
  }
});

// Batch screenshot endpoint (for before/after)
app.post('/screenshot/batch', async (req, res) => {
  const { urls, waitTime = 3000 } = req.body;
  
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return res.status(400).json({ 
      success: false,
      error: 'URLs array is required' 
    });
  }
  
  if (urls.length > 5) {
    return res.status(400).json({ 
      success: false,
      error: 'Maximum 5 URLs per batch request' 
    });
  }
  
  console.log(`📸 Batch request for ${urls.length} URLs`);
  
  const results = [];
  let browser;
  
  try {
    // Launch browser once for all screenshots
    browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });
    
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    });
    
    // Process each URL
    for (const url of urls) {
      try {
        console.log(`📸 Processing: ${url}`);
        
        const page = await context.newPage();
        page.setDefaultTimeout(30000);
        
        await page.goto(url, { 
          waitUntil: 'networkidle',
          timeout: 30000 
        });
        
        await page.waitForTimeout(waitTime);
        
        const screenshot = await page.screenshot({
          type: 'jpeg',
          quality: 85,
          fullPage: false
        });
        
        await page.close();
        
        const base64Image = screenshot.toString('base64');
        
        results.push({
          url,
          success: true,
          screenshot: base64Image,
          format: 'jpeg',
          size: base64Image.length
        });
        
        console.log(`✅ Captured: ${url}`);
        
      } catch (error) {
        console.error(`❌ Failed: ${url} - ${error.message}`);
        
        results.push({
          url,
          success: false,
          error: error.message
        });
      }
    }
    
    await browser.close();
    
    const successCount = results.filter(r => r.success).length;
    
    res.json({
      success: true,
      total: urls.length,
      successful: successCount,
      failed: urls.length - successCount,
      results: results
    });
    
  } catch (error) {
    console.error('❌ Batch screenshot error:', error.message);
    
    if (browser) {
      try {
        await browser.close();
      } catch (e) {
        console.error('Error closing browser:', e.message);
      }
    }
    
    res.status(500).json({
      success: false,
      error: error.message,
      results: results
    });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('🚀 ================================================');
  console.log('📸 DemoEnginez Screenshot Server');
  console.log('🚀 ================================================');
  console.log(`🌍 Running on: http://0.0.0.0:${PORT}`);
  console.log(`💚 Health check: http://0.0.0.0:${PORT}/health`);
  console.log(`📸 Screenshot: POST http://0.0.0.0:${PORT}/screenshot`);
  console.log(`📦 Batch: POST http://0.0.0.0:${PORT}/screenshot/batch`);
  console.log('🚀 ================================================');
  console.log('');
});