import React from "react";
import MoVic from '../content/movic.PNG'
import Dnd from '../content/dnd.PNG'
import Fit from '../content/fit.PNG'
function Portfolio(){

    return (
        <div className="container-fluid">
        <h2>Some Projects!</h2>
        <br />
        <div className="row">
            <div className="col-md-3">
                <img src={MoVic} alt="movic" className="img img-fluid mx-auto d-block" />
            </div>
            <div className="col-md-7">
                <p>This is MoVic. A way to get information and the Soundtrack about any movie!</p>
                <p>you can find the github here! <a href =" https://github.com/nigarabdullayeva/Project-one-Movic">here!</a></p>
                <p>You can find the deploy paged here! <a href ="https://nigarabdullayeva.github.io/Project-one-Movic/">here! </a></p>

                <div className="col-md-3">
                <img src={Dnd} alt="d" className="img img-fluid mx-auto d-block" />
            </div>
            <div className="col-md-7"></div>
            <p>This is a Dungeons and Dragons character maker!</p>
                <p>you can find the github here! <a href =" https://github.com/MichaelZ002/project-two-group-zero">here!</a></p>
                <p>You can find the deploy app <a href ="https://peaceful-everglades-53655.herokuapp.com/">here! </a></p>
                
                <img src={Fit} alt="f" className="img img-fluid mx-auto d-block" />
                <p>Work out tracker </p>
                <p>you can find the github here! <a href =" https://github.com/MichaelZ002/homework_seventeen">here!</a></p>
                <p>You can find the deploy app <a href ="https://serene-beach-10522.herokuapp.com/?id=5f5847d82089ca001738ff1b">here! </a></p>
                
                
            </div>
        </div>
    </div>
    )

    
}


export default Portfolio