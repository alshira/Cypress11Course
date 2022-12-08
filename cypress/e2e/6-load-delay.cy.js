//install on VS CODE ES6 Mocha Snippets
//then pick escribe and it
//Cypress.config("defaultCommandTimeout",16000) //thissupport is for 'Client delay button'n ONLY!!!
describe('load delay', () => {
    it('setting time out manually', () => {
        cy.visit("/loaddelay",{timeout:0})
    });
    it('getting time out from cypress.config.js', () => {
        cy.visit("/loaddelay")
    });
    it('Client delay button', () => {
        cy.visit("/clientdelay")
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should("have.text","Data calculated on the client side.")
    });


    it.only('progress bar (wait until manual on the fly wait)', () => {
        cy.visit("/progressbar")
        cy.get('#startButton').click()
        cy.get('#progressBar',{timeout:30000}).should("have.text","100%")
        //BEST practice alternate commands and assertions, if you after this are going to use 
        // a find function the should have to be there before the find
    });
});