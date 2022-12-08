// npm install cypress-xpath

describe("xpath locators",()=>{
    beforeEach(()=>{
        cy.visit("/classattr")
    })
    it("how to find and element by its text",() =>{
        cy.xpath(`//*[text()='Correct variant is']`).should(
            'have.text',
            'Correct variant is')
    })

    it("how to find and element by class",() =>{
        cy.xpath(`//pre[@class=' language-html']`).should(
            'contain.text',
            'button')
    })


    it("getting yellow button by class",() =>{
        cy.xpath(`//button[contains(concat(' ', @class,' '),' btn-warning ')]`) //very careful about spaces here
        .should(
            'have.css',
            'background-color',
            "rgb(255, 193, 7)" //very careful about spaces here
            )
    })

    it("getting bue button by class",() =>{
        cy.xpath(`//button[contains(concat(' ', @class,' '),' btn-primary ')]`) //very careful about spaces here
        .should(
            'have.css',
            'background-color',
            "rgb(0, 123, 255)" //very careful about spaces here
            )
    })


})