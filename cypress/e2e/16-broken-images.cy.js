describe('handling broken images', () => {
    
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
    cy.visit('/broken')
    })

    it('Not broken image Assertion', () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]')
        .should('be.visible')
        .and((img)=>{
            expect(img[0].naturalWidth).to.be.greaterThan(0)
        })
       
    });

    it('Broken image Assertion', () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]')
        .should('be.visible')
        .and((img)=>{
            expect(img[0].naturalWidth).to.be.greaterThan(0) //equal 0 is a broken image
        })
        cy.log('This is a broken image')
    });
});

describe('Parsing all images and look for broken', () => {
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
            Cypress.config('baseUrl', mySites.theInternet)
            cy.log(mySites.theInternet)
        })
    cy.visit('/broken_images')
    })

    it.only('Parsing all images', () => {
        cy.get('div.example > img').as('listImages')
        cy.get('@listImages').each(image=>{
            if (image[0].naturalWidth > 0){
                expect(image[0].naturalWidth).to.be.greaterThan(0)
                cy.log('We found image with natural Width:'+image[0].naturalWidth)            
            } else {
                expect(image[0].naturalWidth).to.be.equal(0)
                cy.log('A broken iamge found')
            }
        })
    });
});