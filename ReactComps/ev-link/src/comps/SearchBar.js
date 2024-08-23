import React, { useState } from 'react';

const SearchBar = ({ setChargingStations }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: query }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        // Assuming fetching the charging stations from backend
        const stations = fetchChargingStations(location.lat(), location.lng());
        setChargingStations(stations);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  // Mock function to simulate fetching charging stations from a backend
  const fetchChargingStations = (lat, lng) => {
    return [
      { lat: lat + 0.01, lng: lng + 0.01, name: 'SarveshStation' },
      { lat: lat + 0.02, lng: lng + 0.02, name: 'ApurvStation' },
      { lat: lat - 0.01, lng: lng - 0.01, name: 'MayankStation' },
      { lat: lat - 0.03, lng: lng - 0.01, name: 'SubashStation' },
    ];
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for an area" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
