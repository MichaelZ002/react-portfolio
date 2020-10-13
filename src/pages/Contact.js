import React from "react";
import Resume from '../content/resume.pdf'

function Contact(){

    return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row justify-content-sm-center">
                <div className="column-lg-9">
                    
                    
                </div>
                <div className="column-lg-2 offset-sm-1 col-auto">
                    <h2 className="display-5">My links</h2>
                    <a className="btn btn-info" href="https://www.linkedin.com/in/michael-zaslavsky-32a773186/">LinkedIn</a>
                    <a className="btn btn-primary btn-sm" href="https://twitter.com/MichaelZ492">Twitter</a>
                    <a className="btn btn-danger" href={Resume} target="_blank">View Resume</a>
                    <a className="btn btn-dark" href="https://github.com/MichaelZ002">GitHub</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact