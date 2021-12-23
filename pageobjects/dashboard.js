
const CommonActions = require('../common/common_actions')

module.exports = class DashboardPage{

    driver = null;

    constructor(driver){
        this.driver = driver;
    }

    SubscriberBtn = 'input#Subscriber_link'
    dashboardHeading = 'div.head h1'
    adminMainMenuBtn = '#menu_admin_viewAdminModule'
    userMangementSubBtn = '#menu_admin_UserManagement'
    usersSubSubBtn = '#menu_admin_viewSystemUsers'

    navigateToUsersPage = allure.createStep("Navigating to Users Page by hovering over Admin > User Management and then clicking on Users",  async () => {
            await CommonActions.hoverOverElementMultiple(this.driver, this.adminMainMenuBtn, this.userMangementSubBtn, this.usersSubSubBtn);
        }
    )

}