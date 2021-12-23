module.exports = class SystemUsersPage{

    driver = null;

    constructor(driver){
        this.driver = driver;
    }

    headingLabel = '#systemUser-information .head h1'

}