import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useGeolocation } from '../hooks/useGeolocation';
import React, { useMemo } from 'react';

const MapView = React.memo(() => {
  const position = useGeolocation();

  const marker = useMemo(() => {
    return position ? (
      <Marker position={[position.latitude, position.longitude]}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null;
  }, [position]);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={13} style={{ height: '80vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker}
    </MapContainer>
  );
});

export default MapView;
