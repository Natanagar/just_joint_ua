import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Employer } from './components/Employer/Employer';
import { Employee } from './components/Employee/Employee';
import { mapStartLoading } from './actions/index';
import { mapParams } from './redux-sagas/MapSaga';
import './App.css';

const App = ({ mapStart, dispatch }) => {
  useEffect(() => dispatch(mapStart), []);
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Employer path="company" />
        <Employee path="hiring" />
      </Router>
      <Footer />
    </div>
  );
};

const mapStateToProps = () => ({

});
const mapDispatchToProps = dispatch => ({
  mapStart: () => dispatch(mapStartLoading()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
