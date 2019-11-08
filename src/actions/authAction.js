import { firebase } from 'react-redux-firebase'
import { getStoredState } from 'redux-persist/es/integration/getStoredStateMigrateV4'
import store from '../store/index'
import { makeActionCreator } from './utils/index'
// authentification firebase/firestore
export const AUTH_FIRESTORE_SAGA_START = 'AUTH_FIRESTORE_SAGA_START'
export const AUTH_FIRESTORE_SAGA_SUCCESS = 'AUTH_FIRESTORE_SAGA_SUCCESS'
export const AUTH_FIRESTORE_SAGA_ERROR = 'AUTH_FIRESTORE_SAGA_ERROR'

export const AUTH_FIRESTORE_SAGA_CREATE_START = 'AUTH_FIRESTORE_SAGA_CREATE_START'
export const AUTH_FIRESTORE_SAGA_CREATE_SUCCESS = 'AUTH_FIRESTORE_SAGA_CREATE_SUCCESS'
export const AUTH_FIRESTORE_SAGA_CREATE_ERROR = 'AUTH_FIRESTORE_SAGA_CREATE_ERROR'

// authentification github OAuth
export const AUTH_GITHUB_SAGA_START = 'AUTH_GITHUB_SAGA_START'
export const AUTH_GITHUB_SAGA_SUCCESS = 'AUTH_GITHUB_SAGA_SUCCESS'
export const AUTH_GITHUB_SAGA_ERROR = 'AUTH_GITHUB_SAGA_ERROR'

// authentification facebook OAuth
export const AUTH_FACEBOOK_SAGA_START = 'AUTH_FACEBOOK_SAGA_START'
export const AUTH_FACEBOOK_SAGA_SUCCESS = 'AUTH_FACEBOOK_SAGA_SUCCESS'
export const AUTH_FACEBOOK_SAGA_ERROR = 'AUTH_FACEBOOK_SAGA_ERROR'

// authentification google OAuth
export const AUTH_GOOGLE_SAGA_START = 'AUTH_GOOGLE_SAGA_START'
export const AUTH_GOOGLE_SAGA_SUCCESS = 'AUTH_GOOGLE_SAGA_SUCCESS'
export const AUTH_GOOGLE_SAGA_ERROR = 'AUTH_GOOGLE_SAGA_ERROR'

// custom authentification OAuth
export const AUTH_CUSTOM_SAGA_START = 'AUTH_CUSTOM_SAGA_START'
export const AUTH_CUSTOM_SAGA_SUCCESS = 'AUTH_CUSTOM_SAGA_SUCCESS'
export const AUTH_CUSTOM_SAGA_ERROR = 'AUTH_CUSTOM_SAGA_ERROR'

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
  dispatch({ type: 'AUTH_GITHUB_SAGA_START' })
  return (dispatch, getStoredState, { getFirebase }) => {
    const firebase = getFirebase()
    console.log(firebase)
    firebase
      .auth()
      .sighInWithEmailAndPassword(credential.email, credential.password)
      .then(() => dispatch({ type: 'AUTH_GITHUB_SAGA_SUCCESS' }))
      .catch((error) => dispatch({ type: 'AUTH_GITHUB_SAGA_ERROR', error }))
  }
}

export const loginStart = makeActionCreator(AUTH_FIRESTORE_SAGA_START, 'isFired')
export const loginSuccess = (user) => ({
  type: 'AUTH_FIRESTORE_SAGA_SUCCESS',
  user: {
    email: user.emal,
    password: user.password
  }
})
export const loginFailure = makeActionCreator(AUTH_FIRESTORE_SAGA_ERROR, 'error')

export const createStart = makeActionCreator(AUTH_FIRESTORE_SAGA_CREATE_START, 'isFired')
export const createSuccess = (user) => ({
  type: 'AUTH_FIRESTORE_SAGA_CREATE_SUCCESS',
  user: {
    email: user.email,
    password: user.password,
    first: user.firstName,
    last: user.lastName
  }
})
export const createFailure = makeActionCreator(AUTH_FIRESTORE_SAGA_CREATE_ERROR, 'error')
export const facebookSuccess = (user) => ({
  type: 'AUTH_FACEBOOK_SAGA_SUCCESS',
  user
})
export const facebookFailure = makeActionCreator(AUTH_FACEBOOK_SAGA_ERROR, 'error')
