import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import { Footer } from './components/layout/Footer/Footer';
import Navigation from './components/layout/Navigation/Navigation';
import { Employer } from './components/layout/Employer/Employer';
import { Employee } from './components/layout/Employee/Employee';
import SignIn from './components/auth/SignIn/Login/SignIn';
import LoginPage from './components/auth/SignIn/Registration/Login';
import Registration from './components/auth/SignUp/Registration';
import { mapStartLoading } from './actions/index';
import { mapParams } from './redux-sagas/MapSaga';
import './App.css';

const App = ({
 mapStart, dispatch, marker, map 
}) => {
  useEffect(() => dispatch(mapStart), [dispatch, mapStart]);
  return (
    <div className="App">
      <Navigation />
      <div id="map" />

      {/* <div id="map" /> */}
      <Router>
        <Employee path="jobs" />
        <Employer path="company" />
        <Employee path="hiring" />
        <LoginPage path="login" />
        <SignIn path="signin" />
        <Registration path="registration" />
      </Router>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ MapReducer }) => {
  const { marker, map } = MapReducer;
  return {
    marker,
    map,
  };
};

const mapDispatchToProps = dispatch => ({
  mapStart: () => dispatch(mapStartLoading()),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
