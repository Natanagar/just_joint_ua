import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { MapReducer } from './MapReducer';

const rootReducer = combineReducers({
  MapReducer,
  auth: authReducer,
  form: formReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
export default rootReducer;
