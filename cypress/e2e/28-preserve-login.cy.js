/*
this uses a set on cypress.config.js inside e2e
ee2e: {
    experimentalSessionAndOrigin: '...',
  }
  */
Cypress.session.clearAllSavedSessions()
describe('Preserve login set of tests', () => {
    before(()=>{
        cy.fixture('EDM Power - Stranger Things.mp3', 'base64').then((mp3) => {
            const uri = 'data:audio/mp3;base64,' + mp3
            const audio = new Audio(uri)
            audio.play()
            audio.volume=0
        })
    })
    
    beforeEach(()=>{

        cy.session('mysession',()=>{
            cy.fixture('sites').as('mySites')
            cy.get('@mySites').then((mySites) => {
                Cypress.config('baseUrl', mySites.demoQA)
                cy.log(mySites.demoQA)
            })
            cy.visit('/login')
            cy.get('#userName').type('test')
            cy.get('#password').type('Test#1234')
            cy.get('#login').click()
            cy.url().should('contain','profile')    
        })
        
    })

    it('goit preserved!', () => {
        //cy.log('se preservò!'+mySites.demoQA) no preserva esto porque lo que preserva esta en cookies no es el código en sí
        cy.visit('/profile') // now we can visit the profile without get redirected out
        cy.get('#searchBox').type('The power of now')
        cy.get('#basic-addon2').click()
        cy.wait(2000)
        cy.get('#books-wrapper > .text-right > #submit').click()
    });


    it.only('Failed login ', () => {
        cy.visit('/profile') // now we can visit the profile without get redirected out
        cy.get('#books-wrapper > .text-right > #submit').click()
        cy.get('#userName').type('tiesto')
        cy.get('#password').type('falso.com')
        cy.get('#login').click()
        cy.get('#name').should('have.text','Invalid username or password!')

    });


    it.skip('Register a new user', () => {
    cy.get('#newUser').click()
    cy.get('#firstname').type('Carlos')
    cy.get('#lastname').type('Cervantes')
    cy.get('#userName').type('test')
    cy.get('#password').type('Test#1234')
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
    cy.wait(10000)
    cy.get('#register').click()
    });

});