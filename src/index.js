import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';

import { Provider } from 'react-redux';
import Firebase, { FirebaseContext } from './components/Firebase/index';
import store from './store/index';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log(store.getState());
window.store = store;
const persistor = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>

  </Provider>,


  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
