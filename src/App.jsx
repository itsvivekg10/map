// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapView from "./components/MapView";
import RoutePlanner from "./components/RoutePlanner";
import { useState, useCallback } from "react";
import "leaflet/dist/leaflet.css";
import "./App.css"; // optional styling

function App() {
  const [route, setRoute] = useState(null);

  const handlePlanRoute = useCallback((locations) => {
    setRoute(locations);
  }, []);

  return (
    <Router>
      <div className="app">
        <h1 className="title">🗺️ MindTrack Map Tracker</h1>
        <div className="main-container">
          <RoutePlanner onPlanRoute={handlePlanRoute} />
          <MapView route={route} />
        </div>
      </div>
    </Router>
  );
}

export default App;
