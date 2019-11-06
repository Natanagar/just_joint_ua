import {
  take, fork, cancel, call, put, cancelled,
} from 'redux-saga/effects';
import firebase from 'firebase';
import '@firebase/firestore';

import { loginStart, loginSuccess, loginFailure } from '../actions/authAction';


function* loginSaga(action) {
  try {
    const auth = firebase.auth();
    const data = yield call([auth, auth.createUserWithEmailAndPassword],
      action.user.email, action.user.password);
    yield put(loginSuccess({ user: action.user }));
  } catch (error) {
    yield put(loginFailure({ error: error.message }));
  }
}
export default loginSaga;
