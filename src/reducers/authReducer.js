import { AUTH_GITHUB_SAGA_START, AUTH_GITHUB_SAGA_SUCCESS, AUTH_GITHUB_SAGA_ERROR } from '../actions/authAction.js';

const initialState = Object.freeze({
  authIsStarting: false,
  token: null,
  error: null,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GITHUB_SAGA_START:
      return {
        ...state,
        authIsStarting: true,
      };
    case AUTH_GITHUB_SAGA_SUCCESS:
      return {
        ...state,
        authIsStarting: false,
        token: action.payload.token,
      };
    case AUTH_GITHUB_SAGA_ERROR:
      return {
        ...state,
        authIsStarting: false,
        error: action.error,
      };

    default:
      return state;
  }
};
