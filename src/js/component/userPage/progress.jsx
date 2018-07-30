import React from 'react';
import {Consumer} from "../../stores/AppContext.jsx";

export default class Progress extends React.Component{
 render() {
    return (
        <Consumer>
            {({state}) => {
                return (
                    <div className="container-fluid text-info mt-4">
                        <p className="display-4">Always be Checking Work Progress Bar</p>
                        <p></p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-2 mb-lg-0"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Order: {state.order.id}</button></div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-2 mb-lg-0"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Model: {state.order.boatModel}</button></div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-2 mb-lg-0"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Number of engines: {state.order.numberOfEngines}</button></div>
                            <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-sm-2 mb-lg-0"><button type="button" className="btn btn-primary btn-lg btn-block disabled">Serial: {state.order.serial}</button></div>
                        </div>
                    </div>
                );
            }
            }
        </Consumer>
        );
    }
}
    