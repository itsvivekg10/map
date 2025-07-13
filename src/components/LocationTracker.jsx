// src/components/LocationTracker.jsx
import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocation";

function LocationTracker() {
  const position = useGeolocation();

  if (!position) return null;

  return (
    <Marker position={[position.latitude, position.longitude]}>
      <Popup>
        📍 You are here!<br /> Lat: {position.latitude.toFixed(4)}<br /> Lng: {position.longitude.toFixed(4)}
      </Popup>
    </Marker>
  );
}

export default React.memo(LocationTracker);
