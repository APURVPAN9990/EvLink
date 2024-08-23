//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './comps/Navbar';
import Home from './comps/Home';
//import Boom from "./comps/Boom";
import Login from "./comps/Login";
import Registration from "./comps/Registration";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from "./comps/Pricing";
import Cafe from "./comps/Cafe";
import Features from "./comps/Features";
import PaymentPage from "./comps/PaymentPage";
import NodeFile from "./comps/NodeFile";
import SignUp from "./comps/SignUp";
import StationRegister from "./comps/StationRegister";
import StationLogin from "./comps/StationLogin";
import LoginMenu from "./comps/LoginMenu";
import Logout from "./comps/Logout";


function App() {
  const [loginType, setLoginType] = useState(localStorage.getItem('loginType'));

  useEffect(() => {
    const storedLoginType = localStorage.getItem('loginType');
    if (storedLoginType) {
      setLoginType(storedLoginType);
    }
  }, []);

  const handleLogin = (type) => {
    setLoginType(type);
    localStorage.setItem('loginType', type);
  };

  const handleLogout = () => {
    setLoginType(null);
    localStorage.removeItem('loginType');
  };
  return (
    
    //<Home></Home>
    //<Login></Login>
    //<Registration></Registration>
    //<Boom></Boom>
    //<Navbar></Navbar>
    
    <div>
      
    <Router>
      <div>
      {/* <Navbar loginType={localStorage.getItem('loginType')} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/stationlogin" element={<StationLogin onLogin={handleLogin} />} />
          <Route path="/nodefile" element={<NodeFile></NodeFile>} />
          <Route path="/loginmenu" element={<LoginMenu></LoginMenu>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/stationregister" element={<StationRegister/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cafes" element={<Cafe />} />
          <Route path="/features" element={<Features/>}/>
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
