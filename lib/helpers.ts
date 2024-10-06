import { Browser, Frame, Page, chromium } from 'playwright';

export var browser: Browser;
export var page: Page;
export var frame: Frame;

export class Helpers {

    async launchBrowser() {
        browser = await chromium.launch({ headless: false, slowMo: 100, args: ['--start-maximized'] });
        page = await browser.newPage();
        page.setDefaultTimeout(30000);
    }

    async launchUrl(url: string) {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async closeBrowser() {
        await browser.close();
    }

    async takeScreenshot() {
        const screenshot = await page.screenshot();
        return screenshot;
    }
}
