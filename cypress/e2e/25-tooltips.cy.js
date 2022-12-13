describe('Tooltips set of tests', () => {
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
    cy.visit('/tool-tips')
    })

    it('Tootip Button', () => {
        cy.get('#toolTipButton').realHover()
        //my way
        cy.get('div.tooltip-inner').should('have.text','You hovered over the Button')
        //cy.get('div[role="tooltip"]')
    });

    it.only('hover a text', () => {
        cy.get('div#texToolTopContainer,a').contains('Contrary').trigger('mouseover')
        cy.get('div.tooltip-inner').should('have.text','You hovered over the Contrary')
    });


});