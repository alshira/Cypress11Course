describe('set of IFrames test cases', () => {
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
    cy.visit('/nestedframes')
    })

    it.only('Reaching IFrames', () => {
        //old notation
        //cy.get('#frame1').then(function (parentIFrame){
        cy.get('#frame1').then( (parentIFrame)=>{
            const body = parentIFrame.contents().find('body') 
            cy.wrap(body).should('contain','Parent frame')
            //old notation
            //cy.wrap(body).find('iframe').then(function(childIFrame){
            cy.wrap(body).find('iframe').then((childIFrame)=>{
                const childBody = childIFrame.contents().find('body')
                cy.wrap(childBody).should('contain','Child Iframe')
            })
            cy.log(body)
           

        })
    });


    it('', () => {
        
    });

    it('', () => {
        
    });
});