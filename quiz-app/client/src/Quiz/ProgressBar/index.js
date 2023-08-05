
import "./progressBar.css";




const ProgressBar = () =>{
    return(
        <div className="container-centered">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="cancel-button">
                                X
                            </div>
                        </td>
                        <td>
                            <div className="bar-container">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" arial-valuenow="70"
                                    arial-vauemin = "0" arial-valuemax="100"
                                    style={{width:"70%"}}>
                                        <span className="sr-only">70%</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 

export default ProgressBar;