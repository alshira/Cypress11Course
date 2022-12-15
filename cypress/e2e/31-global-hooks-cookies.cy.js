//this file works with e2e.js with glogal beforeEach
Cypress.session.clearAllSavedSessions()
describe('Global hooks & cookies set of tests', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })
    it('Sucess login preserved', () => {
        cy.get('#userName-value').should('contain','test')
        
    });

    it('Sucess login preserved', () => {
        cy.get('#userName-value').should('contain','test')
    });


    it.only('Counting the cookies', () => {
        cy.getCookies().then((cookies)=>{
            cy.log('Cookies:',cookies)
            /*cookies.forEach(element => {
                cy.log('element:'+element)
            });*/
            expect(cookies).to.have.length(20)
        })
    });

});