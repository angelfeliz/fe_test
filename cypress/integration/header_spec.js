
import { cyan } from 'ansi-colors';

describe('Header menu open and close', function(){
    it('Open menu', function(){
        cy.visit('/');
        cy.viewport(400,533);
        cy.getByTestId('openMenu').should('exist');
        cy.getByTestId('buttonMenu').click();
        cy.getByTestId('closeMenu').should('exist');
        cy.getByTestId('buttonMenu').click();
        cy.getByTestId('openMenu').should('exist');
    });
})