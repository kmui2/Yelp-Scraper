import playwright from 'playwright';
import {saveVideo} from "playwright-video";

(async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await saveVideo(page, 'artifacts/example.mp4');
    await page.goto('http://www.yelp.com');
    await page.click("#header-search-submit");

    await browser.close();
})();