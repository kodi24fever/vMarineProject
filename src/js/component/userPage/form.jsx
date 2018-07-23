import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Form extends Component {
    render(){
    return (
        <div className="text-center col-md-6 order-md-1 mx-auto" id="ContactForm">
        
            <form className="needs-validation">
                <div className="mt-3 mb-3">
                    <input type="subject" className="form-control" id="subject" placeholder="Subject"></input>
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                </div>
                
                <div className="mb-3"/>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="3"></textarea>
                
                
                <div className="mb-3 mt-3">
                    <input type="" className="form-control" id="" placeholder="Boat Make/Model/Lenght"></input>
                </div>

                <div className="mb-3">
                    <input type="hull id" className="form-control" id="hull id" placeholder="Hull ID"></input>
                </div>
                
                <div className="mb-3">
                    <input type="" className="form-control" id="" placeholder="Number of Engines"></input>
                </div>

                <div className="mb-3">
                    <input type="" className="form-control" id="" placeholder="Engine Year/Model/HP"></input>
                </div>
                
                <div className="mb-3">
                    <input type="" className="form-control" id="" placeholder="Engine ID/Serial"></input>
                </div>
                
                <button className="btn btn-primary btn-mx my-3" type="submit">Submit</button>
            </form>
        </div>
    );
    }
}