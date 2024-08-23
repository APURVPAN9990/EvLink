import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* global google */

const MapComponent = ({ chargingStations, onStationSelect, currentLocation }) => {
  const navigate = useNavigate();
  const [clickedLocation, setClickedLocation] = useState(null);
  const isLoggedIn = localStorage.getItem('loginType') === 'user';

  useEffect(() => {
    if (currentLocation) {
      // Initialize the map centered at the user's current location
      const map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 14,
      });

      // Define a custom icon for the current location marker
      const currentLocationIcon = {
        url: 'https://c7.alamy.com/comp/2GJ6JKY/car-symbols-frontal-car-icons-2GJ6JKY.jpg',
        scaledSize: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32),
      };

      // Add a marker for the current location
      new google.maps.Marker({
        position: currentLocation,
        map: map,
        title: 'Your Location',
        icon: currentLocationIcon,
      });

      // Create a LatLngBounds object
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(currentLocation);

      // Add markers for each charging station and extend the bounds
      chargingStations.forEach(station => {
        const marker = new google.maps.Marker({
          position: { lat: station.lat, lng: station.lng },
          map: map,
          title: station.name,
        });

        bounds.extend(marker.position);

        // Add click listener to select a station
        marker.addListener('click', () => {
          onStationSelect(station);
          setClickedLocation({
            lat: parseFloat(marker.getPosition().lat().toFixed(4)),
            lng: parseFloat(marker.getPosition().lng().toFixed(4)),
          });
        });
      });

      map.fitBounds(bounds);
    }
  }, [currentLocation, chargingStations, onStationSelect]);

  const handlePaymentClick = () => {
    if (isLoggedIn && clickedLocation) {
      navigate('/nodefile', { state: { clickedLocation, currentLocation } });
    } else {
      navigate('/login');
    }
  };

  return (
    <div style={{ position: 'relative', height: '500px', width: '100%' }}>
      <div id="map" style={{ height: '100%', width: '100%' }}></div>
      {clickedLocation && (
        <button
          onClick={handlePaymentClick}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: '1000',
          }}
        >
          {isLoggedIn ? 'PROCEED' : 'Login to Proceed'}
        </button>
      )}
    </div>
  );
};

export default MapComponent;
