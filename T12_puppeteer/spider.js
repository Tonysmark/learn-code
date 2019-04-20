const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({
    executablePath: "D:chrome-win/chrome.exe"
  });
  const page = await browser.newPage();
  let url = "https://movie.douban.com/subject_search?search_text=%E6%83%8A%E5%A5%87%E9%98%9F%E9%95%BF&cat=1002";
  await page.goto(url);
  const title = await page.evaluate(() => {
    document.querySelector(".detail .title a")
  });
  console.log(title);
  await browser.close();
})(); 