 import React, { Component } from 'react';
 
 
 export class SignUp extends React.Component{
 render() {
    return (
        <div className="SignUp">
            <div className="container center_div SingUp">
                <h2 className="text-center">Sign Up</h2>
                <form>
                    <div className="form-group">
                        <input type="" className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <input type="" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>  
    );
  }
}

