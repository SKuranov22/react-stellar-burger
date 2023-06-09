// список всех полученных ингредиентов,

import { getAllIngredients } from '../../API/api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getItemsData() {
  return function (dispatch) {
    // Диспатч экшена для запроса данных
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })

    // Выполнение запроса на получение данных
    getAllIngredients()
      .then(res => {
        // Проверка успешности запроса и диспатч экшена с полученными данными
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data
          })
        } else {
          // Диспатч экшена при неудачном запросе
          dispatch({
            type: GET_INGREDIENTS_FAILED
          })
        }
      })
      .catch(error => {
        // Диспатч экшена при возникновении ошибки
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
        // Вывод сообщения об ошибке в консоль
        console.error('An error occurred:', error);
      });
  }
}

