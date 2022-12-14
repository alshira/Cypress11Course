// we are using Pages folder to store the page object model
import {LoginPage, RegisterPage} from '../../cypress/pages/login/Login'

describe('Page object Model test set', () => {
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

    it('Sucessful login', () => {
        LoginPage.submitLogin('test','Test#1234')
        cy.url().should('contain','profile')    
    });


    it('Failed login', () => {
        LoginPage.submitLogin('Tiesto','Tiestin')
        //cy.get('#name').should('have.text','Invalid username or password!')  
        LoginPage.getname().should('have.text','Invalid username or password!')  
    });

});