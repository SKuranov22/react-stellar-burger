import { resetPasswordReducer } from '../reset-password';
import {
  verificationEmailRequest,
  verificationEmailSuccess,
  verificationEmailFailed,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailed,
} from '../../actions/reset-password';

describe('Reset Password Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      emailRequest: false,
      emailRequestFailed: false,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle VERIFICATION_EMAIL_REQUEST', () => {
    const action = verificationEmailRequest();

    const initialState = {
      emailRequest: false,
      emailRequestFailed: false,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    const expectedState = {
      ...initialState,
      emailRequest: true,
    };

    expect(resetPasswordReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle VERIFICATION_EMAIL_SUCCESS', () => {
    const verificationSent = true;
    const action = verificationEmailSuccess(verificationSent);

    const initialState = {
      emailRequest: true,
      emailRequestFailed: false,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    const expectedState = {
      ...initialState,
      emailRequest: false,
      verificationSent,
      emailRequestFailed: false,
    };

    expect(resetPasswordReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle VERIFICATION_EMAIL_FAILED', () => {
    const action = verificationEmailFailed();

    const initialState = {
      emailRequest: true,
      emailRequestFailed: false,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    const expectedState = {
      ...initialState,
      emailRequest: false,
      emailRequestFailed: true,
    };

    expect(resetPasswordReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_PASSWORD_REQUEST', () => {
    const action = resetPasswordRequest();

    const initialState = {
      emailRequest: false,
      emailRequestFailed: false,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    const expectedState = {
      ...initialState,
      resetPasswordRequest: true,
    };

    expect(resetPasswordReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_PASSWORD_SUCCESS', () => {
    const action = resetPasswordSuccess();

    const initialState = {
      emailRequest: false,
      emailRequestFailed: false,
      resetPasswordRequest: true,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    const expectedState = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: false,
    };

    expect(resetPasswordReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_PASSWORD_FAILED', () => {
    const action = resetPasswordFailed();

    const initialState = {
      emailRequest: false,
      emailRequestFailed: false,
      resetPasswordRequest: true,
      resetPasswordRequestFailed: false,
      verificationSent: false,
    };

    const expectedState = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordRequestFailed: true,
    };

    expect(resetPasswordReducer(initialState, action)).toEqual(expectedState);
  });

  // И прочие тесты...

});