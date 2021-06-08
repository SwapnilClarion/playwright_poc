import { chromium,Page,Browser} from "playwright";
import NavigationPage from '../../../pageObjects/navigationPage';
import ProductListingPage from "../../../pageObjects/productListingPage";

describe('Validate Guest user checkout with Credit card',async()=>{
    let navigationPage:NavigationPage;
    let plpPage:ProductListingPage;
    let browser:Browser;
    let page:Page;
    before(async()=>{
        browser = await chromium.launch();
        page = await browser.newPage();
        navigationPage = new NavigationPage(page);
        plpPage = new ProductListingPage(page);
        await page.goto("https://qa.ssense.com");
    });
    it('',async()=>{
        
    });
});