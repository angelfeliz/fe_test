
import { cyan } from 'ansi-colors';

describe('Header menu', function(){
    it('Open menu', function(){
        cy.visit('localhost:3000');
        cy.viewport(400,533);
        cy.getByTestId('openMenu').should('exist');
        cy.getByTestId('buttonMenu').click();
        cy.getByTestId('closeMenu').should('exist');
        cy.getByTestId('buttonMenu').click();
        cy.getByTestId('openMenu').should('exist');
    });
})