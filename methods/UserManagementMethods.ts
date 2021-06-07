import { Page } from "playwright";
import {randomDataSet} from "../dataProviders/randomDataSet";
import LoginPage from '../pageObjects/loginPage';
export default class UserManagementMethods {
    private page:Page;
    private loginPage:LoginPage;

    constructor(page:Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }

    async userSignup():Promise<void>{
        await this.loginPage.enterSignUpEmail(randomDataSet.GUEST_EMAIL);
        await this.loginPage.enterSignUpPassword(randomDataSet.USER_PASSWORD);
        await this.loginPage.selectNoThanksPromo();
        await this.loginPage.clickSignupButton();
    }

    async userLogin(username:string,password:string):Promise<void>{
        await this.loginPage.enterLoginEmail(username);
        await this.loginPage.enterLoginPassword(password);
        await this.loginPage.clickLoginButton();
    }
}