// src/components/Navbar.js
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path-to-your-logo.png" alt="ElectricPe" />
      </div>
      <ul className="navbar-links">
        <li><a href="/Pricing">About Us</a></li>
        <li>
          <a href="/products">Products</a>
          <div className="dropdown">
            {/* Add dropdown items here */}
          </div>
        </li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="/press">Press</a></li>
        <li>
          <a href="/more">More</a>
          <div className="dropdown">
            {/* Add dropdown items here */}
          </div>
        </li>
      </ul>
      <div className="navbar-shop">
        <a href="/shop">Shop</a>
      </div>
    </nav>
  );
};

export default Navbar;
