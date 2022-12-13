//this use plugin
//npm install @4tw/cypress-drag-drop
describe('Set fo test for drag and drop', () => {
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
    cy.visit('/droppable')
    })


    it.only('Drag & frop ', () => {
        //cy.get('#draggable').click()
        cy.get('#draggable').drag('#droppable',{force:true})
        cy.get('#simpleDropContainer > #droppable').should('have.text','Dropped!')
    });

    it('', () => {
        
    });


    it('', () => {
        
    });

});
