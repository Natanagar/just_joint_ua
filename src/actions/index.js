import store from '../store/index';


export const MAP_LOAD_SAGA_START = 'MAP_LOAD_SAGA_START';
export const MAP_LOAD_SAGA_SUCCESS = 'MAP_LOAD_SAGA_SUCCESS';
export const MAP_LOAD_SAGA_ERROR = 'MAP_LOAD_SAGA_ERROR';
export const MAP_PUT_CUSTOM_COORDINATES = 'MAP_PUT_CUSTOM_COORDINATES';
// markers
export const MAP_CREATE_MARKER_SAGA = 'MAP_CREATE_MARKER_SAGA';
export const MAP_REMOVE_MARKER_SAGA = 'MAP_REMOVE_MARKER_SAGA';
// try to load map
export const mapStartLoading = isLoading => ({
  type: 'MAP_LOAD_SAGA_START',
  isLoading,
});
export const mapIsLoaded = map => ({
  type: 'MAP_LOAD_SAGA_SUCCESS',
  map,
});
export const errorLoadingMap = error => ({
  type: 'MAP_LOAD_SAGA_ERROR',
  payload: error,
});
export const putCustomCoordinates = coordinates => ({
  type: 'MAP_PUT_CUSTOM_COORDINATES',
  payload: coordinates,
});
export const mapCreateMarkerSaga = marker => ({
  type: 'MAP_CREATE_MARKER_SAGA',
  payload: marker,
});
export const mapRemoveMarkerSaga = marker => ({
  type: 'MAP_REMOVE_MARKER_SAGA',
  payload: marker,
});

export const MAP_DRAGGBLE_MARKER = 'MAP_DRAGGBLE_MARKER';
export const dragMarker = marker => ({
  type: 'MAP_DRAGGBLE_MARKER',
  payload: marker,
});
