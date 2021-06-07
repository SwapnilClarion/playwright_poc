import { Page } from "playwright";
export default class NavigationPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * ############################ Locators ###############################
   */
  mensNavLink = "#men-link";
  womensNavLink = "#women-link";
  everythingElseNavLink = "#everything-else-link";
  saleNavLink = "#sale-link";
  searchNavLink = "div.desktop-search-container > a";
  loginNavLink = "#login-link";
  wishlistNavLink = "nav.header-nav.header-nav-right > ul >li:nth-child(3) > a";
  /**
   * #############################  Methods ################################
   */

  async clickOnMensNavLink(): Promise<void> {
    await this.page.click(this.mensNavLink);
  }

  async clickOnWomensNavLink(): Promise<void> {
    await this.page.click(this.womensNavLink);
  }

  async clickOnEENavLink(): Promise<void> {
    await this.page.click(this.everythingElseNavLink);
  }

  async clickOnSaleNavLink(): Promise<void> {
    await this.page.click(this.saleNavLink);
  }

  async clickOnSearchNavLink(): Promise<void> {
    await this.page.click(this.searchNavLink);
  }

  async clickOnLoginNavLink(): Promise<void> {
    await this.page.click(this.loginNavLink);
  }

  async clickOnWishlistNavLink():Promise<void> {
    await this.page.click(this.wishlistNavLink);
  }
}
