import React, { useState } from 'react';
import '../Css/Registration.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [password, setPassword] = useState('');
  const [vehicalCompany, setVehicalCompany] = useState('');
  const [model, setModel] = useState('');
  const [vehicalNumber, setVehicalNumber] = useState('');
  const [fullAddress, setFullAddress] = useState('');

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = 'Full name is required';
    if (!contactnumber || !/^\d{10}$/.test(contactnumber)) newErrors.contactnumber = 'Valid 10-digit contact number is required';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!vehicalCompany) newErrors.vehicalCompany = 'Vehicle company is required';
    if (!model) newErrors.model = 'Model is required';
    if (!vehicalNumber) newErrors.vehicalNumber = 'Vehicle number is required';
    if (!fullAddress) newErrors.fullAddress = 'Full address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmissionStatus('Please fix the errors above.');
      return;
    }

    axios.post('http://localhost:8080/api/register', {
      fullname,
      contactnumber,
      password,
      vehicalCompany,
      model,
      vehicalNumber,
      fullAddress
    })
    .then(response => {
      console.log('Registration successful', response.data);
      navigate('/login');  // Redirect to home
    })
    .catch(error => {
      console.error('Registration error', error);
      setSubmissionStatus('Registration failed. Please try again.');

      // Clear all fields on error
      setFullname('');
      setContactnumber('');
      setPassword('');
      setVehicalCompany('');
      setModel('');
      setVehicalNumber('');
      setFullAddress('');

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
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              value={fullname} 
              onChange={e => setFullname(e.target.value)} 
            />
            {errors.fullname && <span className="error-text">{errors.fullname}</span>}
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input 
              type="text" 
              placeholder="Contact Number" 
              value={contactnumber} 
              onChange={e => setContactnumber(e.target.value)} 
            />
            {errors.contactnumber && <span className="error-text">{errors.contactnumber}</span>}
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
          <div className="form-group">
            <label>Vehicle Company</label>
            <input 
              type="text" 
              placeholder="Vehicle Company" 
              value={vehicalCompany} 
              onChange={e => setVehicalCompany(e.target.value)} 
            />
            {errors.vehicalCompany && <span className="error-text">{errors.vehicalCompany}</span>}
          </div>
          <div className="form-group">
            <label>Model</label>
            <input 
              type="text" 
              placeholder="Model" 
              value={model} 
              onChange={e => setModel(e.target.value)} 
            />
            {errors.model && <span className="error-text">{errors.model}</span>}
          </div>
          <div className="form-group">
            <label>Vehicle Number</label>
            <input 
              type="text" 
              placeholder="Vehicle Number" 
              value={vehicalNumber} 
              onChange={e => setVehicalNumber(e.target.value)} 
            />
            {errors.vehicalNumber && <span className="error-text">{errors.vehicalNumber}</span>}
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

export default Registration;
