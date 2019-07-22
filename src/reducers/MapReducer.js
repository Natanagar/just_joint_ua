import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  MAP_DRAGGBLE_MARKER,
  MAP_LOAD_SAGA_START,
  MAP_LOAD_SAGA_SUCCESS,
  MAP_LOAD_SAGA_ERROR,
  MAP_PUT_CUSTOM_COORDINATES,
} from '../actions/index';
import { Position } from '../components/utils/index';


const initialState = Object.freeze({
  marker: null,
  map: {},
  isLoading: false,
  error: null,
  coordinates: [Position.lat, Position.lng],
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
  // form: formReducer,
});
export default rootReducer;
