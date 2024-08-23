import React, { useState } from 'react';
import '../Css/Login.css';
import '../Css/Home.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic client-side validation for password length
    if (password.length < 6) {
      setLoginError('Password must be at least 6 characters long');
      setPassword(''); // Clear the password field
      return;
    }

    axios.post('http://localhost:8080/api/login', null, {
      params: {
        fullname,
        password
      }
    })
    .then(response => {
      if (response.data) {
        localStorage.setItem('loginType', 'user'); // Store loginType as 'user'
        console.log('Login successful', response.data); // Log success message
        navigate('/');  // Redirect to home page after successful login
      } else {
        setLoginError('Invalid fullname or password');
        setFullname('');  // Clear fullname field
        setPassword('');  // Clear password field
      }
    })
    .catch(error => {
      console.error('Login error', error);
      setLoginError('An error occurred during login. Please try again.');
      setFullname('');  // Clear fullname field
      setPassword('');  // Clear password field
    });
  };

  return (
    <div>
      <header className="homepage-header">
            <Navbar loginType={localStorage.getItem('loginType')} />
                <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
      </header>
      <div className="login-form-wrapper">
        <div className="login-form-container">
          <h1>Login for Customers</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text"  
                value={fullname} 
                onChange={e => setFullname(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password"  
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
                minLength={6} 
              />
            </div>
            {loginError && <p className="error-message">{loginError}</p>}
            <button type="submit" className="button">Login</button>
            <button type="button" className="button" onClick={() => navigate('/')}>Back To Home</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 EV Charging. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
