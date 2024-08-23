import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import PaymentPage from './PaymentPage';
import Pricing from './Pricing';
import Cafe from './Cafe';
import { useNavigate } from 'react-router-dom';
/* global google */

const Nodefile = () => {
  const location = useLocation();
  const { clickedLocation, currentLocation } = location.state || {};
  const [paymentDone, setPaymentDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (clickedLocation && currentLocation) {
      // Initialize the map centered between the current location and clicked location
      const map = new google.maps.Map(document.getElementById('nodefile-map'), {
        center: {
          lat: (currentLocation.lat + clickedLocation.lat) / 2,
          lng: (currentLocation.lng + clickedLocation.lng) / 2,
        },
        zoom: 12, // Zoom out to show both points
      });

      // Marker for current location
      new google.maps.Marker({
        position: currentLocation,
        map: map,
        title: 'Your Location',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          scaledSize: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(16, 32),
        },
      });

      // Marker for destination (clicked location)
      new google.maps.Marker({
        position: clickedLocation,
        map: map,
        title: 'Destination',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
          scaledSize: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(16, 32),
        },
      });

      // Optionally, adjust the map bounds to fit both markers
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(currentLocation);
      bounds.extend(clickedLocation);
      map.fitBounds(bounds);
    }
  }, [clickedLocation, currentLocation]);

  const handleGetDirections = () => {
    if (clickedLocation) {
      const destination = `${clickedLocation.lat},${clickedLocation.lng}`;
      const directionUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLocation.lat},${currentLocation.lng}&destination=${destination}`;
      window.open(directionUrl, '_blank');
    }
  };

  return (
    <div>
      <header className="homepage-header">
        <Navbar loginType={localStorage.getItem('loginType')} />
        <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
      </header>
      <div style={{ position: 'relative', height: '300px', width: '90%', padding: '1rem' }}>
        <div id="nodefile-map" style={{ height: '300px', width: '50%', position: 'relative', border: '1px solid green', borderRadius: '10px' }}></div>
        {paymentDone && (
          <button
            onClick={handleGetDirections}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              zIndex: '1000',  // Ensures the button is above the map
            }}
          >
            Get Directions
          </button>
        )}
      </div>
      <section className="features" style={{ paddingLeft: '5rem', marginTop: '3rem' }}>
        <div className="feature">
          <Pricing />
        </div>
        <div className="feature">
          <Cafe />
        </div>
        <div className="feature">
          <PaymentPage onPaymentSuccess={setPaymentDone} />
          {/* <button onClick={() => navigate('/payment')}>Do Payment</button> */}
        </div>
      </section>
      <footer className='footer'>
        <p>&copy; 2024 EV Charging. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Nodefile;
