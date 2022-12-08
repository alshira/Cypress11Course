describe("Locators",()=>{
    beforeEach(()=>{
        cy.visit("dynamicid")
    })
    it("Cy.contains example",()=>{
        cy.contains("Button with Dynamic ID").should(
            'have.text',
            'Button with Dynamic ID'
        )
    })
    it("Cy.get + cy.find example",()=> {
        cy.get("div").find("button").should(
            "have.text",
            "Button with Dynamic ID"
        )
    })

    it("CSS selector using attribute",()=> {
        cy.get(`button[class="btn btn-primary"]`).should(
            "have.text",
            "Button with Dynamic ID"
        )
    })

    it("CSS selector using subclass",()=> {
        cy.get(".btn-primary").should(
            "have.text",
            "Button with Dynamic ID"
        )
    })

    it("CSS selector using class & subclass",()=> {
        cy.get(".btn.btn-primary").should(
            "have.text",
            "Button with Dynamic ID"
        )
    })

    it("CSS selector using element, class & subclass",()=> {
        cy.get("button.btn.btn-primary").should(
            "have.text",
            "Button with Dynamic ID"
        )
    })


})