import { chromium,Page,Browser } from "playwright";
import UserManagementMethods from "../../../methods/UserManagementMethods";
import NavigationPage from '../../../pageObjects/navigationPage';
import AccountDetails from "../../../pageObjects/accountDetailsPage";
describe('Validate User Signup',async()=>{
    let browser:Browser;
    let page:Page;
    let userSignupMethods:UserManagementMethods;
    let navigationPage:NavigationPage;
    let accountDetailsPage:AccountDetails;
    before(async()=>{
        browser = await chromium.launch({headless:false});
        page = await browser.newPage();
        navigationPage = new NavigationPage(page);
        userSignupMethods = new UserManagementMethods(page);
        accountDetailsPage = new AccountDetails(page);
        await page.goto("https://qa.ssense.com");
    })
    it('should perform signup',async()=>{
        await navigationPage.clickOnLoginNavLink();
        await userSignupMethods.userSignup();
        await page.waitForTimeout(5000)
    });
    it('',async ()=>{
        await navigationPage.clickOnAccountsNavLink();
        await page.waitForTimeout(5000)
        const emailAddress:any =await accountDetailsPage.getEmailAddress();
        console.log('Email Address  :  ' + emailAddress);
    });
    after(async()=>{
        await browser.close();
    });
});