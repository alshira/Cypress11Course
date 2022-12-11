describe('Dealing with links that open in separate browsers(cypress trade off)', () => {

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
    cy.visit('/links')
    })

    it('First approach, don\'t click on the link', () => {
        cy.get('a#simpleLink').should('have.attr','href','https://demoqa.com')
        cy.get('a#simpleLink').should('have.attr','target','_blank')
    });

    it('Second approach, remove target attribute of the link', () => {
        if (cy.get('a#simpleLink').should('have.attr','target','_blank')){
            cy.get('a#simpleLink').invoke('removeAttr','target').click()
            cy.title().then((title)=>{
                cy.log(title)
                expect(title).to.be.equal('ToolsQA')
            })
            cy.url().then((url)=>{
                cy.log(`Printing our URL ${url}`)
                expect(url).to.be.equal('https://demoqa.com/')
            })
        }
    });


    it('', () => {
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

    it('Parse all links one by one', () => {
        cy.get('div#linkWrapper a').as('links')
        cy.get('@links').each(link=>{
            if (link.attr('target')){
                if (cy.get(link).should('have.attr','target','_blank')){
                    cy.get(link).invoke('removeAttr','target')
                }
            }
            cy.log('For element ['+link.attr('id')+'] the target is ['+link.attr('target')+']')
            //because we can executed, means it passes, is gathering info only
            expect(link.attr('id')).to.be.equal(link.attr('id'))
        })
    })



})

describe('Intercepting API(spy) request after clicking on a button', () => {
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
    cy.visit('/links')
    })

    it.only('Parse all links without target', () => {
        cy.get('div#linkWrapper a').as('links')
        cy.get('@links').each(link=>{
            if (!link.attr('target')){
                cy.log('For element ['+link.attr('id')+'] the target is ['+link.attr('target')+']')
                switch(link.attr('id')){
                    case "created":
                        cy.intercept('GET','https://demoqa.com/created').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/created")
                            expect(result.response.statusCode).to.be.equal(201)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;
                    case "no-content":
                        cy.intercept('GET','https://demoqa.com/no-content').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/no-content")
                            expect(result.response.statusCode).to.be.equal(204)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;
                    case "moved":
                        cy.intercept('GET','https://demoqa.com/moved').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/moved")
                            expect(result.response.statusCode).to.be.equal(301)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;
                    case "bad-request":
                        cy.intercept('GET','https://demoqa.com/bad-request').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/bad-request")
                            expect(result.response.statusCode).to.be.equal(400)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;
                    case "unauthorized":
                        cy.intercept('GET','https://demoqa.com/unauthorized').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/unauthorized")
                            expect(result.response.statusCode).to.be.equal(401)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;
                    case "forbidden":
                        cy.intercept('GET','https://demoqa.com/forbidden').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/forbidden")
                            expect(result.response.statusCode).to.be.equal(403)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;
                    case "invalid-url":
                        cy.intercept('GET','https://demoqa.com/invalid-url').as('linkStatus')
                        cy.get(link).click()
                        cy.wait('@linkStatus').then((result)=>{
                            expect(result.request.url).to.be.equal("https://demoqa.com/invalid-url")
                            expect(result.response.statusCode).to.be.equal(404)
                            cy.log('This is the request was intercepted (spied):'+result.request.url)
                            cy.log('This is the reponse from request intercepted (spied) code:'+result.response.statusCode+' message:'+result.response.statusMessage)
                        })
                    break;

                }
                //because we can executed, means it passes, is gathering info only
                //expect(link.attr('id')).to.be.equal(link.attr('id'))
    
            }
        })
    })


    it('', () => {
        
    });
});
