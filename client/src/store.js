import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const store = createStore(
  //reducers
  rootReducer,
  //initial state
  {},
  compose(
  //enhancement
  //spread the current data in the store and thunk it (middleware)
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;