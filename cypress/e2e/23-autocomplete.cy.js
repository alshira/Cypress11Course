describe('Autocomplete set of tests', () => {
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
    cy.visit('/auto-complete')
    })

    it.only('Autocomplete demo using Yellow', () => {
        /*
        How to find a div that auto-hides and no able to "inspect" with debugger
        1) we select the parent DIV of the input field, if is not the envelope you won't be able catch the contextual DIV with options
        2) right click>> inspect>> then look in code for "parent DIV" and right click >> Break on >> Subtreee modifications
        3) press blue play button until input text is able to recieve input
        4) press Y to get the auto-complete option "Yelow"
        5) in debbugger, on upper-left side there is an "cursor" icon press on it then select the "Yellow" auto-compelte option
        6) form that big element with lot of classes take only the id: id="react-select-2-option-0"
        */
        //id="react-select-2-option-0"
        cy.get('.auto-complete__value-container').first().type('Y')
        cy.contains('#react-select-2-option-0','Yellow').click() //we pick the propted value
        cy.get('.auto-complete__multi-value__label').should('have.text','Yellow') // we verify the remain text is the correct
        
    });

    it('', () => {
        
    });


    it('', () => {
        
    });

});