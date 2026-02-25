const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
app.use(express.json());

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-auth-token');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const PORT = process.env.PORT || 8080;
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'demoenginez-screenshots-2024';

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'DemoEnginez Screenshot Server' });
});

app.post('/screenshot', async (req, res) => {
  const token = req.headers['x-auth-token'];
  if (token !== AUTH_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  let browser;
  try {
    console.log(`Taking screenshot of: ${url}`);
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath: '/usr/bin/google-chrome-stable',
      args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--single-process','--no-zygote']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    const screenshot = await page.screenshot({ type: 'jpeg', quality: 85, encoding: 'base64' });
    await browser.close();

    res.json({ success: true, image: `data:image/jpeg;base64,${screenshot}` });
  } catch (error) {
    if (browser) await browser.close().catch(() => {});
    console.error('Screenshot failed:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Screenshot server running on port ${PORT}`));


