import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import { SET_CURRENT_USER } from './actions/types';
import jwt_decode from 'jwt-decode';
//import Carousel from './components/layout/carousel';

if (localStorage.jwtToken){
  //decode
  const decoded = jwt_decode(localStorage.jwtToken);

  //check for expired token
  const currentTime = Date.now() / 1000; //make it into seconds, vs. miliseconds
  if (decoded.exp < currentTime){
    //logout user
    store.dispatch(logoutUser());
    //redirect user login
    window.location.href = '/login';
  }
  // auth header
  setAuthToken(localStorage.jwtToken);
  //dispatch call -- set current user
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  });
}

class App extends Component {
  render() {

  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Footer />
    </div>
    </Router>
    </Provider>
  );
  }
}

export default App;
