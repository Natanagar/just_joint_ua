import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import { mapParams } from '../../redux-sagas/MapSaga';

const Map = () => {
  useEffect(() => {
    const map = new L.map('map', mapParams);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);
  return (
    <div id="map" />
  );
};
const mapStateToProps = state => ({});


export default connect(mapStateToProps, null)(Map);
