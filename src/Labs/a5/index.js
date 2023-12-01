import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLS";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
        <>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href="https://kanbas-node-server-app-mdyner-150e557f92ff.herokuapp.com/a5/welcome"
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>

        </>
    );
}
export default Assignment5;