import Questions from "./Questions";
import Answers from "./Answers";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";


const Quiz = () =>{
    return(
        <div className="container mt-5">
            <ProgressBar/>
            <Timer/>
            <Questions/>
            <Answers/>
        </div>
    )
} 

export default Quiz;