import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  MAP_DRAGGBLE_MARKER,
  MAP_LOAD_SAGA_START,
  MAP_LOAD_SAGA_SUCCESS,
  MAP_LOAD_SAGA_ERROR,
} from '../actions/index';

const initialState = Object.freeze({
  marker: null,
  map: null,
  isLoading: false,
  error: null,
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
        map: action.map,
      };
    case MAP_LOAD_SAGA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  MapReducer,
  // form reducer
  // form: formReducer,
});
export default rootReducer;
