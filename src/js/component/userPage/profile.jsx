import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Profile extends Component {
         render(){
    return (
        <div className="text-center col-md-6 mx-auto" id="profileForm">
        
            <form className="needs-validation" action="" method="get">
                <div className="mt-3 mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="" className="form-control" id="address" placeholder="Address"></input>
                </div>
                <div className="mt-3 mb-3">
                    <input type="" className="form-control" id="phone#" placeholder="Phone Number"></input>
                </div>
                
                
                <button className="btn btn-primary btn-mx my-3" type="submit">Update</button>
            </form>
        </div>
     );
    }
}