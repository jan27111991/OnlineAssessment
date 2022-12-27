
  describe('Access a product after applying multiple filters', () => {
    it('Access a product', () => {
    cy.visit('www.ebay.com')
    cy.contains('Shop by category').should('be.visible').click();
    cy.contains('Cell phones & accessories').should('be.visible').click();
    cy.get('div.dialog__cell').contains('Cell Phones & Smartphones').should('be.visible').click();
    cy.get('div.b-carousel__seeall').eq(0).should('have.text','See All- Shop by Brand')
    cy.get('div.b-carousel__seeall').eq(1).should('have.text','See All- Shop by Network')
    cy.get('div.b-carousel__seeall').eq(0).should('have.text','See All- Shop by Brand').click();

    cy.contains('div[role="tab"]','Brand').should('be.visible')
    cy.get('span').contains('Ace Mobile').parent().click()
    cy.contains('div[role="tab"]','Screen Size').should('be.visible').click()
    cy.get('input[role="checkbox"]').click()

    cy.get('div.x-overlay-footer__apply').click()
     }) 
  });
