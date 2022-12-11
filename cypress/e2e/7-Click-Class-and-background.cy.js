describe('validation of class after click', () => {
    beforeEach(()=>{
        cy.visit("/click")
        
    })
    it('class assertion', () => {
        cy.get('#badButton').click().should('have.class','btn-success')
        //cy.get('#badButton').trigger("click")
        //cy.get("#badButton").click({ force: true }).should('have.class','btn-success',{timeout:30000})
        //cy.get('#badButton').click().should('have.class','btn-success',{timeout:30000})
        //cy.get('#badButton').trigger("mouseover").wait(1000).click().should('have.class','btn-success')
    })
    it("BG assertion",()=>{
        cy.get('#badButton').click().should("have.css","background-color","rgb(40, 167, 69)")
    })
})