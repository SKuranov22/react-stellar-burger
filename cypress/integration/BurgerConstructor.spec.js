import '@testing-library/cypress/add-commands';

describe('BurgerConstructor Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('/'); // Предварительно откройте страницу с компонентом BurgerConstructor
    cy.wait(5000);
  });

  it('should allow dragging and dropping ingredients', () => {
    // Выбираем ингредиент, который мы будем перетаскивать
    cy.get('.Ingredient_ingredient__i6v0A').eq(2).as('ingredient');

    // Выбираем контейнер для перетаскивания (filling)
    cy.get('.BurgerConstructor_filling__0KjqM').as('fillingContainer');

    // Перетаскиваем ингредиент в filling контейнер
    cy.get('@ingredient').trigger('mousedown', { button: 0 });
    cy.get('@fillingContainer').trigger('mousemove').trigger('mouseup', { force: true });

    // Проверяем, что ингредиент успешно добавлен в filling контейнер
    cy.get('.BurgerConstructor_filling__0KjqM').should('have.length', 1);
  });
});
