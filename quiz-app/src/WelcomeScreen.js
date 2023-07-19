import logo from './Images/logo.png';

const WelcomeScreen = () => {
    return (
        <div className="container-fluid d-flex vh-100 text-center align-items-center justify-content-center">
            <img src={logo} alt="logo" className="w-75" />
        </div>
        
    );
}
 
export default WelcomeScreen;