import "../registration.css";
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <form action="">
            <div className="container  p-3">
                <div className="card">
                    <div className="card-header">
                        <div className="row m-auto">
                            <div className="col-12 "><h2 className="text-center">Login Form</h2></div>
                            <div className="col-12">
                                <div className="switch-container border border-primary">
                                    <Link to={'/registration/signup'}>
                                        <button type="button" className="btn reg-btn">Signup</button>
                                    </Link>
                                    <Link to={'/registration/login'}>
                                        <button type="button" className="btn reg-btn active-link">Login</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <input type="email" value='' onChange={''} className="form-control 
                                form-control-sm form-control-outline-primary" placeholder="Email"/>
                            </div>
                            <div className="col-12 mt-3">
                                <input type="password" value='' onChange={''} className="form-control form-control-sm 
                                form-control-outline-primary" placeholder="Password"/>
                                <Link to={''}><small className="text-muted">Forgot password?</small></Link>
                            </div>
                        </div>
                        <input className="form-control bg-primary mt-3 text-white" type="submit" 
                        value="Login"/>
                        <Link to={'/registration/signup'}>
                            <div style={{
                                textAlign:"left"
                            }}>
                                <small className="text-muted">Don't have an account?</small>
                            </div>
                        </Link>
                    </div>
                
                </div>
            </div>
            
        
        </form>
    );
}
 
export default Login;