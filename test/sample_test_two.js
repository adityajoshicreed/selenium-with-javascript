const DashboardPage = require('../pageobjects/dashboard')
const baseDescribe = require('../common/base')
const SystemUsersPage = require('../pageobjects/system_users')
const CommonActions = require('../common/common_actions')
const { expect } = require("chai");

baseDescribe('Admin Module Test Suite', b => (driver = b), () => {
    let dashboardObject = null;
    let systemUserObject = null;

    it('Navigate to admin Users Page', async function() {
      dashboardObject = new DashboardPage(driver);
      systemUserObject = new SystemUsersPage(driver);
      
      await dashboardObject.navigateToUsersPage();

      await verifyUserIsNavigatedToUsersPage();

    });

    const verifyUserIsNavigatedToUsersPage = allure.createStep("Verify if admin is navigated to users page", async () => { 
      let pageHeading = await CommonActions.getTextOfElementUsingCss(driver, systemUserObject.headingLabel);
      await expect(pageHeading).to.be.equal('System Users');
      await CommonActions.screenshot(driver);
    });

  });