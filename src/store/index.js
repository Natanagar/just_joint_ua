import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
console.log(firestoreConfig);

// react-redux-firebase config
export const rrfConfig = {
  userProfile: '',
  jobsProfile: 'jobs_ukraine',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // dispatch: store.dispatch,
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
    ...createStoreWithFirebase(
      persistedReducer,
      composeWithDevTools(
        reactReduxFirebase(firebase, persistConfig),
        applyMiddleware(routerMiddleware, thunk, logger, sagaMiddleware),
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
};
const store = configureStore();
store.runSaga(rootSaga);

export const history = createReduxHistory(store);
// if you use @reach/router
export const reachHistory = reachify(history);
export default store;
