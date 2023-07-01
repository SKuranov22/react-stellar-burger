import { wsAuthReducer } from '../ws-auth-reducers';
import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_GET_AUTH_ORDERS
} from '../../actions/ws-auth-actions';

describe('wsAuthReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      wsAuthConnected: false,
      wsAuthError: undefined,
      orders: null,
      total: 0,
      totalToday: 0
    };
    expect(wsAuthReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle WS_AUTH_CONNECTION_SUCCESS', () => {
    const action = { type: WS_AUTH_CONNECTION_SUCCESS };
    const expectedState = {
      wsAuthConnected: true,
      wsAuthError: undefined,
      orders: null,
      total: 0,
      totalToday: 0
    };
    expect(wsAuthReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle WS_AUTH_CONNECTION_ERROR', () => {
    const error = 'Connection error';
    const action = { type: WS_AUTH_CONNECTION_ERROR, payload: error };
    const expectedState = {
      wsAuthConnected: false,
      wsAuthError: error,
      orders: null,
      total: 0,
      totalToday: 0
    };
    expect(wsAuthReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle WS_AUTH_CONNECTION_CLOSED', () => {
    const action = { type: WS_AUTH_CONNECTION_CLOSED };
    const expectedState = {
      wsAuthConnected: false,
      wsAuthError: undefined,
      orders: null,
      total: 0,
      totalToday: 0
    };
    expect(wsAuthReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle WS_GET_AUTH_ORDERS', () => {
    const orders = [{ id: 1, name: 'Order 1' }, { id: 2, name: 'Order 2' }];
    const total = 2;
    const totalToday = 1;
    const action = {
      type: WS_GET_AUTH_ORDERS,
      payload: { orders, total, totalToday }
    };
    const expectedState = {
      wsAuthConnected: false,
      wsAuthError: undefined,
      orders,
      total,
      totalToday
    };
    expect(wsAuthReducer(undefined, action)).toEqual(expectedState);
  });
});
