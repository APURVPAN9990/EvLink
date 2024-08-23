import Navbar from "./Navbar";
import '../Css/SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const goToResgister = () => {
    navigate('/register');
  };
  
  const goToHome = () => {
    navigate('/');
  };

  const goToStationRegister = () => {
    navigate('/stationregister');
  };
    return (

      <div>
        <header className="homepage-header">
            <Navbar loginType={localStorage.getItem('loginType')} />
                <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
      </header>
      <div className='container'>
      <h1>Choose the Role of Registration</h1>
      <section className='disp'>
        
        <button className='button' onClick={goToResgister}>
          User Registration
        </button>
        <button className='button' onClick={goToStationRegister}>
          Station Registration
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
 
export default SignUp;