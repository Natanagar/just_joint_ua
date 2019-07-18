import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/MapReducer';
import { MapSaga } from '../redux-sagas/MapSaga';

export const persistConfig = {
  key: 'root',
  storage,
};
// persist reducer
export const persistedReducer = persistReducer(persistConfig, rootReducer);
// createMiddleware with redux-saga
const sagaMiddleware = createSagaMiddleware();

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
store.runSaga(MapSaga);

// const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(routerMiddleware, thunk, logger)));

export const history = createReduxHistory(store);
// if you use @reach/router
export const reachHistory = reachify(history);
export default store;
