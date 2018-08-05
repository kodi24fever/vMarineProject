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
                        
                        <div className="row">
                            <div className="col-4 mx-auto">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Progress</h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-info w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title">Details of your Order</h5>
                                        <div className="text-left">
                                            <p className="card-text">Order: {state.order.id}</p>
                                            <p className="card-text">Subject: {state.order.subject}</p>
                                            <p className="card-text">Boat Make: {state.order.boatMake}</p>
                                            <p className="card-text">Boat Model: {state.order.boatModel}</p>
                                            <p className="card-text">Boat Length: {state.order.boatLenght}</p>
                                            <p className="card-text">Number of Engines: {state.order.numberOfEngines}</p>
                                            <p className="card-text">Engine Year: {state.order.engineYear}</p>
                                            <p className="card-text">Engine Model: {state.order.engineModel}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-success">Appointment Date:</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            }
        </Consumer>
        );
    }
}
    