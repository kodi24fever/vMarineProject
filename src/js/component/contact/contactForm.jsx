import React from 'react';
import { Link } from "react-router-dom";


function ContactForm() {
    return (
        <div className="text-center col-md-6 order-md-1" id="ContactForm">
            <h4 className="mb-3">Contact Us</h4>
            <form className="needs-validation">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" value="" required=""></input>
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" value="" required=""></input>
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>
    
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email"></input>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
                
                <div className="mb-3"/>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="3"></textarea>
                
                <hr className="mb-4"/>
                <button className="btn btn-primary btn-mx " type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;