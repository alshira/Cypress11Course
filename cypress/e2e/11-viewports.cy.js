let demoQA, theInternet, Angular, protractor
describe('cy.viewport() challenge', () => {
    
    before(()=>{
        cy.fixture('EDM Power - Stranger Things.mp3', 'base64').then((mp3) => {
            const uri = 'data:audio/mp3;base64,' + mp3
            const audio = new Audio(uri)
            audio.play()
            audio.volume=1
        })
    })
    beforeEach(()=>{
        cy.fixture('sites').then((data)=>{
            const demoQA = data.demoQA
            const theInternet = data.theInternet
            const Angular = data.Angular
            const protractor = data.protractor
            cy.log(demoQA)
            cy.visit(Angular)
            //angular site
            //we added a file called /cypress/support/exceptions.js to handle this
            //and in e2e.js add reference to it
            /*
            It's possible to enable debugging these scripts by adding the crossorigin attribute and setting a CORS header.

When Cypress detects uncaught errors originating from your application it will automatically fail the current test.

This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.
            */
        })
    })
    it('Iphone6+', () => {
        cy.viewport("iphone-6+")
        cy.get("#mobile_menu_toggler").should('be.visible')
        
    });


    it('ipad-2', () => {
        cy.viewport("ipad-2")
        cy.get("#mobile_menu_toggler").should('be.visible')
        
    });



    it('Custom 1000X1400', () => {
        cy.viewport(1000,1400)
        cy.get("#mobile_menu_toggler").should('be.visible') //it'll fail
        
    });

});