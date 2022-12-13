describe('Mnu set fo tests', () => {
    before(()=>{
        cy.fixture('EDM Power - Stranger Things.mp3', 'base64').then((mp3) => {
            const uri = 'data:audio/mp3;base64,' + mp3
            const audio = new Audio(uri)
            audio.play()
            audio.volume=0
        })
    })
    
    beforeEach(()=>{
        cy.fixture('sites').as('mySites')
        cy.get('@mySites').then((mySites) => {
            Cypress.config('baseUrl', mySites.demoQA)
            cy.log(mySites.demoQA)
        })
    cy.visit('/menu')
    })

    it.only('Selectung sub menus', () => {
        //cy.get('ui#nav,a').contains('Main Item 2').trigger('mouseover') // didn't worked
        cy.get('ui#nav,a').contains('Main Item 2').realHover()
        cy.get('ui#nav,a').contains('SUB SUB LIST »').realHover()
        cy.get('ui#nav,a').contains('Sub Sub Item 2').should('have.text','Sub Sub Item 2')
    });

    it('', () => {
        
    });


    it('', () => {
        
    });

});