//plugin required
// npm install cypress-file-upload

describe('Uploading files', () => {
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
        cy.get('@mySites').then((mySites) => {
            Cypress.config('baseUrl', mySites.demoQA)
            cy.log(mySites.demoQA)
        })
    cy.visit('/upload-download')
    })

    //plugin required
    // npm install cypress-file-upload
    it('upload scenario', () => {
        cy.get('div.form-file > input#uploadFile').attachFile('example.json')
        cy.get('p#uploadedFilePath').should('contain','fakepath')
        //here is missing a validation to waint until upload is done
        //in this page there is no button to upload and practice it
    });
});