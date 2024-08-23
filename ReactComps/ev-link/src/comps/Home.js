import Navbar from "./Navbar";
import Map from "./Map";
import Pricing from "./Pricing";
import '../Css/Home.css';
import Cafe from "./Cafe";
import Adv from "./Adv";
import Step from "./Step";

const Home = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
            <Navbar loginType={localStorage.getItem('loginType')} />
                <p className='p1'>Your reliable partner for electric vehicle charging solutions.</p>
            </header>
            <div className="map-container">
                <Map />
            </div>

            <section className="features">
                <div className="feature">
                    <Adv />
                </div>
                <div className="feature">
                    <Pricing />
                </div>
                <div className="feature">
                    <Step />
                </div>
                <div className="feature">
                    <Cafe />
                </div>
            </section>
            <footer className="homepage-footer">
                <p>&copy; 2024 EV Charging. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
