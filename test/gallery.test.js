const puppeteer = require('puppeteer');
const assert = require('assert');

const localURL = 'http://127.0.0.1:5500/';


describe('Main Gallery tests', () => {
    let browser;
    let page;

    before(async () => {
        // Launch a new browser instance
        browser = await puppeteer.launch();
    });

    after(async () => {
        // Close the browser once all tests are completed
        await browser.close();
    });

    beforeEach(async () => {
        // Create a new page instance before each test
        page = await browser.newPage();
    });

    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
            const screenshotPath = `test/failed tests - screenshots/TEST FAILURE - ${this.currentTest.fullTitle()}.png`;
            console.log('saving screenshot in ' + screenshotPath);
            await page.screenshot({ path: screenshotPath });
        }
        await page.close();
    });

    it('gallery.html title', async () => {
        await page.goto(localURL + 'gallery.html');
        const title = await page.title();
        assert.strictEqual(title, 'Gallery');
    });

    it('menu is visible', async () => {
        await page.goto(localURL + 'gallery.html');
        await page.waitForSelector("#menu");
    });

    it('category title is available', async () => {
        await page.goto(localURL + 'gallery.html');
        await page.waitForSelector(".category-title");

        const categoryTitles = await page.evaluate(() => {
            const categoryTitlesDivs = document.querySelectorAll('.category-title'); // Replace 'div' with the appropriate selector for your <div> element
            const categoryTitles = [];
            categoryTitlesDivs.forEach(element => {
                categoryTitles.push(element.innerText);
            });
            return categoryTitles;
        });
        assert.strictEqual(categoryTitles.length, 26);

    });



});