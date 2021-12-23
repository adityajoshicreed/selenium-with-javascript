const {Builder} = require('selenium-webdriver')
require('chromedriver')
require('geckodriver')

function generateDriver(browserToOpen) {
    if(browserToOpen == 'Chrome'){
        let driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        return driver;
    }
    else if(browserToOpen == 'Firefox'){
        let driver = new Builder().forBrowser('firefox').build();
        driver.manage().window().maximize();
        return driver;
    }
}

function openUrl(driverObj) {
    driverObj.get('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
}



  module.exports = { generateDriver, openUrl };