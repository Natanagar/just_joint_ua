import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// eslint-disable-next-line import/no-cycle
import { authReducer } from './authReducer';
import { dataReducer } from './firestoreReducer';
// eslint-disable-next-line import/no-cycle
import { MapReducer } from './MapReducer';

const rootReducer = combineReducers({
  MapReducer,
  auth: authReducer,
  form: formReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  data: dataReducer,
});
export default rootReducer;
