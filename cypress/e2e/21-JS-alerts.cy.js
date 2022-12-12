describe('JavaScript Alerts scenario', () => {

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
    cy.visit('/javascript_alerts')
    })

    it.skip('JS alert', () => {
        //cy.get('button').contains('Click for JS Alert').click() // it will hang cypress
        cy.contains('button','Click for JS Alert').click() // it will hang cypress
        cy.on('window:alert',(msg)=>{
            expect(msg).to.be.equal('I am a JS Alert')
        })
        //arrow function = anonymous function = lambda expression
        cy.on('window:confirm',()=>true)//we do click the OK button of alert
        cy.get('p#result').should('have.text','You successfully clicked an alert')
        
    });
    it('JS Confirm Accept', () => {
        cy.contains('button','Click for JS Confirm').click()
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.be.equal('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>true)//we do click the OK button of alert
        cy.get('p#result').should('have.text','You clicked: Ok')
    });


    it('JS Confirm Cancel', () => {
        cy.contains('button','Click for JS Confirm').click()
        cy.on('window:confirm',(msg)=>{
            expect(msg).to.be.equal('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false)//we do click the OK button of alert
        cy.get('p#result').should('have.text','You clicked: Cancel')
    });

    it.only('JS prompt', () => {
        //
        cy.window().then((popup)=>{
            //stub allow us to rewrite functions
            cy.stub(popup,'prompt').returns(
                'This is a hello world from the prompt alert'
            )
            cy.contains('button','Click for JS Prompt').click()
        })
        cy.get('p#result').should('have.text','You entered: This is a hello world from the prompt alert')
    });

});