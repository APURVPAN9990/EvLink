// src/components/BookingInfo.js
import React from 'react';
import '../Css/Adv.css';

const Step = () => {
  return (
    <div className="cafe-container">

      <h2>Steps to Book</h2><br></br>
      <div className="options-list">
        <p>🔎 <b className='play'>Find the Nearest Charging Station:</b> Use our station locator to find the nearest charging point.</p>
        <p>📅   Choose a Time Slot: Select a time that suits your travel schedule.</p>
        <p>🚗 Enter Vehicle Details: Provide your vehicle information to help us prepare.</p>
        <p>💳 Make a Payment: Secure your booking with a quick and easy payment.</p>
        <p>✅ Confirm Your Slot: Receive a confirmation of your booked slot via email or SMS.</p>
        <p>🔋 Arrive & Charge: Head to the station at your booked time and charge your vehicle.</p>
      </div>
    </div>
  );
};

export default Step;
