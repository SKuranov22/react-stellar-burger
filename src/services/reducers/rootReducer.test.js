import { rootReducer } from './rootReducer';
import { createStore } from 'redux';

describe('Root Reducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    const expectedState = {
      ingredients: {
        items: null,
        itemsRequest: false,
        itemsFailed: false,
        itemsLoaded: false,
      },
      constructorIngredients: {
        ingredients: [],
        buns: [],
      },
      ingredientInformation: {
        information: null,
      },
      orderInformation: {
        orderNumber: null,
        orderNumberRequest: false,
        orderNumberFailed: false,
        isLoaded: false,
        orderItems: [],
      },
      userInfo: {
        loginRequest: false,
        loginRequestFailed: false,
        userDataLoaded: false,
        userDataRequest: false,
        userDataRequestFailed: false,
        userDataUpdateRequest: false,
        userDataUpdateFailed: false,
        accessTokenRequest: false,
        accessTokenRequestFailed: false,
        isAuthenticated: false,
        user: {
          email: "",
          name: "",
        },
        accessToken: "",
        refreshToken: "",
      },
      resetPassword: {
        emailRequest: false,
        emailRequestFailed: false,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: false,
        verificationSent: false,
      },
      wsOrders: {
        wsConnected: false,
        orders: null,
        total: 0,
        totalToday: 0,
        wsError: undefined,
      },
      wsAuthOrders: {
        wsAuthConnected: false,
        orders: null,
        total: null,
        totalToday: null,
        wsAuthError: undefined,
      },
      currentOrder: {
        information: null,
      },
    };
    
    expect(store.getState()).toEqual(expectedState);
    
  });

});
