import store from '../store/index';


export const MAP_LOAD_SAGA_START = 'MAP_LOAD_SAGA_START';
export const MAP_LOAD_SAGA_SUCCESS = 'MAP_LOAD_SAGA_SUCCESS';
export const MAP_LOAD_SAGA_ERROR = 'MAP_LOAD_SAGA_ERROR';
// try to load map
const mapStartLoading = isLoading => ({
  type: 'MAP_LOAD_SAGA_START',
  isLoading,
});
const mapIsLoaded = ({ isLoading, map }) => ({
  type: 'MAP_LOAD_SAGA_SUCCESS',
  isLoading: false,
  map,
});
const errorLoadingMap = ({ isLoading, error }) => ({
  type: 'MAP_LOAD_SAGA_ERROR',
  isLoading: false,
  error,
});


export const MAP_DRAGGBLE_MARKER = 'MAP_DRAGGBLE_MARKER';
export const dragMarker = marker => ({
  type: 'MAP_DRAGGBLE_MARKER',
  marker,
});
