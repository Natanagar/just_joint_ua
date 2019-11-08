// eslint-disable-next-line import/no-cycle
import {
  USER_DATA_PUT_STORE,
  USER_DATA_CREATE_STORE,
} from '../actions/firestoreAction';


const initialState = Object.freeze({
  user: null,
});

// eslint-disable-next-line import/prefer-default-export
export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_PUT_STORE:
      console.log(action.values);
      return {
        ...state,
        user: action.values,
      };
    case USER_DATA_CREATE_STORE:
      console.log(action.values);
      return {
        ...state,
        createUser: action.values,
      };
    default:
      return state;
  }
};
