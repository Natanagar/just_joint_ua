import store from '../store/index';


export const MAP_LOAD_SAGA_START = 'MAP_LOAD_SAGA_START';
export const MAP_LOAD_SAGA_SUCCESS = 'MAP_LOAD_SAGA_SUCCESS';
export const MAP_LOAD_SAGA_ERROR = 'MAP_LOAD_SAGA_ERROR';
export const MAP_PUT_CUSTOM_COORDINATES = 'MAP_PUT_CUSTOM_COORDINATES';
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

export const MAP_DRAGGBLE_MARKER = 'MAP_DRAGGBLE_MARKER';
export const dragMarker = marker => ({
  type: 'MAP_DRAGGBLE_MARKER',
  payload: marker,
});
