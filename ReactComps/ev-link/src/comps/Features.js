// src/components/BookingInfo.js
import React from 'react';
import Adv from './Adv';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Step from './Step';
import Cafe from './Cafe';
import '../Css/Features.css';
import '../Css/Home.css';

const Features = () => {
  return (
    <div className='div_out'>
        <header className="homepage-header">
            <Navbar loginType={localStorage.getItem('loginType')} />
                <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
      </header>
        <div className='div_int'>
        <Adv></Adv>
        <Pricing></Pricing>
        <Step></Step>
        <Cafe></Cafe>
        </div>
        <footer className="homepage-footer">
                <p>&copy; 2024 EV Charging. All rights reserved.</p>
            </footer>
    </div>
  );
};

export default Features;
