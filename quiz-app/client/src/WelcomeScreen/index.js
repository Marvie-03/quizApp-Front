import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import logo from '../Images/logo.png';
import "./welcomescreen.css"

const WelcomeScreen = () => {
    const [message, setMessage] = useState();
    useEffect(()=>{
        fetch("http://localhost:8000/message")
        .then((res)=> res.json())
        .then((data)=> setMessage(data.message));
    },[])
    return (
        <div className="container">
            <img className="logo-image" src={logo} alt="logo" width="300px" />
            <Link to={'./registration/signup'}
                style={{
                    textDecoration:'none'
                }}            
            >
                <div className="row p-5">
                    <div>
                        <h3>{message}</h3>
                    </div>
                    <button className='btn btn-outline-success'>
                        Take quiz...
                    </button>
                </div>
            </Link>
        </div>
        
    );
}
 
export default WelcomeScreen;