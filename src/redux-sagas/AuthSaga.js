import { take, fork, cancel, call, put, cancelled, takeEvery, all, delay } from 'redux-saga/effects'
import firebase from 'firebase'
import '@firebase/firestore'
import store from '../store/index'

import {
  loginStart,
  loginSuccess,
  loginFailure,
  createStart,
  createSuccess,
  createFailure,
  facebookSuccess,
  facebookFailure
} from '../actions/authAction'

export function * loginSaga (action) {
  console.log(action)
  try {
    const auth = firebase.auth()
    const data = yield call(
      [auth, auth.signInWithEmailAndPassword],
      store.getState().data.user.email,
      store.getState().data.user.password
    )
    yield put(loginSuccess({ user: action.user }))
  } catch (error) {
    yield put(loginFailure({ error: error.message }))
  }
}

export function * createUser (action) {
  console.log(action)
  yield delay(3000)
  try {
    const auth = firebase.auth()
    console.log(store.getState().data.createUser.email, store.getState().data.createUser.password)
    const data = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      store.getState().data.createUser.email,
      store.getState().data.createUser.password
    )

    yield put(createSuccess({ user: action.user }))
  } catch (error) {
    yield put(createFailure({ error: error.message }))
  }
}
export function * facebookLogin (action) {
  console.log(action)
  yield delay(1000)
  try {
    yield put(facebookSuccess({ user: action.user }))
  } catch (error) {
    yield put(facebookFailure({ error: error.message }))
  }
}
