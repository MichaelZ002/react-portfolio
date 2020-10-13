import React from "react";
import Michael from '../content/michael.jpg'

function Home(){
    return (
        <div className="container-fluid">
        <h2>Hello!</h2>
        <br />
        <div className="row">
            <div className="col-md-3">
                <img src={Michael} alt="mike" className="img img-fluid mx-auto d-block" />
            </div>
            <div className="col-md-7">
                <p>I am Michael Zaslavsky</p>
                <p>I am 22 years old! I am currently a student at NorthWestern Coding Boot Camp! This page was made using react!</p>
            </div>
        </div>
    </div>
    )
}

export default Home