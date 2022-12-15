// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cy-verify-downloads') .addCustomCommand()
import '@testing-library/cypress/add-commands'
require('@4tw/cypress-drag-drop')

//declare custom command
//my custom command
Cypress.Commands.add('mylogin',(username, password)=>{
    cy.get('#userName').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()

})