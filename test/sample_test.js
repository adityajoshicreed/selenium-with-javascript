const { expect } = require("chai");
const DashboardPage = require('../pageobjects/dashboard')
const CommonActions = require('../common/common_actions')
const baseDescribe = require('../common/base')

baseDescribe('Login Test Cases Set', b => (driver = b), () => {
    let dashboardObject = null;

    it('Login Into Open HRS First', async function() {
      dashboardObject = new DashboardPage(driver);

      await verifyPageHeaderToCheckIfLoginIsSuccesful();

    });

    const verifyPageHeaderToCheckIfLoginIsSuccesful = allure.createStep("Verify if login is successfull", async () => { 
      let pageHeading = await CommonActions.getTextOfElementUsingCss(driver, dashboardObject.dashboardHeading);
      await expect(pageHeading).to.be.equal('Dashboard');
      await CommonActions.screenshot(driver);
  });

  });