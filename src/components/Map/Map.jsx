import React from 'react';
import {
  Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup,
} from 'react-leaflet';
import worldGeoJSON from 'world-map-geojson';

export const MapLeaflet = () => {
  const position = [51.505, -0.09];
  return (
    <LeafletMap
      center={[49.98081, 36.25272]}
      zoom={13}
      maxZoom={20}
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
