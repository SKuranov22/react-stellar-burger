import '@testing-library/cypress/add-commands';

describe('BurgerConstructor Drag and Drop', () => {
  beforeEach(() => {
    cy.visit('/'); // Предварительно откройте страницу с компонентом BurgerConstructor
    cy.wait(5000);
  });

  it('should allow dragging and dropping ingredients', () => {
    // Выбираем ингредиент, который мы будем перетаскивать
    cy.get('[class^="Ingredient_ingredient__"]').eq(2).as('ingredient');

    // Выбираем контейнер для перетаскивания (filling)
    cy.get('[class^="BurgerConstructor_filling__"]').as('fillingContainer');

    // Перетаскиваем ингредиент в filling контейнер
    cy.get('@ingredient').trigger('mousedown', { button: 0 });
    cy.get('@fillingContainer').trigger('mousemove').trigger('mouseup', { force: true });

    // Проверяем, что ингредиент успешно добавлен в filling контейнер
    cy.get('[class^="BurgerConstructor_filling__"]').should('have.length', 1);
  });
});
