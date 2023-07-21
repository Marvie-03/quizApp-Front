import "../registration.css"
import {Link} from "react-router-dom";


const Signup = () => {
    return (
        <form action="">
            <div className="container text-center p-3">
                <div className="card">
                    <div className="card-header">
                        <div className="row m-auto">
                            <div className="col-12 "><h2>Signup Form</h2></div>
                            <div className="col-12">
                                <div className="switch-container border border-primary">
                                    <Link to={'/registration/signup'}>
                                        <button type="button" className="btn active-link reg-btn">Signup</button>
                                    </Link>
                                    <Link to={'/registration/login'}>
                                        <button type="button" className="btn reg-btn">Login</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <input type="email" value='' onChange={''} className="form-control 
                                form-control-sm form-control-outline-primary" placeholder="email"/>
                            </div>
                            <div className="col-12 mt-3">
                                <input type="password" value='' onChange={''} className="form-control form-control-sm 
                                form-control-outline-primary" placeholder="password"/>
                            </div>
                            <div className="col-12 mt-3">
                                <input type="password" value='' onChange={''} className="form-control form-control-sm 
                                form-control-outline-primary" placeholder="confirm password"/>
                            </div>
                        </div>
                        <input className="form-control bg-primary mt-3" type="submit" 
                        value="Signup"/>
                    </div>
                
                </div>
            </div>
            
        
        </form>
    );
}
 
export default Signup;