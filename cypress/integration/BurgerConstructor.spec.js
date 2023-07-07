import 'cypress-file-upload';
import '@testing-library/cypress/add-commands';

describe('Burger Constructor', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow dragging ingredients for DnD', () => {
    cy.get('.FillingElement').first().as('ingredient');
    cy.get('.filling').as('fillingArea');

    cy.get('@ingredient').trigger('dragstart');
    cy.get('@fillingArea').trigger('drop');
    cy.get('@fillingArea').trigger('dragend');

    cy.get('@fillingArea').should('contain', 'Название ингредиента');
  });
});
