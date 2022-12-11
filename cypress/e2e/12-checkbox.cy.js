describe('Hasndling werid checkbox/input not displayed', () => {
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
        /*cy.fixture('sites').then((data)=>{
            const demoQA = data.demoQA
            const theInternet = data.theInternet
            const Angular = data.Angular
            const protractor = data.protractor
            Cypress.config('baseUrl',demoQA)
            cy.log(demoQA)
            cy.visit('/checkbox')
        })*/
    })


    it('Checkbox scenario', () => {
       cy.get('@mySites').then((mySites) => {
            Cypress.config('baseUrl', mySites.demoQA)
            cy.log(mySites.demoQA)
        })
        cy.visit('/checkbox')
        //cy.get('input[type="checkbox"]').click()
        cy.get('input[type="checkbox"]').click({force:true})
        cy.get('#result').should('contain','You have selected')

    });

    it.only('The Checkboxes scenario', () => {
        cy.get('@mySites').then((mySites) => {
             Cypress.config('baseUrl', mySites.demoQA)
             cy.log(mySites.demoQA)
         })
         cy.visit('/checkboxes')
         //cy.get('input[type="checkbox"]').click({force:true})
         //cy.get('#result').should('contain','You have selected')
 
     });
 


    it('The internet app', () => {
        cy.get('@mySites').then((mySites) => {
            Cypress.config('baseUrl', mySites.theInternet)
            cy.log(mySites.theInternet)
        })
        cy.visit('/login')
        
    });

});