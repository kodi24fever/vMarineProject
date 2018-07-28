import React from 'react';
import {Consumer} from "../../stores/AppContext.jsx";


export default class Form extends React.Component {
    constructor() {
		super();
		this.state = {
			subject: '',
			comment: '',
			boatMake: '',
			boatModel: '',
			boatLenght: '',
			hullID: '',
			numberOfEngines: '',
			engineYear: '',
			engineModel: '',
			engineHP: '',
			engineID: '',
			serial:''
		};
    }
    
    render(){
    return (
        <Consumer>
            {({state, actions}) => {
                return (
                    <div className="text-center col-sm-12 col-lg-10 order-md-1 mx-auto" id="ContactForm">
                        <form className="needs-validation" action="" method="get" onSubmit={(e) => {e.preventDefault();
                        actions.placeOrder(
                                this.state.subject,
                                this.state.comment,
                                this.state.boatMake,
                                this.state.boatModel,
                                this.state.boatLenght,
                                this.state.hullID,
                                this.state.numberOfEngines,
                                this.state.engineYear,
                                this.state.engineModel,
                                this.state.engineHP,
                                this.state.engineID,
                                this.state.serial
                        );
                            
                        }}>
                            <div className="my-3">
                                <input type="subject" className="form-control" value={this.state.subject} placeholder="Subject" onChange={(e) => this.setState({ subject: e.target.value })}></input>
                            </div>
                            <div className="mb-3"/>
                            <textarea className="form-control" value={this.state.comment} placeholder="Comment" rows="3" onChange={(e) => this.setState({ comment: e.target.value })}></textarea>
                                
                            <div className="row">
                                <div className="col-12 col-md-4 mb-3 mt-3">
                                    <input type="" className="form-control" value={this.state.boatMake} placeholder="Boat Make" onChange={(e) => this.setState({ boatMake: e.target.value })}></input>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-md-4 mb-3 mt-3">
                                    <input type="" className="form-control" value={this.state.boatModel} placeholder="Boat Model" onChange={(e) => this.setState({ boatModel: e.target.value })}></input>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-md-4 mb-3 mt-3">
                                    <input type="" className="form-control" value={this.state.boatLenght} placeholder="Boat Lenght" onChange={(e) => this.setState({ boatLenght: e.target.value })}></input>
                                </div>
                            </div>
            
                            <div className="mb-3">
                                <input type="hull id" className="form-control" value={this.state.hullID} placeholder="Hull ID" onChange={(e) => this.setState({ hullID: e.target.value })}></input>
                            </div>
                            
                            <div className="mb-3">
                                <input type="" className="form-control" value={this.state.numberOfEngines} placeholder="Number of Engines" onChange={(e) => this.setState({ numberOfEngines: e.target.value })}></input>
                            </div>
                            
                            <div className="row">
                                <div className="col-12 col-md-4 mb-3">
                                    <input type="" className="form-control" value={this.state.engineYear} placeholder="Engine Year" onChange={(e) => this.setState({ engineYear: e.target.value })}></input>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-md-4 mb-3">
                                    <input type="" className="form-control" value={this.state.engineModel} placeholder="Engine Model" onChange={(e) => this.setState({ engineModel: e.target.value })}></input>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-md-4 mb-3">
                                    <input type="" className="form-control" value={this.state.engineHP} placeholder="Engine HP" onChange={(e) => this.setState({ engineHP: e.target.value })}></input>
                                </div>
                            </div>
                            <div className="row">    
                                <div className="col-12 col-sm-12 col-md-6 mb-3">
                                    <input type="" className="form-control" value={this.state.engineID} placeholder="Engine ID" onChange={(e) => this.setState({ engineID: e.target.value })}></input>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 mb-3">
                                    <input type="" className="form-control" value={this.state.serial} placeholder="Serial" onChange={(e) => this.setState({ serial: e.target.value })}></input>
                                </div>
                            </div>
                            
                            <button className="btn btn-primary btn-mx my-3" type="submit">Submit</button>
                        </form>
                    </div>
                );
            }
                
            }

        </Consumer>
    );
    }
}


