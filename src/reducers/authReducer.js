// eslint-disable-next-line import/no-cycle
import {
  AUTH_GITHUB_SAGA_START,
  AUTH_GITHUB_SAGA_SUCCESS,
  AUTH_GITHUB_SAGA_ERROR,
  AUTH_FIRESTORE_SAGA_START,
  AUTH_FIRESTORE_SAGA_SUCCESS,
  AUTH_FIRESTORE_SAGA_ERROR,
  AUTH_FACEBOOK_SAGA_START,
  AUTH_FACEBOOK_SAGA_SUCCESS,
  AUTH_FACEBOOK_SAGA_ERROR
} from '../actions/authAction.js'

const initialState = Object.freeze({
  isLoggedIn: false,
  authError: null,
  isFired: false,
  user: null
})

// eslint-disable-next-line import/prefer-default-export
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GITHUB_SAGA_START:
      return {
        ...state,
        authIsStarting: true
      }
    case AUTH_GITHUB_SAGA_SUCCESS:
      console.log('Auth successful')
      return {
        ...state,
        authIsStarting: false,
        authError: null,
        token: action.payload.token
      }
    case AUTH_GITHUB_SAGA_ERROR:
      console.log('authentification failed')
      return {
        ...state,
        authIsStarting: false,
        authError: 'Authentification failed'
      }
    case AUTH_FIRESTORE_SAGA_START:
      console.log(action)
      return {
        ...state,
        isFired: true
      }
    case AUTH_FIRESTORE_SAGA_SUCCESS:
      console.log(action.user)
      return {
        ...state,
        isFired: false,
        authError: null,
        user: action.payload.user
      }
    case AUTH_FIRESTORE_SAGA_ERROR:
      console.log(action, state)
      return {
        ...state,
        isFired: false,
        error: action.error
      }
    case AUTH_FACEBOOK_SAGA_START:
      return {
        ...state,
        isFired: true
      }
    case AUTH_FACEBOOK_SAGA_SUCCESS:
      return {
        ...state,
        isFired: false,
        isLoggedIn: true,
        user: action.user
      }
    case AUTH_FACEBOOK_SAGA_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isFired: false,
        error: action.error
      }

    default:
      return state
  }
}
