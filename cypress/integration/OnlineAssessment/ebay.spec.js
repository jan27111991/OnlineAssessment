import { BasePage } from "../../pages/Base.page";
describe('Ebay Online Assessment', () => {

  beforeEach(function () { //before block gets executed before every testCase
    cy.visit('www.ebay.com')
  })

  //Test Case Execution through page object model design pattern
  it('Access a Product via category after applying multiple filters', () => {
    cy.fixture('sample/testcase1.json').then((userFixture) => {
      let basePage = new BasePage();  
      basePage.clickMatchingText('Shop by category')
      basePage.clickMatchingText('Cell phones & accessories')
      basePage.clickMatchingText('Cell Phones & Smartphones')
      basePage.verifyExactMatchingText('See All- Shop by Brand')
      basePage.verifyExactMatchingText('See All- Shop by Network', 1)
      basePage.clickExactMatchingText('See All- Shop by Brand')
      basePage.validateTabName('Screen Size')
      basePage.selectScreenSize()
      basePage.validateTabName('Item Location')
      basePage.selectItemLocation()
      basePage.validateTabName('Price')
      basePage.selectPrice('Minimum', '1000')
      basePage.selectPrice('Maximum', '10000')
      basePage.clickFooter()
      basePage.verifyPartialMatchingText(userFixture.screenSize)
      basePage.verifyPartialMatchingText(userFixture.priceStartingValue)
      basePage.verifyPartialMatchingText(userFixture.priceEndingValue)

    })
  })

  //Test Case Execution using simple locators in the tests and asserting the expeccted values from Json file using Cypress Fixtures
  it('Access a Product via Search and verify results', () => {
    cy.fixture('sample/testcase1.json').then((userFixture) => {
      cy.get('input[aria-label="Search for anything"').type(userFixture.searchByProductName)
      cy.get('select[aria-label="Select a category for search"]').select(userFixture.productCategory)
      cy.get('input[value="Search"]').click()
      cy.get('h1 span[class="BOLD"]').eq(1).contains(userFixture.searchByProductName).should('be.visible')
      cy.get('div[class="s-item__title"]').eq(1).should('contain.text', userFixture.searchByProductName)
    })
  })
})

