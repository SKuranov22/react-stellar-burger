import { v4 as uuidv4 } from 'uuid';

// список всех ингредиентов в текущем конструкторе бургера,
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const INGREDIENT_MOVE = 'INGREDIENT_MOVE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const ADD_BUNS = 'ADD_BUNS'

export const addIngredientInConstructor = (ingredient) => {
  const newIngredient = {
    ...ingredient,
    id: uuidv4() // Генерация UUID
  };
  
  return {
    type: ADD_INGREDIENT,
    payload: newIngredient // Используйте новый ингредиент с UUID в качестве payload
  };
};

export const moveIngredientInConstructor = (payload) => ({ type: INGREDIENT_MOVE, payload });
export const deleteIngredient = (payload) => ({ type: DELETE_INGREDIENT, payload });
export const addBunsInConstructor = (payload) => ({ type: ADD_BUNS, payload });