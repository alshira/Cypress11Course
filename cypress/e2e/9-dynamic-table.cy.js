describe('advanced validation', () => {
    beforeEach(()=>{
        cy.visit("/dynamictable")
    })
    it('Chrome CPU usage', () => {
        //we pick one leement from Cypress
        //cy.get('[role="table"] > :nth-child(3) > :nth-child(1) > :nth-child(1)')

        //from there we contstruct this
        cy.get('div[role="table"] span').each(($cell)=>{
            // this will retrieve every single cell
            //cy.log($cell.text()) 

            if($cell.text().includes("Chrome")){
                let row = []
                row.push($cell.next().text())
                row.push($cell.next().next().text())
                row.push($cell.next().next().next().text())
                row.push($cell.next().next().next().next().text())
                cy.log($cell.text())
                cy.log(row)

                
                row.forEach(($element)=>{
                    if ($element.includes("%")){
                        let value=$element.toString()
                        cy.log(value)
                        //cy.get('.bg-warning').should("have.text","Chrome CPU: "+value)
                        cy.get('.bg-warning').should("contain",value)
                    }
                    
                })
                
            }
        })
    });
});