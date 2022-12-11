describe('Set of test cases for Iframe typying', () => {
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
    cy.visit('/iframe')
    })

    it.only('Tipying inside Iframe', () => {
        //oldnotation
        //cy.get('#mce_0_ifr').then(function(iframe){
        cy.get('#mce_0_ifr').then((iframe)=>{
            const body = iframe.contents().find('body')
            cy.wrap(body)
                .find('p')
                .type('{selectAll}{ctrl+c}{del}My typed phrase goes inside IFrame{ctrl+v}')
        })

        cy.get('#mce_0_ifr').then((iframe)=>{
            const body = iframe.contents().find('body')
            cy.wrap(body)
                .find('p')
                .should('contain','My typed phrase')
        })

    });

    it('', () => {
    
    });

    it('', () => {
    
    });

});