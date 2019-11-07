import {
  take, fork, cancel, call, put, cancelled, takeEvery, all,
} from 'redux-saga/effects';
import firebase from 'firebase';
import '@firebase/firestore';
import store from '../store/index';

import {
  loginStart, loginSuccess, loginFailure, createStart, createSuccess, createFailure,
} from '../actions/authAction';


export function* loginSaga(action) {
  console.log(action);
  try {
    const auth = firebase.auth();
    const data = yield call([auth, auth.signInWithEmailAndPassword],
      store.getState().data.user.email, store.getState().data.user.password);
    yield put(loginSuccess({ user: action.user }));
  } catch (error) {
    yield put(loginFailure({ error: error.message }));
  }
}

export function* createUser(action) {
  yield put({ type: 'AUTH_FIRESTORE_SAGA_CREATE_START' });
  console.log(action);
  try {
    const auth = firebase.auth();
    const data = yield call([auth, auth.createUserWithEmailAndPassword],
      store.getState().data.createUser.email,
      store.getState().data.createUser.password);
    yield put(createSuccess({ user: action.user }));
  } catch (error) {
    yield put(createFailure({ error: error.message }));
  }
}
