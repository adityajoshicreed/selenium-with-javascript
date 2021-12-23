const fs = require('fs')
const {By, until, Key} = require('selenium-webdriver')

const screenshot = async function(driver) {
    let encodedString = await driver.takeScreenshot();
    allure.createAttachment('Screenshot', Buffer.from(encodedString, "base64"));
}

function getTestDataByFileName(fileName) {
    return JSON.parse(fs.readFileSync('testdata/'+fileName+'.json', 'utf8'))
}

async function clickOnElementUsingCss(driver, elementSelector){
    await driver.wait(until.elementLocated(By.css(elementSelector)), 19000);
    await driver.findElement(By.css(elementSelector)).click();
}

async function hoverOverElementMultiple(driver, elementSelectorToHover, secondElementSelectorToHover, elementSelectorToClick){
    await driver.wait(until.elementLocated(By.css(elementSelectorToHover)), 19000);
    const actions = driver.actions();
    await actions.move({origin: driver.findElement(By.css(elementSelectorToHover))}).move({origin: driver.findElement(By.css(secondElementSelectorToHover))}).click(driver.findElement(By.css(elementSelectorToClick))).perform();
}

async function getTextOfElementUsingCss(driver, elementSelector){
    await driver.wait(until.elementLocated(By.css(elementSelector)), 19000);
    return await driver.findElement(By.css(elementSelector)).getText();
}

module.exports = { screenshot, getTestDataByFileName, clickOnElementUsingCss, hoverOverElementMultiple, getTextOfElementUsingCss }