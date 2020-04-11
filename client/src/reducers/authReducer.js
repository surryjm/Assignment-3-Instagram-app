//this file writes anything related to authentication to the store
import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state, //spread the current state (initialState), a copy is made
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload //update the state's user information with what you got from payload
      }
    default:
      return state; //to the store
  }
}