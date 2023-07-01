import { ingredientsReducer } from '../ingredients-data';
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
} from '../../actions/ingredients-data';

describe('Ingredients Data Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      items: null,
      itemsRequest: false,
      itemsFailed: false,
      itemsLoaded: false,
    };

    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const action = getIngredientsRequest();

    const initialState = {
      items: null,
      itemsRequest: false,
      itemsFailed: false,
      itemsLoaded: false,
    };

    const expectedState = {
      items: null,
      itemsRequest: true,
      itemsFailed: false,
      itemsLoaded: false,
    };

    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const ingredients = [
      { id: '1', name: 'Cheese', price: 1.5 },
      { id: '2', name: 'Tomato', price: 0.99 },
    ];
    const action = getIngredientsSuccess(ingredients);

    const initialState = {
      items: null,
      itemsRequest: true,
      itemsFailed: false,
      itemsLoaded: false,
    };

    const expectedState = {
      items: ingredients,
      itemsRequest: false,
      itemsFailed: false,
      itemsLoaded: true,
    };

    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const action = getIngredientsFailed();

    const initialState = {
      items: null,
      itemsRequest: true,
      itemsFailed: false,
      itemsLoaded: false,
    };

    const expectedState = {
      items: null,
      itemsRequest: false,
      itemsFailed: true,
      itemsLoaded: false,
    };

    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });
});
