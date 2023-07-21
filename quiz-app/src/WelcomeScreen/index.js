import {Link} from "react-router-dom";
import logo from '../Images/logo.png';
import "./welcomescreen.css"

const WelcomeScreen = () => {
    return (
        <div className="container">
            <img className="logo-image" src={logo} alt="logo" width="300px" />
            <Link to={'./registration/signup'}
                style={{
                    textDecoration:'none'
                }}            
            >
                <div className="row p-5">
                    <button className='btn btn-outline-success'>
                        Take quiz...
                    </button>
                </div>
            </Link>
        </div>
        
    );
}
 
export default WelcomeScreen;