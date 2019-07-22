import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import L from 'leaflet';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Employer } from './components/Employer/Employer';
import { Employee } from './components/Employee/Employee';
import { MapLeaflet } from './components/Map/Map';
import { mapStartLoading } from './actions/index';
import { mapParams } from './redux-sagas/MapSaga';
import './App.css';

console.log(L, mapParams);
const App = ({ mapStart, dispatch }) => {
  useEffect(() => dispatch(mapStart), []);
  /* const Map = () => (
    <div className="wrapper">
      <div id="map" />
      <MapLeaflet />
    </div>
  ); */
  return (
    <div className="App">
      <Navigation />
      <Router>
        {/* <Map path="/" /> */}
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
