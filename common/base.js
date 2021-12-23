const generate_driver = require("../common/generate_driver");
const CommonActions = require('../common/common_actions');
const LoginPage = require("../pageobjects/login_page");

module.exports = function baseDescribe(name, callback, methodBody) {
    let driver;
    let loginObject;
    describe(name, () => {
        beforeEach(async () => {
            driver = generate_driver.generateDriver('Chrome')
            generate_driver.openUrl(driver)
            loginObject = new LoginPage(driver)
            let loginDetails = CommonActions.getTestDataByFileName('login');
            await loginObject.loginIntoPanel(loginDetails.userName, loginDetails.password)
            callback(driver);
        });

        methodBody();

        afterEach(async () => {
            await driver.quit();
        });
    });
};