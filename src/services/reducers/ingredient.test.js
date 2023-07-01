import { ingredientReducer } from '../ingredient';
import { addIngredientInfo, deleteIngredientInfo } from '../../actions/ingredient';

describe('Ingredient Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      information: null
    };

    expect(ingredientReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_INGREDIENT_INFO', () => {
    const ingredient = { id: '1', name: 'Tomato', price: 0.99 };
    const action = addIngredientInfo(ingredient);

    const expectedState = {
      information: ingredient
    };

    expect(ingredientReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle DELETE_INGREDIENT_INFO', () => {
    const initialState = {
      information: { id: '1', name: 'Tomato', price: 0.99 }
    };

    const action = deleteIngredientInfo();

    const expectedState = {
      information: null
    };

    expect(ingredientReducer(initialState, action)).toEqual(expectedState);
  });
});
