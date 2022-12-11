describe('Demo QA click tricks', () => {
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
        cy.visit('/buttons')

    })

    it('Doble click test', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('contain','double click')
    });


    it('Right click test', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('contain','right click')
    });

});