import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxHistoryContext, reachify } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/MapReducer';

export const persistConfig = {
  key: 'root',
  storage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  // others options if needed
});

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(routerMiddleware, thunk, logger)));

// const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(routerMiddleware, thunk, logger)));

export const history = createReduxHistory(store);
// if you use @reach/router
export const reachHistory = reachify(history);
export default store;
