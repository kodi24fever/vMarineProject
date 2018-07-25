import React, { Component } from 'react';


export class Progress extends React.Component{
 render() {
    return (
        <div className="container text-white">
            <h2>Animated Progress Bar</h2>
            <p>Add the .progress-bar-animated class to animate the progress bar:</p> 
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>  
        );
    }
}
    