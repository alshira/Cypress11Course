describe('Environment Variable Demo', () => {
    it('Demo', () => {
        cy.log('This is my env var:'+Cypress.env("envVar"))
    });
});