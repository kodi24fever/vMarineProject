import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Form extends Component {
    constructor(props) {
		super(props);
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
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
	handleFormSubmit(e) {
		e.preventDefault();

		this.setState = {
			subject: this.state.subject,
			comment: this.state.comment,
			boatMake: this.state.boatMake,
			boatModel: this.state.boatModel,
			boatLenght: this.state.boatLenght,
			hullID: this.state.hullID,
			numberOfEngines: this.state.numberOfEngines,
			engineYear: this.state.engineYear,
			engineModel: this.state.engineModel,
			engineHP: this.state.engineHP,
			engineID: this.state.engineID,
			serial: this.state.serial
		};
	}
    render(){
    return (
        <div className="text-center col-md-6 order-md-1 mx-auto" id="ContactForm">
        
            <form className="needs-validation" action="" method="get" onSubmit={this.handleFormSubmit}>
                <div className="mt-3 mb-3">
                    <input type="subject" className="form-control" id="subject" placeholder="Subject" onChange={(e) => this.setState({ subject: e.target.value })}></input>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
                <div className="mb-3"/>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="3" onChange={(e) => this.setState({ comment: e.target.value })}></textarea>
                    
                <div className="row">
                    <div className="col-12 col-md-4 mb-3 mt-3">
                        <input type="" className="form-control" id="" placeholder="Boat Make" onChange={(e) => this.setState({ boatMake: e.target.value })}></input>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-4 mb-3 mt-3">
                        <input type="" className="form-control" id="" placeholder="Boat Model" onChange={(e) => this.setState({ boatModel: e.target.value })}></input>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-4 mb-3 mt-3">
                        <input type="" className="form-control" id="" placeholder="Boat Lenght" onChange={(e) => this.setState({ boatLenght: e.target.value })}></input>
                    </div>
                </div>

                <div className="mb-3">
                    <input type="hull id" className="form-control" id="hull id" placeholder="Hull ID" onChange={(e) => this.setState({ hullID: e.target.value })}></input>
                </div>
                
                <div className="mb-3">
                    <input type="" className="form-control" id="" placeholder="Number of Engines" onChange={(e) => this.setState({ numberOfEngines: e.target.value })}></input>
                </div>
                
                <div className="row">
                    <div className="col-12 col-md-4 mb-3">
                        <input type="" className="form-control" id="" placeholder="Engine Year" onChange={(e) => this.setState({ engineYear: e.target.value })}></input>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-4 mb-3">
                        <input type="" className="form-control" id="" placeholder="Engine Model" onChange={(e) => this.setState({ engineModel: e.target.value })}></input>
                    </div>
                    
                    <div className="col-12 col-sm-12 col-md-4 mb-3">
                        <input type="" className="form-control" id="" placeholder="Engine HP" onChange={(e) => this.setState({ engineHP: e.target.value })}></input>
                    </div>
                </div>
                <div className="row">    
                    <div className="col-12 col-sm-12 col-md-6 mb-3">
                        <input type="" className="form-control" id="" placeholder="Engine ID" onChange={(e) => this.setState({ engineID: e.target.value })}></input>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 mb-3">
                        <input type="" className="form-control" id="" placeholder="Serial" onChange={(e) => this.setState({ serial: e.target.value })}></input>
                    </div>
                </div>
                
                <button className="btn btn-primary btn-mx my-3" type="submit">Submit</button>
            </form>
        </div>
    );
    }
}


