import { useState} from 'react';

import "./dashboard.css";

import category from './category';
//components
import UserCard from './UserCard';



const Dashboard = () => {

    const[categories, setCategories] = useState(category);

    return (
        <div className="container mt-3">
            <UserCard/>
            
            <div className="user-greeting mt-3 mb-4">
                Let's play
            </div>       
            <div className="container">
                <div className="row">
                    { categories.map(cat=>{
                        return(
                            <div className='col-6 mb-5'key={cat.id}>
                                <div className='card'>
                                    <div className='image-container' >
                                        <img  src={cat.image} alt={cat.alt} width="150px"/>
                                    </div>
                                    <div className='title-container'>
                                        <h4>{cat.title}</h4>
                                        <small className='textmuted'>{cat.questionNo}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;