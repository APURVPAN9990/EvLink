// src/pages/CafePage.js
import React from 'react';
import '../Css/Cafe.css';

const Cafe = () => {
  const cafes = [
    {
      name: 'In-House Cafes',
      description: 'Enjoy a fresh breakfast while your car charges, inside the station only.',
      location: 'At the selected Charging Station'
    },
    {
      name: 'Near-by Cafes',
      description: 'A place nearby with a variety of breakfast options, just few steps away.',
      location: '2 minutes from the Charging Station'
    }
  ];

  return (
    <div className="cafe-container">
      <h1>Cafes Option</h1><br></br>
      <div className="cafe-options">
        {cafes.map((cafe) => (
          <div key={cafe.name} className="cafe-card">
            <h2>{cafe.name}</h2>
            <p className="description">{cafe.description}</p>
            <p className="location">{cafe.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cafe;
