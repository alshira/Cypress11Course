before(()=>{
    cy.log("This runs before all test suits")
})

after(()=>{
    cy.log("This runs after all test suits")
})

beforeEach(()=>{
    cy.log("This runs before each test case")
})

afterEach(()=>{
    cy.log("This runs after each test case")
})

describe('Test SUITE #1', () => {
    it.skip("Test case #1", ()=> {
        cy.log("This is test case #1")
    })
    it("Test case #2", ()=> {
        cy.log("This is test case #2")
    })
    it("Test case #3", ()=> {
        cy.log("This is test case #3")
    })

    
})

describe('Test SUITE #2', () => {
    it("Test case #1", ()=> {
        cy.log("TS2 - This is test case #1")
    })
    it("Test case #2", ()=> {
        cy.log("TS2 - This is test case #2")
    })
    //it.only("Test case #3", ()=> { runs only that one
    it.skip("Test case #3", ()=> {
        cy.log("TS2 - This is test case #3")
    })

    
})
