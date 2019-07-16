import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { MAP_DRAGGBLE_MARKER } from '../actions/index';

const initialState = Object.freeze({
  marker: null,
});

const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_DRAGGBLE_MARKER:
      return {
        ...state,
        marker: action.marker,
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
