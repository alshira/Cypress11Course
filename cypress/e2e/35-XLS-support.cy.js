//npm install node-xlsx
//config added
//command added
describe('Excel playground set fo tests', () => {
    it('read data from excel', () => {
        cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData)=>{
            cy.log(jsonData)
        })
        
    });
    it.only('Write data from excel', () => {
        cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData)=>{
            //cy.log(jsonData)
            cy.log(jsonData[0].data)
            let data = jsonData[0].data
            let dataLen = data.length
            data.forEach(col => {
                cy.log(col[0])
                cy.log(col[1])
            });
            data.forEach(col => {
                cy.writeFile("cypress/fixtures/excelData.json", {
                    username: col[0],
                    password: col[1],
                    other:  col[2],
                })
            });

        })
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

});