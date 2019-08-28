import { AUTH_GITHUB_SAGA_START, AUTH_GITHUB_SAGA_SUCCESS, AUTH_GITHUB_SAGA_ERROR } from '../actions/authAction.js';

const initialState = Object.freeze({
  authIsStarting: false,
  token: null,
  authError: null,
});

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GITHUB_SAGA_START:
      return {
        ...state,
        authIsStarting: true,
      };
    case AUTH_GITHUB_SAGA_SUCCESS:
      console.log('Auth successful');
      return {
        ...state,
        authIsStarting: false,
        authError: null,
        token: action.payload.token,
      };
    case AUTH_GITHUB_SAGA_ERROR:
      console.log('authentification failed');
      return {
        ...state,
        authIsStarting: false,
        authError: 'Authentification failed',
      };

    default:
      return state;
  }
};
