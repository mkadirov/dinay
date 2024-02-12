import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const getCurrentLocation = () => {
    // Check if Geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          // Set the current location as the start location
          setStartLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported');
    }
  };

  const handleNavigation = () => {
    // Construct the Google Maps URL with the start and end locations
    const mapsUrl = `https://www.google.com/maps/dir/${startLocation}/${endLocation}`;

    // Open the URL in a new tab or window
    window.open(mapsUrl, '_blank');
  };

  return (
    <div>
      <label>
        Start Location:
        <input
          type="text"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
        <button onClick={getCurrentLocation}>Use Current Location</button>
      </label>
      <br />
      <label>
        End Location:
        <input
          type="text"
          value={endLocation}
          onChange={(e) => setEndLocation(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleNavigation}>Navigate</button>
    </div>
  );
}

export default App;
