import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Profile extends Component {
         render(){
    return (
        <div className="text-center col-md-6 mx-auto" id="profileForm">
        
            <form className="needs-validation" action="" method="get">
                <div className="mt-3 mb-3">
                    <input type="name" className="form-control" id="nameCard" placeholder="Name on Card"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="account" className="form-control" id="account#" placeholder="Account Number"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="date" className="form-control" id="" placeholder="MM/YY"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="" className="form-control" id="" placeholder="CVC"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="" className="form-control" id="" placeholder="ZIP"></input>
                </div>
                
                
                <button className="btn btn-primary btn-mx my-3" type="submit">Add Card</button>
            </form>
        </div>
     );
    }
}