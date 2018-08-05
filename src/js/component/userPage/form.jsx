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
                    <div className="col-sm-12 col-lg-10 order-md-1 mx-auto" id="ContactForm">
                        <form className="needs-validation" onSubmit={(e) => {e.preventDefault();
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
                        this.setState({
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
                        });
                            
                        }}>
                            <div className="text-left">
                                <div className="my-3">
                                    <label htmlFor="Subject">Subject</label>
                                    <input id="Subject" type="subject" className="form-control" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })}></input>
                                </div>
                                <div>
                                    <label>Comment</label>
                                    <textarea className="form-control" value={this.state.comment} rows="3" onChange={(e) => this.setState({ comment: e.target.value })}></textarea>
                                </div>
                                    
                                <div className="row">
                                    <div className="col-12 col-md-4 mb-3 mt-3">
                                        <label>Boat Make</label>
                                        <input className="form-control" value={this.state.boatMake} onChange={(e) => this.setState({ boatMake: e.target.value })}></input>
                                    </div>
                                    
                                    <div className="col-12 col-sm-12 col-md-4 mb-3 mt-3">
                                        <label>Boat Model</label>
                                        <input type="" className="form-control" value={this.state.boatModel} onChange={(e) => this.setState({ boatModel: e.target.value })}></input>
                                    </div>
                                    
                                    <div className="col-12 col-sm-12 col-md-4 mb-3 mt-3">
                                        <label>Boat Length</label>
                                        <input type="" className="form-control" value={this.state.boatLenght} onChange={(e) => this.setState({ boatLenght: e.target.value })}></input>
                                    </div>
                                </div>
                
                                <div className="mb-3">
                                    <label>Hull ID</label>
                                    <input className="form-control" value={this.state.hullID} onChange={(e) => this.setState({ hullID: e.target.value })}></input>
                                </div>
                                
                                <div className="mb-3">
                                    <label>Number of Engines</label>
                                    <input type="" className="form-control" value={this.state.numberOfEngines} onChange={(e) => this.setState({ numberOfEngines: e.target.value })}></input>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 col-md-4 mb-3">
                                        <label>Engine Year</label>
                                        <input className="form-control" value={this.state.engineYear} onChange={(e) => this.setState({ engineYear: e.target.value })}></input>
                                    </div>
                                    
                                    <div className="col-12 col-sm-12 col-md-4 mb-3">
                                        <label>Engine Model</label>
                                        <input className="form-control" value={this.state.engineModel} onChange={(e) => this.setState({ engineModel: e.target.value })}></input>
                                    </div>
                                    
                                    <div className="col-12 col-sm-12 col-md-4 mb-3">
                                        <label>Engine HP</label>
                                        <input className="form-control" value={this.state.engineHP} onChange={(e) => this.setState({ engineHP: e.target.value })}></input>
                                    </div>
                                </div>
                                <div className="row">    
                                    <div className="col-12 col-sm-12 col-md-6 mb-3">
                                        <label>Engine ID</label>
                                        <input className="form-control" value={this.state.engineID} onChange={(e) => this.setState({ engineID: e.target.value })}></input>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 mb-3">
                                        <label>Serial</label>
                                        <input className="form-control" value={this.state.serial} onChange={(e) => this.setState({ serial: e.target.value })}></input>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="btn btn-primary btn-mx my-3 text-center" type="submit">Submit</button>
                        </form>
                    </div>
                );
            }
                
            }

        </Consumer>
    );
    }
}


