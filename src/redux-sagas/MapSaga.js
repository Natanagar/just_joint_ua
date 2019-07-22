import React from 'react';
import L from 'leaflet';
import {
  put, takeEvery, all, call, delay,
} from 'redux-saga/effects';
import { Position, Apikey } from '../components/utils/index';
import HereTileLayers from '../components/Map/hereTileLayers';
import {
  mapStartLoading,
  mapIsLoaded,
  errorLoadingMap,
  putCustomCoordinates,
} from '../actions';


// using the reduced.day map styles, have a look at the imported hereTileLayers for more
const hereReducedDay = HereTileLayers.here({
  appId: Apikey.id,
  appCode: Apikey.code,
  scheme: 'reduced.day',
});

// for this app we create two leaflet layer groups to control, one for the isochrone centers and one for the isochrone contours
const markersLayer = L.featureGroup();
const isochronesLayer = L.featureGroup();

// we define our bounds of the map
const southWest = L.latLng(-90, -180);
const northEast = L.latLng(90, 180);
const bounds = L.latLngBounds(southWest, northEast);

// a leaflet map consumes parameters
export const mapParams = {
  center: [Position.lat, Position.lng], // нужно взять из сторы
  zoomControl: false,
  maxBounds: bounds,
  zoom: 9,
  layers: [markersLayer, isochronesLayer],
};
// geolocation
/* function onLocationFound(e) {
  const radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
    .bindPopup(`You are within ${  radius  } meters from this point`).openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound); */

function* MapSaga() {
  yield put({ type: 'MAP_PUT_CUSTOM_COORDINATES' }); // geolocation from leaflet
  console.log('Start');
  const map = new L.map('map', mapParams);
  map.invalidateSize();
  // L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', { foo: 'bar' }).addTo(map);

  // we create a leaflet pane which will hold all isochrone polygons with a given opacity
  const isochronesPane = map.createPane('isochronesPane');
  isochronesPane.style.opacity = 0.6;

  // our basemap and add it to the map
  const baseMaps = {
    'HERE reduced.day': hereReducedDay,
  };
  L.control.layers(baseMaps).addTo(map);

  // we do want a zoom control
  L.control
    .zoom({
      position: 'topright',
    })
    .addTo(map);

  // and for the sake of advertising your company, you may add a logo to the map
  const brand = L.control({
    position: 'bottomright',
  });
  yield delay(500);
  try {
    yield put({
      type: 'MAP_LOAD_SAGA_SUCCESS',
      payload: map,
    });
    return map;
  } catch (error) {
    yield put({
      type: 'MAP_LOAD_SAGA_ERROR',
      payload: error,
    });
  }
}


/*
  let userLocation = {};
  const userCoords = yield getPreciseLocation().then(value => (userLocation = { lat: value[0], lng: value[1] }));
  yield put(setUserCoords(userCoords));
  yield delay(3000);
  const venues = yield getVenueCoords(userCoords);
  yield put(setVenueCoords(venues));
  yield put(initMapComplete());
} */

function* watchInitMap() {
  yield takeEvery('INIT_MAP', MapSaga);
}
export default function* rootSaga() {
  yield all([
    MapSaga(),
    watchInitMap(),
  ]);
}
