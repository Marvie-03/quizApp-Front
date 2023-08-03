import "./answers.css";

const options = [
    {
        title:"Basketball",
        correct: false
    },
    {
        title:"Volleyball",
        correct: false
    },
    {
        title:"Football",
        correct: true
    },
    {
        title:"Lawn tennis",
        correct: false
    }
]


const Answers = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {options.map(selection=>{
                        return(
                            <div className="answers" key={selection.title}>
                                {selection.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
} 

export default Answers;