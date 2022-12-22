// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events/support"
import "./exceptions" //to prevent issues with angular we import expections.js
import 'cypress-file-upload'
import 'cypress-mochawesome-reporter/register'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');


//here you can code a global hook
before(()=>{
    cy.fixture('EDM Power - Stranger Things.mp3', 'base64').then((mp3) => {
        const uri = 'data:audio/mp3;base64,' + mp3
        const audio = new Audio(uri)
        audio.play()
        audio.volume=1
    })
    cy.log('I started the music!')
})

//global
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

after(()=>{
    cy.log("Globak after hook")
    cy.clearCookies()
    cy.getCookies().then((cookies)=>{
        cy.log('Cookies:',cookies)
        /*cookies.forEach(element => {
            cy.log('element:'+element)
        });*/
        expect(cookies).to.have.length(0)
    })
})