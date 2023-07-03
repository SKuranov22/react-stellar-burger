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
        ingredient: null,
        ingredientRequest: false,
        ingredientFailed: false,
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
        orders: [],
        total: null,
        totalToday: null,
      },
      wsAuthOrders: {
        wsAuthConnected: false,
        orders: [],
        total: null,
        totalToday: null,
      },
      currentOrder: {
        order: null,
        orderRequest: false,
        orderFailed: false,
      },
    };

    expect(store.getState()).toEqual(expectedState);
  });

});
