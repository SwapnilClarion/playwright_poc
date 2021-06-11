import {Page} from 'playwright';

export default class ProductDescriptionPage {
    private page:Page;
    constructor(page:Page) {
        this.page = page;
    }

    /**
   * ############################ Locators ###############################
   */
    addToBagButton = "#pdpAddToBagButton";



    /**
   * ############################ Methods ###############################
   */

    async clickOnFirstProduct():Promise<void>{
        await this.page.click(this.addToBagButton);
    }
}