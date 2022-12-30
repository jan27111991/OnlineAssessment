export class BasePage {
//Object Repository to maintain the locators
  constructor() {
    this.tab = 'div[role="tab"]',
      this.itemLocation = 'span input',
      this.screenSize = 'input[role="checkbox"]',
      this.seeAll = 'div.b-carousel__seeall',
      this.pageHeader = 'div h1.b-pageheader',
      this.footer = 'div.x-overlay-footer__apply'

  }

  validateTabName(tabName) {
    cy.contains(this.tab, tabName).click();
  }

  selectItemLocation() {
    cy.get(this.itemLocation).eq(2).click()
  }

  selectPrice(priceType, priceValue) {
    cy.get('input[aria-label="' + priceType + ' Value, US Dollar"]').type(priceValue)
  }

  clickMatchingText(textValue) {
    cy.contains(textValue).should('be.visible').click();
  }

  selectScreenSize() {
    cy.get(this.screenSize).eq(0).click()

  }
  verifyExactMatchingText(textValue, index) {
    cy.get(this.seeAll).eq((index != undefined) ? index : 0).should('have.text', textValue)
  }

  verifyPartialMatchingText(textValue) {
    cy.get(this.pageHeader).should('contain.text', textValue)
  }


  clickExactMatchingText(textValue, index) {
    cy.get(this.seeAll).eq((index != undefined) ? index : 0).should('have.text', textValue).click()
  }

  clickFooter() {
    cy.get(this.footer, { timeout: 2000 }).click()

  }
} 