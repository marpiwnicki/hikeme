const puppeteer = require('puppeteer');
const assert = require('assert');

const localURL = 'http://127.0.0.1:5500/';

describe('HikeMe sanity Test Suite - page loading', () => {
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

    it('index.html', async () => {
        await page.goto(localURL + 'index.html');
        const title = await page.title();
        assert.strictEqual(title, 'HikeMe');
    });
    it('gallery.html', async () => {
        await page.goto(localURL + 'gallery.html');
        const title = await page.title();
        assert.strictEqual(title, 'Gallery');
    });
    it('about.html', async () => {
        await page.goto(localURL + 'about.html');
        const title = await page.title();
        assert.strictEqual(title, 'About');
    });
    it('gallery - landscapes.html', async () => {
        await page.goto(localURL + 'html/gallery/landscapes.html');
        const title = await page.title();
        assert.strictEqual(title, 'Landscapes');
    });

    it('gallery - landscapes-morning.html', async () => {
        await page.goto(localURL + 'html/gallery/landscapes-morning.html');
        const title = await page.title();
        assert.strictEqual(title, 'Landscapes morning');
    });

    it('gallery - landscapes-colors-dusk.html', async () => {
        await page.goto(localURL + 'html/gallery/landscapes-colors-dusk.html');
        const title = await page.title();
        assert.strictEqual(title, 'Colors of the dusk');
    });

    it('gallery - landscapesp-pink-rocks.html', async () => {
        await page.goto(localURL + 'html/gallery/landscapes-pink-rocks.html');
        const title = await page.title();
        assert.strictEqual(title, 'Pink rocks');
    });

    it('gallery - landscapesp-cold.html', async () => {
        await page.goto(localURL + 'html/gallery/landscapes-cold.html');
        const title = await page.title();
        assert.strictEqual(title, 'Cold landscapes');
    });

    it('gallery - night.html', async () => {
        await page.goto(localURL + 'html/gallery/night.html');
        const title = await page.title();
        assert.strictEqual(title, 'Night');
    });
    it('gallery - bikepacking.html', async () => {
        await page.goto(localURL + 'html/gallery/bikepacking.html');
        const title = await page.title();
        assert.strictEqual(title, 'Bikepacking');
    });
    it('gallery - nature.html', async () => {
        await page.goto(localURL + 'html/gallery/nature.html');
        const title = await page.title();
        assert.strictEqual(title, 'Nature');
    });
    it('gallery - herbarium.html', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        const title = await page.title();
        assert.strictEqual(title, 'Herbarium');
    });
    it('gallery - fungarium.html', async () => {
        await page.goto(localURL + 'html/gallery/fungarium.html');
        const title = await page.title();
        assert.strictEqual(title, 'Fungarium');
    });
    it('gallery - animals.html', async () => {
        await page.goto(localURL + 'html/gallery/animals.html');
        const title = await page.title();
        assert.strictEqual(title, 'Animals');
    });
    it('gallery - light.html', async () => {
        await page.goto(localURL + 'html/gallery/light.html');
        const title = await page.title();
        assert.strictEqual(title, 'Light');
    });
    it('gallery - smoke.html', async () => {
        await page.goto(localURL + 'html/gallery/smoke.html');
        const title = await page.title();
        assert.strictEqual(title, 'Smoke');
    });
    it('gallery - renders.html', async () => {
        await page.goto(localURL + 'html/gallery/renders.html');
        const title = await page.title();
        assert.strictEqual(title, 'Renders');
    });
    it('gallery - respect the nature.html', async () => {
        await page.goto(localURL + 'html/gallery/respect-the-nature.html');
        const title = await page.title();
        assert.strictEqual(title, 'Respect the nature');
    });
    it('gallery - spiritual.html', async () => {
        await page.goto(localURL + 'html/gallery/spiritual.html');
        const title = await page.title();
        assert.strictEqual(title, 'Siritual');
    });
    // it('gallery - experimental.html', async () => {
    //     await page.goto(localURL + 'html/gallery/experimental.html');
    //     const title = await page.title();
    //     assert.strictEqual(title, 'Experimental');
    // });
    // it('gallery - industrial.html', async () => {
    //     await page.goto(localURL + 'html/gallery/industrial.html');
    //     const title = await page.title();
    //     assert.strictEqual(title, 'Industrial');
    // });
});
