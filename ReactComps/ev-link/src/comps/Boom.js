// src/pages/DynamicRegistrationPage.js
import React, { useState } from 'react';
import '../Css/Registration.css';

const Boom = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    password: '',
    vehicleCompany: '',
    model: '',
    vehicleNumber: '',
    batteryMAh: '',
    fullAddress: ''
  });

  const formFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'contactNumber', label: 'Contact Number', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'vehicleCompany', label: 'Vehicle Company', type: 'text' },
    { name: 'model', label: 'Model', type: 'text' },
    { name: 'vehicleNumber', label: 'Vehicle Number', type: 'text' },
    { name: 'batteryMAh', label: 'Battery MAh', type: 'text' },
    { name: 'fullAddress', label: 'Full Address', type: 'text' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g., API call)
    console.log('Form Data:', formData);
  };

  return (
    <div className="registration-container">
      <div className="registration-form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          {formFields.map((field) => (
            <div key={field.name} className="form-group">
              <label>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="registration-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Boom;
