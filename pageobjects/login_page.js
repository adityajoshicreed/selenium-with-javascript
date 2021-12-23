const {By} = require('selenium-webdriver')
module.exports = class LoginPage{

    driver = null;

    constructor(driver){
        this.driver = driver;
    }

    userNameTxtFld = 'input#txtUsername'
    passwordTxtFld = 'input#txtPassword'
    loginBtn = 'input#btnLogin'

    loginIntoPanel = allure.createStep("Login Into Admin Panel",  async (userName, password) => {
            await this.driver.findElement(By.css(this.userNameTxtFld)).sendKeys(userName);
            await this.driver.findElement(By.css(this.passwordTxtFld)).sendKeys(password);
            await this.driver.findElement(By.css(this.loginBtn)).click();
        }
    )

}