//plugin is required
// npm install cy-verify-downloads
describe('Download set test cases', () => {
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

    it('Downloading file', () => {
        cy.get('a#downloadButton').click()
        cy.verifyDownload('sampleFile.jpeg')
        //here is missing the wait scenario as well on upload
    });
});