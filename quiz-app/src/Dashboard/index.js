import "./dashboard.css";
import basketball from "../Images/basketball.png";
import testtubes from "../Images/testtubes.png";
import calculator from "../Images/calculator.png";
import calender from "../Images/calender.png";
import dna from "../Images/dna.png";
import map from "../Images/map.png";
import coin from "../Images/coin.png";
import trophy from "../Images/trophy.png";
import avatar from "../Images/Avatar.png";

const Dashboard = () => {
    return (
        <div className="container mt-3">
            <div className="container ">
                <div className="user-card">
                    <div className="user-name">
                        <div>
                            <span className="user-greeting">Hi, John</span>
                            <p style={{ fontSize:"12px"}}>Let's make this day productive</p>
                        </div>
                    </div>
                    <div className="user-avater">
                        <img  src={avatar} alt="avatar" className="user-image" />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="achievement-container p-1">
                    <div className="ranking">
                    <img  src={trophy} alt="trophy" className="achievement-image" />
                        <div className="ranking-text">
                            <small 
                                style={{ fontSize:"12px"}}
                            >Ranking</small>
                            <h4
                                style={{ color:"blue"}}
                            >348</h4>
                        </div>
                    </div>
                    <div className="dimacation"></div>
                    <div className="points">
                    <img  src={coin} alt="coin" width="50px" className="achievement-image"/>
                        <div className="point-text">
                            <small 
                                style={{ fontSize:"12px"}}
                            >points</small>
                            <h4
                                style={{ color:"blue"}}
                            >1209</h4>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="user-greeting mt-3 mb-4">
                Let's play
            </div>       
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card ">
                            <div className="image-container">
                                <img  src={basketball} alt="sports" width="150px" />
                            </div>
                            <div className="title-container">
                                <h4>Sports</h4>
                                <small className="textmuted">50 questions</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card ">
                            <div className="image-container">
                                <img  src={testtubes} alt="chemistry" width="150px" />
                            </div>
                            <div className="title-container">
                                <h4>Chemistry</h4>
                                <small className="textmuted">50 questions</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row mt-5">
                <div className="col-6">
                        <div className="card ">
                            <div className="image-container">
                                <img  src={calculator} alt="maths" width="150px" />
                            </div>
                            <div className="title-container">
                                <h4>Maths</h4>
                                <small className="textmuted">50 questions</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card ">
                            <div className="image-container">
                                <img  src={calender} alt="history" width="150px" />
                            </div>
                            <div className="title-container">
                                <h4>History</h4>
                                <small className="textmuted">50 questions</small>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                <div className="col-6">
                        <div className="card ">
                            <div className="image-container">
                                <img  src={dna} alt="biology" width="150px" />
                            </div>
                            <div className="title-container">
                                <h4>Biology</h4>
                                <small className="textmuted">50 questions</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card ">
                            <div className="image-container">
                                <img  src={map} alt="geography" width="150px" />
                            </div>
                            <div className="title-container">
                                <h4>Geography</h4>
                                <small className="textmuted">50 questions</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Dashboard;