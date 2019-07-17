import React from 'react';
import {
  Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup,
} from 'react-leaflet';
import worldGeoJSON from 'world-map-geojson';

export const MapLeaflet = () => {
  const position = [51.505, -0.09];
  return (
    <LeafletMap
      center={[50, 10]}
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
          color: '#4a83ec',
          weight: 0.5,
          fillColor: '#1a1d62',
          fillOpacity: 1,
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
