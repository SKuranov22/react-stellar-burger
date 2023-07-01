import 'cypress-file-upload';
import '@testing-library/cypress/add-commands';

describe('Burger Constructor', () => {
  beforeEach(() => {
    cy.visit('/burger-constructor');
  });

  it('should allow dragging ingredients and creating an order', () => {
    cy.get('[data-cy="ingredient"]').first().as('ingredient');
    cy.get('[data-cy="filling-area"]').as('fillingArea');

    cy.get('@ingredient').trigger('dragstart');
    cy.get('@fillingArea').trigger('drop');
    cy.get('@fillingArea').trigger('dragend');

    cy.get('@fillingArea').should('contain', 'Название ингредиента');

    cy.get('[data-cy="order-button"]').click();

    cy.get('[data-cy="order-details"]').should('be.visible');

    cy.get('[data-cy="close-modal"]').click();
    cy.get('[data-cy="order-details"]').should('not.exist');
  });

  it('should redirect to login page when not authenticated', () => {
    cy.visit('/login');

    cy.get('[data-cy="login-email"]').type('test@example.com');
    cy.get('[data-cy="login-password"]').type('password');
    cy.get('[data-cy="login-submit"]').click();

    cy.visit('/burger-constructor');

    cy.get('[data-cy="ingredient"]').first().as('ingredient');
    cy.get('[data-cy="filling-area"]').as('fillingArea');

    cy.get('@ingredient').trigger('dragstart');
    cy.get('@fillingArea').trigger('drop');
    cy.get('@fillingArea').trigger('dragend');

    cy.url().should('include', '/login');
  });
});
