// Builds Andre_Viollaz_CV.pdf from cv/cv.html (needs Playwright + Chromium).
// Run from the repo root: node cv/build.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'cv.html'));
  await page.pdf({ path: path.join(__dirname, '..', 'Andre_Viollaz_CV.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
