import { ingredientsReducer, initialState } from '../ingredients-data';
import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsFailed,
} from '../../actions/ingredients-data';

describe('Ingredients Data Reducer', () => {
  const initialItemsState = {
    items: null,
    itemsRequest: true,
    itemsFailed: false,
    itemsLoaded: false,
  };

  it('should return the initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    const action = getIngredientsRequest();

    const expectedState = {
      ...initialItemsState,
    };

    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    const ingredients = [
      { id: '1', name: 'Cheese', price: 1.5 },
      { id: '2', name: 'Tomato', price: 0.99 },
    ];
    const action = getIngredientsSuccess(ingredients);

    const expectedState = {
      ...initialItemsState,
      items: ingredients,
      itemsRequest: false,
      itemsLoaded: true,
    };

    expect(ingredientsReducer(initialItemsState, action)).toEqual(expectedState);
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    const action = getIngredientsFailed();

    const expectedState = {
      ...initialItemsState,
      itemsRequest: false,
      itemsFailed: true,
    };

    expect(ingredientsReducer(initialItemsState, action)).toEqual(expectedState);
  });
});
