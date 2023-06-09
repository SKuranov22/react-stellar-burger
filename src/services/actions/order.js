import { postOrderInfo } from "../../API/api";
//объект текущего заказа
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

export const ADD_ORDER_ITEMS = 'ADD_ORDER_ITEMS';
export const DELETE_ORDER_INFO = 'DELETE_ORDER_INFO';

export const addOrderitems = (payload) => ({ type: ADD_ORDER_ITEMS, payload });
export const deleteOrderInfo = () => ({ type: DELETE_ORDER_INFO })

export function sentOrderInformation(array) {
  return function (dispatch) {
    // Отправляем действие GET_ORDER_NUMBER_REQUEST для указания начала запроса
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST
    })

    // Отправляем информацию о заказе на сервер с помощью функции postOrderInfo
    postOrderInfo(array)
      .then(res => {
        console.log(res.order.number)
        if (res && res.success) {
          // Если ответ успешный, отправляем действие GET_ORDER_NUMBER_SUCCESS
          // и передаем номер заказа в качестве полезной нагрузки
          dispatch({
            type: GET_ORDER_NUMBER_SUCCESS,
            payload: res.order.number
          })
        } else {
          // Если ответ не успешный, отправляем действие GET_ORDER_NUMBER_FAILED
          dispatch({
            type: GET_ORDER_NUMBER_FAILED
          })
        }
      })
      .catch(error => {
        // Если произошла ошибка во время запроса, отправляем действие GET_ORDER_NUMBER_FAILED
        dispatch({
          type: GET_ORDER_NUMBER_FAILED
        })
        console.error('Произошла ошибка:', error);
      });
  }
}
