const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8080/");
  console.log("Page loaded successfully");
  await browser.close();
})();
