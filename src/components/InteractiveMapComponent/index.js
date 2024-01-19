import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Due to an issue with Leaflet's default marker icons, we need to set it manually
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function InteractiveMapComponent() {
    // The center of the map (latitude, longitude)
    const centerPosition = [51.505, -0.09]; // Replace with the center position of Ice Nation

    return (
        <div id="interactive-map" className="interactive-map my-8">
            <h3 className="text-3xl font-bold text-center mb-6" style={{ color: '#3b82f6' }}>Explore the Ice Nation</h3>
        <p>Insert map here...</p>
        </div>
    );
}

export default InteractiveMapComponent;

