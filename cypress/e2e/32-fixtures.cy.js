import { testData} from "./model.d";
describe('Fixtures set of testig', () => {
    it('loading a file 1', () => {
        cy.fixture('example').then((fileData)=>{
            cy.log(fileData)
            cy.log(fileData.name)
            cy.log(fileData.email)
            cy.log(fileData.body)
        })
    });

    it.skip('using classes / model interfaces ', () => {
       /* 
       only typescript can handle interfaces and data types
       cy.fixture('example').then((fileData: fileData)=>{
            cy.log(fileData)
            cy.log(fileData.name)
            cy.log(fileData.email)
            cy.log(fileData.body)
        })
        */
    });

});