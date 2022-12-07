

describe('This is my test set', () => {
  context('when yopu try to test', function () {
      it('Open a browser', () => {
        cy.visit('https://example.cypress.io')
      })
      
      it('Log a message',()=>{
        cy.log("Hello world!")
      })
  })
})