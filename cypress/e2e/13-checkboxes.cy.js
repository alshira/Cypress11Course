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
        //stupid basic course sample
        //cy.get('form#checkboxes input').eq(0).click().should('be.checked')
        
        // to check all at once since beggining
        //cy.get('#checkboxes input[type="checkbox"]').as('checklist').check() 

        //we parse all checkboxes looking just for already checked and got these values
        cy.get('#checkboxes input[type="checkbox"]').as('checklist')// no action
        cy.get('@checklist').each(checkbox=>{
            if (checkbox[0].checked){ //only for true
                expect(checkbox[0].checked).to.equal(true) // we perform the validation on true only
                cy.log(checkbox.value) //in this case there is no value there, usually must be
            }
        })
    });

    
});