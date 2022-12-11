describe('The internet app', () => {
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
            Cypress.config('baseUrl', mySites.theInternet)
            cy.log(mySites.theInternet)
        })
        cy.visit('/checkboxes')

    })
    it('Checkboxes scenario', () => {
        cy.get('#checkboxes')
    });
});