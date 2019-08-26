import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Employer } from './components/Employer/Employer';
import { Employee } from './components/Employee/Employee';
import { SignIn } from './components/auth/SighIn/SighIn';
import LoginPage from './components/auth/SighIn/Login';
import { mapStartLoading } from './actions/index';
import { mapParams } from './redux-sagas/MapSaga';
import './App.css';

const App = ({
  mapStart, dispatch, marker, map,
}) => {
  useEffect(() => dispatch(mapStart), [dispatch, mapStart]);
  return (
    <div className="App">
      <Navigation />
      <div id="map" />

      <Router>
        <Employee path="jobs" />
        <Employer path="company" />
        <Employee path="hiring" />
        <LoginPage path="google" />
        <SignIn path="sighup" />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
