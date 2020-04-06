//this file writes anything related to authentication to the store
import {SET_CURRENT_USER} from '../actions/types';
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state; //to the store
  }
}