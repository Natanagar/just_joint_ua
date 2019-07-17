import store from '../store/index';

export const MAP_DRAGGBLE_MARKER = 'MAP_DRAGGBLE_MARKER';
export const dragMarker = marker => ({
  type: 'MAP_DRAGGBLE_MARKER',
  marker,
});
