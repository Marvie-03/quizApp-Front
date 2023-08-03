import { useState, useEffect } from 'react';
import "./timer.css";




const Timer = () =>{
    
    const [count, setCount] = useState(60);
    useEffect(()=>{
        let countdown = setTimeout(()=>{
            if(count > 0){
                setCount((count) => count - 1)
            }
        }, 1000);
        return () => clearTimeout(countdown)
    });
    return(
        <div className="timer-container">
            <div className="timer-circle">
                <div className="circle">
                    {count}
                </div>
            </div>
        </div>
    )
} 

export default Timer;