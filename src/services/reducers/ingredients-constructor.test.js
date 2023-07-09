import { ingredientsConstructorReducer, initialState } from './ingredients-constructor';
import {
  addIngredient,
  moveIngredientInConstructor, // Обновлено: правильный импорт функции
  deleteIngredient,
  addBuns,
  deleteAllIngredients,
} from '../actions/ingredients-constructor';


describe('Ingredients Constructor Reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientsConstructorReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_BUNS', () => {
    const buns = [{ id: '1', name: 'Bun', price: 1.99 }];
    const action = { type: 'ADD_BUNS', payload: buns };

    const expectedState = {
      ingredients: [],
      buns,
    };

    expect(ingredientsConstructorReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_INGREDIENT', () => {
    const ingredient = { id: '2', name: 'Tomato', price: 0.99 };
    const action = { type: 'ADD_INGREDIENT', payload: ingredient };

    const expectedState = {
      ingredients: [ingredient],
      buns: [],
    };

    expect(ingredientsConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_INGREDIENT', () => {
    const ingredient1 = { id: '2', name: 'Tomato', price: 0.99 };
    const ingredient2 = { id: '3', name: 'Lettuce', price: 0.5 };
    const initialState = {
      ingredients: [ingredient1, ingredient2],
      buns: [],
    };

    const action = { type: 'DELETE_INGREDIENT', payload: '2' };

    const expectedState = {
      ingredients: [ingredient2],
      buns: [],
    };

    expect(ingredientsConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_ALL_INGREDIENTS', () => {
    const initialState = {
      ingredients: [{ id: '1', name: 'Cheese', price: 1.5 }],
      buns: [{ id: '2', name: 'Bun', price: 1.99 }],
    };

    const action = { type: 'DELETE_ALL_INGREDIENTS' };

    const expectedState = {
      ingredients: [],
      buns: [],
    };

    expect(ingredientsConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle INGREDIENT_MOVE', () => {
    const ingredient1 = { id: '1', name: 'Cheese', price: 1.5 };
    const ingredient2 = { id: '2', name: 'Tomato', price: 0.99 };
    const ingredient3 = { id: '3', name: 'Lettuce', price: 0.5 };
    const initialState = {
      ingredients: [ingredient1, ingredient2, ingredient3],
      buns: [],
    };
  
    const action = moveIngredientInConstructor(0, 2); // Обновлено: передача индексов как отдельных аргументов
  
    const expectedState = {
      ingredients: [ingredient2, ingredient3, ingredient1],
      buns: [],
    };
  
    expect(ingredientsConstructorReducer(initialState, action)).toEqual(expectedState);
  });
  
});

