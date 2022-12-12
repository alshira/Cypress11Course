//it uses a plugin
//npm install cypress-real-events
describe('mouse over scenario', () => {
    beforeEach(()=>{
        cy.visit("/mouseover")
        
    })
    it('Cypress way', () => {
        cy.get('.text-primary').trigger("mouseover")
    });

    //npm install cypress-real-events it only works with cypress 11 at 2022/12/08 13:39
    it('Using pluggin "cypress real event"', () => {
        //cy.get('a').should("have.text","Click me").focused().realHover();
        cy.get('.text-primary').realHover();
    });

   
});