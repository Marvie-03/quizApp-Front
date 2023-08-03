
import coin from "../../Images/coin.png";
import trophy from "../../Images/trophy.png";
import avatar from "../../Images/Avatar.png";
import "../dashboard.css";


const UserCard = () => {

    return (
        <>
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
        </>
    );
}
 
export default UserCard;