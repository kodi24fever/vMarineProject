import React from 'react';

export default class Progress extends React.Component{
 render() {
    return (
        <div className="container-fluid text-info mt-4">
            <p className="display-4">Always be Checking Work Progress Bar</p>
            <p></p>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="row mt-4">
                <div className="col-3"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Order ID</button></div>
                <div className="col-3"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Boat Model</button></div>
                <div className="col-3"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Number of Engines</button></div>
                <div className="col-3"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Serial</button></div>
            </div>
        </div>  
        );
    }
}
    