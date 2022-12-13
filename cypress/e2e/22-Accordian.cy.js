describe('Accrodian set of tests', () => {
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
    cy.visit('/accordian')
    })


    it.only('Default accordion validation sample', () => {
        cy.get('#section2Heading').click()//we click next element
        //we check first element get hidden
        cy.get('#section1Heading').next().should('have.css','display','none')
        //we check second element is displayed by id of new div
        /*cy.get('#section2Content')
            .contains('Contrary to popular belief')
            .should('contain','Contrary to popular belief')*/
        //checking child div from parent
        cy.get('#section2Heading')
            .next()
            .should('have.css','display','block')
            .and('have.class','show')
            .and('contain','Contrary to popular belief')
    });

    it('', () => {
        
    });


    it('', () => {
        
    });

});