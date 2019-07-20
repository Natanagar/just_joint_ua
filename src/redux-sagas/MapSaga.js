import React from 'react';
import { put, takeEvery, all } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import {
  Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup,
} from 'react-leaflet';
import worldGeoJSON from 'world-map-geojson';
// import { getPreciseLocation, getVenueCoords } from '../utils/mapUpdates';
import {
  mapStartLoading,
  mapIsLoaded,
  errorLoadingMap,
} from '../actions';

export default function* rootSaga() {
  yield all([
    MapSaga(),
    watchInitMap(),
  ]);
}
// const MapLeaflet = {};
const MapLeaflet = () => {
  const position = [51.505, -0.09];
  return (
    <LeafletMap
      center={[49.98081, 36.25272]}
      zoom={13}
      maxZoom={10}
      attributionControl
      zoomControl
      doubleClickZoom
      scrollWheelZoom
      dragging
      animate
      easeLinearity={0.35}
    >
      <GeoJSON
        data={worldGeoJSON}
        style={() => ({
          color: '#b8cdf5',
          weight: 0.2,
          fillColor: '#5d5f91',
          fillOpacity: 0.15,
        })}
      />
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50, 10]}>
        <Popup>
            Popup for any custom information.
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

function* MapSaga() {
  try {
    yield put({
      type: 'MAP_LOAD_SAGA_SUCCESS',
      payload: MapLeaflet,
    });
    return MapLeaflet;
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
