import React from 'react';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';

export const MapLeaflet = () => {
  const position = [51.505, -0.09];
  return (
    <LeafletMap
      center={[50, 10]}
      zoom={6}
      maxZoom={10}
      attributionControl
      zoomControl
      doubleClickZoom
      scrollWheelZoom
      dragging
      animate
      easeLinearity={0.35}
    >
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
