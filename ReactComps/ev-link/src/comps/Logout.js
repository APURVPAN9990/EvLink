import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login-related data (e.g., localStorage or session data)
    localStorage.removeItem('loginType'); // Remove the loginType from localStorage
    localStorage.removeItem('userData');  // Optionally clear other user-related data

    // Redirect to the main component (home screen)
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      {/* Optionally, you can add a loading spinner or animation here */}
    </div>
  );
};

export default Logout;