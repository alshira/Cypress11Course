//requires a plugin cypress-testing-library
//npm install cypress-testing-library <-- deprecated
//npm install @testing-library/cypress
describe('Date picker set of tests', () => {
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
    cy.visit('/date-picker')
    })


    it('Picking a date', () => {
        cy.get('#datePickerMonthYearInput').click()
        //we select 19 jan 1978
        //year selector
        cy.get('select.react-datepicker__year-select').select('1978')
        //prev year btn
        //react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous
        //month selector
        cy.get('select.react-datepicker__month-select').select('0')
        //my way
        //cy.get('div.react-datepicker__day').contains('1').first().click()
        //@testing-library/cypress way
        //cy.findByText('1').click()//dind't worked
        //mixing my way & plugin
        cy.get('div.react-datepicker__day').findByText('1').click()//dind't worked
        cy.get('input#datePickerMonthYearInput').should('have.value','01/01/1978')
        
    });
});