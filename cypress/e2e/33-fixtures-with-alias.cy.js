describe('Test set for sharing my fixture', () => {
    beforeEach(()=>{
        cy.fixture('example').as('testData')
    })
    it.only('Accessing the shared fixture#1', () => {
        cy.get('@testData').then((myTestData)=>{
            cy.log('Fixture 1:'+myTestData)
        })
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

});