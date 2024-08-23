import '../Css/Map.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import SearchBar from './SearchBar';
//import DirectionsButton from './DirectionsButton';
//import PaymentPage from './PaymentPage';


const Map = () => {
  const [chargingStations, setChargingStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  // Retrieve the user's current location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting current location', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };

  return (
      
          <div>
            <SearchBar setChargingStations={setChargingStations} />
            <MapComponent
              chargingStations={chargingStations}
              onStationSelect={handleStationSelect}
              currentLocation={currentLocation}
              selectedStation={selectedStation}
            />
          </div>
        
    
      
  );
};

export default Map;
