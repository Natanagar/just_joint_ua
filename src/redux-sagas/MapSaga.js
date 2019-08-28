import React from 'react';
import L from 'leaflet';
import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import { Position, Apikey } from '../components/utils/index';
import HereTileLayers from '../components/layout/Map/hereTileLayers';
import Logo from '../components/layout/Map/images/javascript.svg';
import {
	mapStartLoading,
	mapIsLoaded,
	errorLoadingMap,
	putCustomCoordinates,
	mapCreateMarkerSaga,
	mapRemoveMarkerSaga
} from '../actions';

// using the reduced.day map styles, have a look at the imported hereTileLayers for more
const hereReducedDay = HereTileLayers.here({
	appId: Apikey.id,
	appCode: Apikey.code,
	scheme: 'reduced.day'
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
	center: [ Position.lat, Position.lng ], // нужно взять из сторы
	zoomControl: false,
	maxBounds: bounds,
	zoom: 9,
	layers: [ markersLayer, isochronesLayer ]
};

function* MapSaga() {
	yield put({ type: 'MAP_PUT_CUSTOM_COORDINATES' }); // geolocation from leaflet need to add
	yield delay(3000);
	delete L.Icon.Default.prototype._getIconUrl;

	L.Icon.Default.mergeOptions({
		iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		iconUrl: require('leaflet/dist/images/marker-icon.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png')
	});
	const map = new L.map('map', mapParams);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	// geolocation
	yield delay(3000);
	const onLocationFound = (e) => {
		const radius = e.accuracy;
		// custom icons
		const myIcon = L.icon({
			iconUrl: '/static/media/javascript.d8c3b7fd.svg',
			iconSize: [ 38, 95 ],
			iconAnchor: [ 22, 94 ],
			popupAnchor: [ -3, -76 ],
			shadowUrl: Logo,
			shadowSize: [ 68, 95 ],
			shadowAnchor: [ 22, 94 ]
		});

		L.marker(e.latlng, { icon: myIcon })
			.addTo(map)
			.bindPopup(`You are within ${radius} meters from this point`)
			.openPopup();

		// L.circle(e.latlng, radius).addTo(map);
	};
	map.on('locationfound', onLocationFound);

	L.control.scale().addTo(map);

	// we create a leaflet pane which will hold all isochrone polygons with a given opacity
	const isochronesPane = map.createPane('isochronesPane');
	isochronesPane.style.opacity = 0.6;

	// our basemap and add it to the map
	const baseMaps = {
		'HERE reduced.day': hereReducedDay
	};
	L.control.layers(baseMaps).addTo(map);

	// we do want a zoom control
	L.control
		.zoom({
			position: 'topright'
		})
		.addTo(map);
	const marker = new L.marker([ Position.lat, Position.lng ])
		.addTo(map)
		.bindPopup('Цей маркер <br> може бути кастомiзований.')
		.openPopup();
	// and for the sake of advertising your company, you may add a logo to the map
	// yield delay(3000);
	const getCircularReplacer = () => {
		const seen = new WeakSet();
		return (key, value) => {
			if (typeof value === 'object' && value !== null) {
				if (seen.has(value)) {
					return;
				}
				seen.add(value);
			}
			return value;
		};
	};
	try {
		yield put({
			type: 'MAP_LOAD_SAGA_SUCCESS',
			payload: map
		});

		yield put(mapCreateMarkerSaga(marker));
		return map;
	} catch (error) {
		yield put({
			type: 'MAP_LOAD_SAGA_ERROR',
			payload: error
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
	yield all([ MapSaga(), watchInitMap() ]);
}
