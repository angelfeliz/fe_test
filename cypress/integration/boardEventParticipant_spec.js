import { cyan } from "ansi-colors";

describe('board event with participant show detail', function(){
    it('show detail in mobil view', function(){
        cy.visit('/');
        cy.viewport(400,533);
        cy.queryByTestId('rowdetail').should('null');
        cy.getByTestId('rowitem').click().wait(400);
        cy.queryByTestId('rowdetail').should('exist');
        cy.queryByTestId('rowdetail').should('have.class','flex');
        
        cy.get('.circles_skills').within(()=>{
            let circleLetersHidden = Cypress.$(".isNotVisible:contains('W')");            
            expect(circleLetersHidden.length).equal(4);
        });

        cy.getByTestId('rowitem') .click().wait(300);

        cy.queryByTestId('rowdetail').should('null');
    });
});