const puppeteer = require('puppeteer');
const assert = require('assert');

const localURL = 'http://127.0.0.1:5500/';


describe('Herbarium tests', () => {
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

    it('herbarium.html title', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        const title = await page.title();
        assert.strictEqual(title, 'Herbarium');
    });

    it('menu is visible', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        await page.waitForSelector("#menu");
    });

    it('color switches are available', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        await page.waitForSelector(".herbarium-color-selector");

        const colorSwitchButtons = await page.evaluate(() => {
            const colorSwitchButtons = document.querySelectorAll('.herbarium-color-selector');
            return colorSwitchButtons.length;
        });
        assert.strictEqual(colorSwitchButtons, 3);

    });

    it('specific background image is used', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        await page.waitForSelector(".herbarium-image-container");
        
        const firstGroupContainerImage = await page.evaluate(() => {
            const firstGroupContainer = document.querySelector('.herbarium-image-container'); 
            const style = window.getComputedStyle(firstGroupContainer);
            return style.backgroundImage;
        });
        
        assert.strictEqual(firstGroupContainerImage, 'url("http://127.0.0.1:5500/img/highres/Gallery/herbarium/herbarium-1a.jpg")', "found url > "+firstGroupContainerImage)
    });

    it('first hergaium group is visible', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        await page.waitForSelector(".herbarium-image-container");
        
        const firstGroupContainerVisiblity = await page.evaluate(() => {
            const firstGroupContainer = document.querySelector('.herbarium-group-container'); 
            const style = window.getComputedStyle(firstGroupContainer);
            return style.visibility;
        });
        
        assert.strictEqual(firstGroupContainerVisiblity, 'visible', "current visiblity > "+firstGroupContainerVisiblity)
    });

    
    it('second hergaium group is not visible', async () => {
        await page.goto(localURL + 'html/gallery/herbarium.html');
        await page.waitForSelector(".herbarium-image-container");
        
        const firstGroupContainerVisiblity = await page.evaluate(() => {
            const firstGroupContainer = document.querySelectorAll('.herbarium-group-container'); 
            const style = window.getComputedStyle(firstGroupContainer[1]);
            return style.visibility;
        });
        assert.strictEqual(firstGroupContainerVisiblity, 'collapse', "current visiblity > "+firstGroupContainerVisiblity)
    });

    it('switch herbarium group on color switch click', async () => {
         await page.goto(localURL + 'html/gallery/herbarium.html');
         await page.waitForSelector('[id="1"]');
         await page.click('[id="1"]');
        
        const secondGroupContainerVisiblity = await page.evaluate(() => {
            const groupContainers = document.querySelectorAll('.herbarium-group-container'); 
            const style = window.getComputedStyle(groupContainers[1]);
            return style.visibility;
        });
        assert.strictEqual(secondGroupContainerVisiblity, 'visible', "current visiblity > " + secondGroupContainerVisiblity)
    });




});