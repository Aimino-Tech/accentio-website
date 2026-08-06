import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.querySelector('#comparison')?.scrollIntoView());
await page.waitForTimeout(800);
const labels = await page.evaluate(() => {
  const sec = document.querySelector('#comparison');
  const rows = [...(sec?.querySelectorAll('span') || [])].map(s => s.textContent).filter(t => t.includes('Real speaker') || t.includes('Echter Sprecher'));
  const sub = sec?.querySelector('p')?.textContent?.slice(0, 120);
  return { rows: [...new Set(rows)], sub };
});
console.log(JSON.stringify(labels, null, 1));
await browser.close();
