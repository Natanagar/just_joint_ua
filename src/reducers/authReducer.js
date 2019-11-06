import {
  AUTH_GITHUB_SAGA_START, AUTH_GITHUB_SAGA_SUCCESS, AUTH_GITHUB_SAGA_ERROR, AUTH_FIRESTORE_SAGA_START, AUTH_FIRESTORE_SAGA_SUCCESS, AUTH_FIRESTORE_SAGA_ERROR,
} from '../actions/authAction.js';


const initialState = Object.freeze({
  authIsStarting: false,
  token: null,
  authError: null,
  isFired: false,
  user: {
    email: '',
    password: '',
  },
});

// eslint-disable-next-line import/prefer-default-export
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
    case AUTH_FIRESTORE_SAGA_START:
      console.log('FIRESTORE START');
      return {
        ...state,
        isFired: true,
      };
    case AUTH_FIRESTORE_SAGA_SUCCESS:
      console.log('Auth FIRESTORE  successful');
      return {
        ...state,
        isFired: false,
        authError: null,
        user: action.payload.user,
      };
    case AUTH_FIRESTORE_SAGA_ERROR:
      console.log('FIRESTORE FAIILED');
      return {
        ...state,
        isFired: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
