import React from 'react';
import { Consumer } from "../../stores/AppContext.jsx";
import { Redirect } from 'react-router';

export default class Progress extends React.Component {
    render() {
        return (
            <Consumer>
                {({state}) => {
                const token = state.session.token;
                
                if(token){
                    let cards = state.order.map((item, index) => {
                                        return (
                                            <div className="col-12 col-sm-12 col-md-6 col-xl-4  mx-auto" key="index">
                                                <div className="card mb-5">
                                                    <div className="card-header">
                                                        <h5>Progress</h5>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-info w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body text-primary">
                                                        <h5 className="card-title">Details of your Order</h5>
                                                        <div className="text-left">
                                                            <p className="card-text">Order Number: {item.ID}</p>
                                                            <p className="card-text">Subject: {item.meta_keys.subject}</p>
                                                            <p className="card-text">Boat Make: {item.meta_keys.boatMake}</p>
                                                            <p className="card-text">Boat Model: {item.meta_keys.boatModel}</p>
                                                            <p className="card-text">Boat Length: {item.meta_keys.boatLenght}</p>
                                                            <p className="card-text">Number of Engines: {item.meta_keys.numberOfEngines}</p>
                                                            <p className="card-text">Engine Year: {item.meta_keys.engineYear}</p>
                                                            <p className="card-text">Engine Model: {item.meta_keys.engineModel}</p>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-transparent border-success">Appointment Date:</div>
                                                </div>
                                            </div>
                                            );
                                        });
                    
                    if (state.ordersLoading === true){
                            return (
                                <div className="container-fluid text-info mt-4">
                                    <div className="row">
                                        <div className="loader mx-auto"></div>
                                    </div>
                                </div>
                            );
                    }
                    
                    // If i'm here it's because the fetch finish checking the order from the server
                    
                    if(state.ordersLoading === false && state.order.length > 0){
                            return (
                                <div className="container-fluid text-info mt-4">
                                    <p className="display-4">Always be Checking Work Progress Bar</p>
                                    <div className="row">
                                        {cards}
                                    </div>
                                </div>
                            );
                    }
                    if(state.ordersLoading === false && state.order.length === 0){
                        return (
                            <div className="container-fluid text-info mt-4">
                                <div className="row">
                                    <h1 className="mx-auto">No orders yet</h1>
                                </div>
                            </div>
                        );
                    }
                }else return <Redirect to='/login'  />;
                            
                    
                }
            }
            </Consumer>
        );
    }
}