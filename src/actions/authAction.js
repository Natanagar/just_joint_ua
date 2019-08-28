import { firebase } from 'react-redux-firebase';
import { getStoredState } from 'redux-persist/es/integration/getStoredStateMigrateV4';
import store from '../store/index';
// authentification github OAuth
export const AUTH_GITHUB_SAGA_START = 'AUTH_GITHUB_SAGA_START';
export const AUTH_GITHUB_SAGA_SUCCESS = 'AUTH_GITHUB_SAGA_SUCCESS';
export const AUTH_GITHUB_SAGA_ERROR = 'AUTH_GITHUB_SAGA_ERROR';

// authentification facebook OAuth
export const AUTH_FACEBOOK_SAGA_START = 'AUTH_FACEBOOK_SAGA_START';
export const AUTH_FACEBOOK_SAGA_SUCCESS = 'AUTH_FACEBOOK_SAGA_SUCCESS';
export const AUTH_FACEBOOK_SAGA_ERROR = 'AUTH_FACEBOOK_SAGA_ERROR';

// authentification google OAuth
export const AUTH_GOOGLE_SAGA_START = 'AUTH_GOOGLE_SAGA_START';
export const AUTH_GOOGLE_SAGA_SUCCESS = 'AUTH_GOOGLE_SAGA_SUCCESS';
export const AUTH_GOOGLE_SAGA_ERROR = 'AUTH_GOOGLE_SAGA_ERROR';

// custom authentification OAuth
export const AUTH_CUSTOM_SAGA_START = 'AUTH_CUSTOM_SAGA_START';
export const AUTH_CUSTOM_SAGA_SUCCESS = 'AUTH_CUSTOM_SAGA_SUCCESS';
export const AUTH_CUSTOM_SAGA_ERROR = 'AUTH_CUSTOM_SAGA_ERROR';

/* export const authGithubIsStarting = authIsStarting => ({
  type: 'AUTH_GITHUB_SAGA_START',
  authIsStarting,
});
export const authGithubIsCompleted = token => ({
  type: 'AUTH_GITHUB_SAGA_SUCCESS',
  token,
});
export const authGithubWithError = error => ({
  type: 'AUTH_GITHUB_SAGA_ERROR',
  payload: error,
}); */

export const SignInGithub = (credential, dispatch) => {
  dispatch({ type: 'AUTH_GITHUB_SAGA_START' });
  return (dispatch, getStoredState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase);
    firebase
      .auth()
      .sighInWithEmailAndPassword(credential.email, credential.password)
      .then(() => dispatch({ type: 'AUTH_GITHUB_SAGA_SUCCESS' }))
      .catch(error => dispatch({ type: 'AUTH_GITHUB_SAGA_ERROR', error }));
  };
};
