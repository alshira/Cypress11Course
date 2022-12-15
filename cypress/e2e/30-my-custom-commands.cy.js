describe('My custom commands set of tests', () => {
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
            cy.visit('/login')
    })

    it.only('testing mylogin commnad', () => {
        cy.mylogin('test','Test#1234')
        cy.url().should('contain','profile')  
        cy.screenshot()  
    });


    it('wrong credentials scenario', () => {
        cy.mylogin('wrongusername','wrongpass')
        cy.url().should('contain','login')  
        cy.screenshot()  
    });


    it('', () => {
        
    });

});