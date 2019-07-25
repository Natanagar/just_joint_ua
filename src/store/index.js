import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import JSOG from 'jsog';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/MapReducer';
import rootSaga from '../redux-sagas/MapSaga';

export const JSOGTransform = createTransform(

  (inboundState, key) => JSOG.encode({ ...inboundState }),
  (outboundState, key) => JSOG.decode({ ...outboundState }),
  // transform state on its way to being serialized and persisted.
  /* (inboundState, key) =>
    // convert mySet to an Array.
    ({ ...inboundState, mySet: [...inboundState.mySet] }),
  // transform state being rehydrated
  (outboundState, key) =>
    // convert mySet back to a Set.
    ({ ...outboundState, mySet: new Set(outboundState.mySet) }),
  // define which reducers this transform gets called for.
  { whitelist: [rootReducer] }, */
);

export const persistConfig = {
  key: 'root',
  storage,
  transforms: [JSOGTransform],
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
    ...createStore(persistedReducer, composeWithDevTools(applyMiddleware(routerMiddleware, thunk, logger, sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  };
};
const store = configureStore();
store.runSaga(rootSaga);

export const history = createReduxHistory(store);
// if you use @reach/router
export const reachHistory = reachify(history);
export default store;
