import Navbar from "./Navbar";
import '../Css/SignUp.css';
import { useNavigate } from 'react-router-dom';

const LoginMenu = () => {
  const navigate = useNavigate();

  const goToResgister = () => {
    navigate('/login');
  };
  
  const goToHome = () => {
    navigate('/');
  };

  const goToStationRegister = () => {
    navigate('/stationlogin');
  };
    return (

      <div>
       <header className="homepage-header">
            <Navbar loginType={localStorage.getItem('loginType')} />
                <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
      </header>
      <div className='container'>
      <h1>Choose the Role for Login</h1>
      <section className='disp'>
        
        <button className='button' onClick={goToResgister}>
          User Login
        </button>
        <button className='button' onClick={goToStationRegister}>
          Station Login
        </button>
      </section>
      <button className='buttontomove' onClick={goToHome}>Back To Home</button>
      <footer className='footer'>
        <p>&copy; 2024 EV Charging. All rights reserved.</p>
      </footer>
    </div>

    </div>
    );
}
 
export default LoginMenu;