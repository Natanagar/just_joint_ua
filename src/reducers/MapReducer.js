import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firestoreReducer } from 'redux-firestore';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import localStorage from 'redux-persist/lib/storage';
import { persistedReducer } from '../store/index';
import {
  MAP_DRAGGBLE_MARKER,
  MAP_LOAD_SAGA_START,
  MAP_LOAD_SAGA_SUCCESS,
  MAP_LOAD_SAGA_ERROR,
  MAP_PUT_CUSTOM_COORDINATES,
  MAP_CREATE_MARKER_SAGA,
  MAP_REMOVE_MARKER_SAGA,
} from '../actions/index';
import { Position } from '../components/utils/index';

const initialState = Object.freeze({
  marker: [],
  jobs: [],
  map: {},
  isLoading: false,
  error: null,
  coordinates: [Position.lat, Position.lng],
  userInput: '',
  geocodeResults: [],
  isochrones: {
    results: [],
  },
  isFetching: false,
  isFetchingIsochrones: false,
  settings: {
    isochronesCenter: {},
    range: {
      max: 500,
      value: 60,
    },
    interval: {
      max: 60,
      value: 10,
    },
    mode: 'car',
    rangetype: 'distance',
    traffic: 'disabled',
  },
});

const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_DRAGGBLE_MARKER:
      return {
        ...state,
        marker: action.marker,
      };
    case MAP_LOAD_SAGA_START:
      return {
        ...state,
        isLoading: true,
      };
    case MAP_LOAD_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        map: action.payload,
      };
    case MAP_LOAD_SAGA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case MAP_CREATE_MARKER_SAGA:
      return {
        ...state,
        marker: action.payload,
      };
    case MAP_REMOVE_MARKER_SAGA:
      console.log(action);
      return {
        ...state,
        marker: action.payload,
      };

    case MAP_PUT_CUSTOM_COORDINATES:
      return {
        ...state,
        coordinates: action.coordinates,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  MapReducer,
  // form reducer
  form: formReducer,
  firestore: firestoreReducer,
});
export default rootReducer;
