// src/components/BookingInfo.js
import React from 'react';
import '../Css/Adv.css';

const Adv = () => {
  return (
    <div className="cafe-container">
      <h2>Why Book a Charging Slot?</h2>
      <ul className="advantages-list">
        <li>✅ Guaranteed Charging Availability: Book in advance to ensure a spot.</li>
        <li>✅ Reduced Wait Time: Skip the line and get your vehicle charged without delay.</li>
        <li>✅ Convenient & Easy: Plan your trip knowing your charging needs are taken care of.</li>
        <li>✅ Flexible Timing: Choose a time slot that fits your schedule.</li>
        <li>✅ Discounted Rates: Early booking may offer special discounts.</li>
      </ul>
    </div>
  );
};

export default Adv;
