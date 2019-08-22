import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/MapReducer';
import rootSaga from '../redux-sagas/MapSaga';
import { getCircularReplacer } from '../components/utils/index';

const myTransform = createTransform(

  // transform state on its way to being serialized and persisted.
  (inboundState, key) => JSON.stringify(inboundState, getCircularReplacer()),
  (outboundState, key) => JSON.parce(outboundState, getCircularReplacer()),
);

const firestoreConfig = {
  apiKey: 'AIzaSyAjZYM8VG6ID_3C0OzmfLw_pCMkgAChXuQ',
  authDomain: 'juniorsjobs-48edf.firebaseapp.com',
  databaseURL: 'https://juniorsjobs-48edf.firebaseio.com',
  projectId: 'juniorsjobs-48edf',
  storageBucket: 'juniorsjobs-48edf.appspot.com',
  messagingSenderId: '1093321087128',
  appId: '1:1093321087128:web:e9a36f484171818f',

};
console.log(firestoreConfig);


// react-redux-firebase config
const rrfConfig = {
  userProfile: '',
  jobsProfile: 'jobs_ukraine',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firestoreConfig);
// Initialize Cloud Firestore through Firebase
firebase.firestore();


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rrfConfig), // <- needed if using firestore
)(createStore);

export const persistConfig = {
  key: 'root',
  storage,
  transforms: [myTransform],
};
// persist reducer
export const persistedReducer = persistReducer(persistConfig, rootReducer);

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  // others options if needed
});

const configureStore = () => {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStoreWithFirebase(persistedReducer, composeWithDevTools(applyMiddleware(routerMiddleware, thunk, logger, sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  };
};
const store = configureStore();
store.runSaga(rootSaga);

export const history = createReduxHistory(store);
// if you use @reach/router
export const reachHistory = reachify(history);
export default store;
