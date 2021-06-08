import { Page } from "playwright";

export default class AccountDetails {
    private page:Page;

    constructor(page:Page) {
        this.page= page;
    }

    /***
   * ################################### Locators ########################################
   */

    emailAddress = "#account-details-email";



    /***
   * ################################### Methods ########################################
   */
   async  getEmailAddress():Promise<string> {
       const elementVal:any = await this.page.$eval(this.emailAddress, (el) => el.nodeValue);
       return elementVal;
   }
}