//npm install node-xlsx
//config added
//command added
describe('Excel playground set fo tests', () => {
    it.only('read data from excel', () => {
        cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData)=>{
            cy.log(jsonData)
        })
        
    });
    it('', () => {
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

});