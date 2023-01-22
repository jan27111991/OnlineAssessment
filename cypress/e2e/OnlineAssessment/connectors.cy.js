describe('Visiting Rancher WebPage', () => {
    
  before('before', () => {
      cy.visit('/')
      
      })
      
    it('Validate if title is appropriate', () => {  
      cy.title().should('eq', 'Enterprise Kubernetes Management | Rancher')
    })

    it('Validate the page load is successful',()=>{
      cy.contains('Innovate Everywhere').should('be.visible')
     })

  });
