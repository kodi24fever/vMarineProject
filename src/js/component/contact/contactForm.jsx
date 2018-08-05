import React from 'react';
import {Consumer} from "../../stores/AppContext.jsx";

export default class ContactForm extends React.Component {
    constructor(){
        super();
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                comment: ''
        };
    }
    render(){
    return (
        <Consumer>
            {({state, actions}) => {
                return(
                    <div className="text-center col-md-6 order-md-1 mx-auto mt-3 fixed-footer" id="ContactForm">
                        <h4 className="mb-3">Contact Us</h4>
                        <form className="needs-validation" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        actions.contactForm(this.state.firstName, this.state.lastName, this.state.email, this.state.comment);
                                                                        this.setState({firstName: '',lastName: '', email:  '', comment: ''});
                                                                    }}>
                            <div className="row text-left">
                                <div className="col-md-6 mb-3">
                                    <label>Your Name</label>
                                    <input type="text" className="form-control" id="firstName" value={this.state.firstName} required="" onChange={(e) => this.setState({firstName: e.target.value })}></input>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Your Last Name</label>
                                    <input type="text" className="form-control" id="lastName" value={this.state.lastName} required="" onChange={(e) => this.setState({lastName: e.target.value })}></input>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>
                
                            <div className="mb-3 text-left">
                                <label>Your Email</label>
                                <input type="email" className="form-control" id="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            
                            <div className="text-left">
                                <label>How Can We help?</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Tell us what you think..." rows="3" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}></textarea>
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
