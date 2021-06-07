import { chromium,Page,Browser } from "playwright";
import UserManagementMethods from "../../../methods/UserManagementMethods";
import NavigationPage from '../../../pageObjects/navigationPage';
describe('Validate User Signup',async()=>{
    let browser:Browser;
    let page:Page;
    let userSignupMethods:UserManagementMethods;
    let navigationPage:NavigationPage;
    before(async()=>{
        browser = await chromium.launch({headless:false});
        page = await browser.newPage();
        navigationPage = new NavigationPage(page);
        userSignupMethods = new UserManagementMethods(page);
        await page.goto("https://qa.ssense.com");
    })
    it('should perform signup',async()=>{
        await navigationPage.clickOnLoginNavLink();
        await userSignupMethods.userSignup();
    });
    after(async()=>{
        await browser.close();
    });
});