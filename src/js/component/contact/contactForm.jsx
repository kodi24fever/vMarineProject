import React from 'react';
import {Consumer} from "../../stores/AppContext.jsx";

export default class ContactForm extends React.Component {
    constructor(){
        super();
        this.state = {
            conctactMe: {
                firstName: '',
                lastName: '',
                email: '',
                comment: ''
            }
        };
    }
    render(){
    return (
        <Consumer>
            {({state, actions}) => {
                return(
                    <div className="text-center col-md-6 order-md-1 mx-auto mt-3" id="ContactForm">
                        <h4 className="mb-3">Contact Us</h4>
                        <form className="needs-validation" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        actions.contactForm(this.state.firstName, this.state.lastName, this.state.email, this.state.comment);
                                                                    }}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstName} required="" onChange={(e) => this.setState({firstName: e.target.value })}></input>
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.state.lastName} required="" onChange={(e) => this.setState({lastName: e.target.value })}></input>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>
                
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            
                            <div className="mb-3"/>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="3" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}></textarea>
                            
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
