import 'cypress-file-upload';
import '@testing-library/cypress/add-commands';
import { addIngredientInConstructor } from '../../src/services/actions/ingredients-constructor';

describe('Burger Constructor', () => {
  beforeEach(() => {
    cy.visit('/', { failOnStatusCode: false });

    const ingredient = {
      calories: 100,
      carbohydrates: 10,
      fat: 5,
      image: 'ingredient.jpg',
      image_large: 'ingredient_large.jpg',
      image_mobile: 'ingredient_mobile.jpg',
      name: 'Ingredient',
      price: 2.99,
      proteins: 3,
      type: 'vegetable',
      _id: 'ingredient1',
      id: 'ingredient1',
    };

    cy.window().its('store').invoke('dispatch', addIngredientInConstructor(ingredient));
  });

  it('should allow dragging ingredients for DnD', () => {
    cy.get('.addIngredient').should('not.exist');

  });
});

