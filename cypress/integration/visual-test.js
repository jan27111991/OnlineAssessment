describe('Cypress Visual Testing', () => {
    it('Compare fullpage of Google page', () => {
    cy.visit("https://www.google.com/?hl=hi");
    // cy.compareSnapshot('google-page');
//     const compareSnapshotCommand = require('cypress-image-diff-js/dist/command')
// compareSnapshotCommand()
// cy.get('#report-header').compareSnapshot('search-bar-element')
cy.matchImageSnapshot('google-page');
    })
    })