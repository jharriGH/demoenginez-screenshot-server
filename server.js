app.post('/screenshot', async (req, res) => {
  const token = req.headers['x-auth-token'];
  if (token !== AUTH_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { url, html } = req.body;
  if (!url && !html) return res.status(400).json({ error: 'URL or HTML is required' });

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath: '/usr/bin/google-chrome-stable',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--disable-extensions',
        '--disable-background-networking',
        '--disable-default-apps',
        '--disable-sync',
        '--disable-translate',
        '--hide-scrollbars',
        '--metrics-recording-only',
        '--mute-audio',
        '--safebrowsing-disable-auto-update'
      ]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    if (html) {
      console.log('Rendering HTML directly');
      await page.setContent(html, { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 3000));
    } else {
      console.log(`Taking screenshot of: ${url}`);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await new Promise(r => setTimeout(r, 8000));
    }

    const screenshot = await page.screenshot({ type: 'jpeg', quality: 85, encoding: 'base64' });
    await browser.close();

    res.json({ success: true, image: `data:image/jpeg;base64,${screenshot}` });
  } catch (error) {
    if (browser) await browser.close().catch(() => {});
    console.error('Screenshot failed:', error.message);
    res.status(500).json({ error: error.message });
  }
});
