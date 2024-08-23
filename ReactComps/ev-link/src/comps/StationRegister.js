import React, { useState } from 'react';
import '../Css/Registration.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StationRegister = () => {
  const navigate = useNavigate();

  const [ownerName, setOwnerName] = useState('');
  const [stationName, setStationName] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!ownerName) newErrors.ownerName = 'Owner name is required';
    if (!stationName) newErrors.stationName = 'Station name is required';
    if (!fullAddress) newErrors.fullAddress = 'Full address is required';
    if (!latitude || isNaN(latitude)) newErrors.latitude = 'Valid latitude is required';
    if (!longitude || isNaN(longitude)) newErrors.longitude = 'Valid longitude is required';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmissionStatus('Please fix the errors above.');
      return;
    }

    axios.post('http://localhost:8080/api/stationregister', {
      ownerName,
      stationName,
      fullAddress,
      latitude,
      longitude,
      password
    })
    .then(response => {
      console.log('Registration successful', response.data);
      navigate('/stationlogin');  // Redirect to home
    })
    .catch(error => {
      console.error('Registration error', error);
      setSubmissionStatus('Registration failed. Please try again.');

      // Clear all fields on error
      setOwnerName('');
      setStationName('');
      setFullAddress('');
      setLatitude('');
      setLongitude('');
      setPassword('');

      // Clear validation errors
      setErrors({});
    });
  };

  return (
    <div className='background'>
      <header className="homepage-header">
            <Navbar loginType={localStorage.getItem('loginType')} />
                <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
      </header>
      <div className="registration-form-container">
        <h1>Register Charging Station</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Owner Name</label>
            <input 
              type="text" 
              placeholder="Owner Name" 
              value={ownerName} 
              onChange={e => setOwnerName(e.target.value)} 
            />
            {errors.ownerName && <span className="error-text">{errors.ownerName}</span>}
          </div>
          <div className="form-group">
            <label>Station Name</label>
            <input 
              type="text" 
              placeholder="Station Name" 
              value={stationName} 
              onChange={e => setStationName(e.target.value)} 
            />
            {errors.stationName && <span className="error-text">{errors.stationName}</span>}
          </div>
          <div className="form-group">
            <label>Full Address</label>
            <input 
              type="text" 
              placeholder="Full Address" 
              value={fullAddress} 
              onChange={e => setFullAddress(e.target.value)} 
            />
            {errors.fullAddress && <span className="error-text">{errors.fullAddress}</span>}
          </div>
          <div className="form-group">
            <label>Latitude</label>
            <input 
              type="text" 
              placeholder="Latitude" 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)} 
            />
            {errors.latitude && <span className="error-text">{errors.latitude}</span>}
          </div>
          <div className="form-group">
            <label>Longitude</label>
            <input 
              type="text" 
              placeholder="Longitude" 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)} 
            />
            {errors.longitude && <span className="error-text">{errors.longitude}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          <button type="submit" className="button">Register</button>
          <button type="button" className="button" onClick={() => navigate('/')}>Back To Home</button>
          {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2024 EV Charging. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StationRegister;
