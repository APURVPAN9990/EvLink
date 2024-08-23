import React from 'react';

const DirectionsButton = ({ station }) => {
  const findDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Construct the Google Maps Directions URL
          //const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${station.lat},${station.lng}&travelmode=driving`;
          
          const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${station.lat},${station.lng}&travelmode=driving`;
          

          // Open the directions in a new tab
          window.open(gmapsUrl, '_blank');
          
        },
        (error) => {
          console.error('Error getting location', error);
          alert('Unable to retrieve your location. Please check your location settings.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return <button onClick={findDirections}>Find Directions</button>;
};

export default DirectionsButton;
