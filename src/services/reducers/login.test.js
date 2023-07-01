import { userInfoReducer } from '../login';
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailed,
  userLogout,
  userDataRequest,
  userDataSuccess,
  userDataFailed,
  refreshAccessTokenRequest,
  refreshAccessTokenSuccess,
  refreshAccessTokenFailed,
  userDataUpdateRequest,
  userDataUpdateSuccess,
  userDataUpdateFailed,
} from '../../actions/login';

describe('Login Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
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
        email: '',
        name: '',
      },
      accessToken: '',
      refreshToken: '',
    };

    expect(userInfoReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle USER_LOGIN_REQUEST', () => {
    const action = userLoginRequest();

    const initialState = {
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
        email: '',
        name: '',
      },
      accessToken: '',
      refreshToken: '',
    };

    const expectedState = {
      ...initialState,
      loginRequest: true,
    };

    expect(userInfoReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle USER_LOGIN_SUCCESS', () => {
    const user = {
      email: 'test@example.com',
      name: 'Test User',
    };
    const accessToken = 'access-token';
    const refreshToken = 'refresh-token';
    const action = userLoginSuccess({ user, accessToken, refreshToken });

    const initialState = {
      loginRequest: true,
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
        email: '',
        name: '',
      },
      accessToken: '',
      refreshToken: '',
    };

    const expectedState = {
      ...initialState,
      loginRequest: false,
      userDataLoaded: true,
      isAuthenticated: true,
      user,
      accessToken,
      refreshToken,
    };

    expect(userInfoReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle USER_LOGIN_FAILED', () => {
    const action = userLoginFailed();

    const initialState = {
      loginRequest: true,
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
        email: '',
        name: '',
      },
      accessToken: '',
      refreshToken: '',
    };

    const expectedState = {
      ...initialState,
      loginRequest: false,
      loginRequestFailed: true,
    };

    expect(userInfoReducer(initialState, action)).toEqual(expectedState);
  });

  // И прочие тесты...

});
