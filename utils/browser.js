const puppeteer = require("puppeteer");

let browser;

/**
 * @description get the browser instance
 * @returns {Promise<puppeteer.Browser>} a browser instance
 */
async function getBrowser() {
    if(!browser)
        browser = await puppeteer.launch({headless: true});
    return browser;
}

module.exports = {
    getBrowser
}