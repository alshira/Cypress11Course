let globalVariable = 'This is my global variable'
describe('This is a set of tests about variables', () => {
    beforeEach(()=>{
        cy.fixture('sites').as('mySites')
        cy.get('@mySites').then((mySites) => {
            Cypress.config('baseUrl', mySites.uitesting)
            cy.log(mySites.uitesting)
        })
        cy.visit('/dynamicid')
    })

    //THIS ISN WORNG and shouldn't be used
    it.only('Wrong old stuff to get a value', () => {
        let value = cy.contains('button','Button with Dynamic ID')
        cy.log('value old stuff:',value)
        cy.log('global variable:',globalVariable)
    });

    //it.only('Cypress way to get a value', () => { //with arrow function wont' work
    it.only('Cypress way to get a value', function (){
        //to access the text we need access the closure, (then, and or should)
        cy.contains('button','Button with Dynamic ID')
        .invoke('text')
        .then( (text)=> {
            cy.log('Correct way:',text)
            globalVariable = text
           
            cy.log('globalVariable(value that happens with yield):',globalVariable)
            //to really send global we MUST:
            cy.wrap(globalVariable).as('exposedVariable')// we expose as global
        })
        //if we call the global variable outside recovers it's previous value
        cy.log('globalVariable(previous value):',globalVariable)
        cy.get('@exposedVariable').then((text)=>{
            cy.log('This is the exposed value:',text)
        })
    });

    it.only('Sharing with another its', function () {
    //it.only('Sharing with another its', () => { //wont' work with lambda expressions
        //the real way to expose a value to global
        globalVariable = this.exposedVariable;
       
        cy.log('Accessing form another it: ',globalVariable)
    });

    it('', () => {
        
    });

});