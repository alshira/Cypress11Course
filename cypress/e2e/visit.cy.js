describe('Test SUITE #1', () => {
    it("Visit URL", ()=> {
        cy.visit("/textinput")
    })
    it("We log into the console", ()=> {
        cy.log("This is the message in the console")
    })
    it("Visit URL2", ()=> {
        cy.visit("/classattr")
        cy.url().then((url)=>{
            cy.log(`Printing our URL ${url}`)
            expect(url).to.contains('')
        })

        //cy.get('.class1').expect().to.be.equal.click()
    })
   

    it("Some methods yeld some info", ()=> {
        cy.url().then((url)=>{
            cy.log(`Printing our URL ${url}`)
        })
    })

    //suportted on Cypress 12+ cross origin
    it('navigates', () => {
        //this is to avoid Error: Minified React error #418;
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://www.cypress.io')
        cy.visit('https://stackoverflow.com')
        cy.origin('https://stackoverflow.com', () => {
          cy.get('body') // yup all good
        })
      })

      it("title validation", ()=> {
          //this is to avoid Error: Minified React error #418;
          Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        //we read from file our fake location  
        cy.fixture('mylocation.json').as('myLocation')
        // we visit the site using our fake location
        cy.get('@myLocation').then(myLocation => {
            cy
              .visit("https://www.liverpool.com.mx/", {
                onBeforeLoad (win) {
              cy
                .stub(win.navigator.geolocation, 'getCurrentPosition')
                .callsFake((cb) => {
                       return cb(myLocation);
                });
                },
            });
          });
        //we no longer use this
        //cy.visit("https://www.liverpool.com.mx/")
        cy.title().then((title)=>{
            cy.log(title)
            expect(title).to.be.equal("Liverpool es parte de Mi vida")
        })
        //"CSS selectors"
        cy.get('input#mainSearchbar').type("Iphone{enter}")
        

    })

    it("Input Challenge", ()=> {
        cy.visit("/textinput")
        cy.get("input#newButtonName").type("Hello from Input")
        cy.get("button#updatingButton").click().should('have.text','Hello from Input')
        //expect(cy.get("button#updatingButton")).to.be.a("Hello from Input")
        //assert(cy.get("button#updatingButton")
    
    })

    it.only("looking for dynamic elements", ()=> {
        cy.visit("/dynamicid")
        cy.contains("Button with Dynamic ID").should('have.text','Button with Dynamic ID')
    })


})
