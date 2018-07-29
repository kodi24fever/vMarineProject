 import React from 'react';
 import {Consumer} from "../stores/AppContext.jsx";
 
export default class SignUp extends React.Component{
    constructor() {
        this.state = {
            userAccount: {
            firstName: name,
            lastName: lastName,
            email: email,
            address: address,
            phone: number,
            password: password,
            confirmPassword: confirmPassword
        };
    }
 render() {
    return (
        <Consumer>
            {({state, actions}) => {
                return (
                    <div className="mt-5">
                        <div className="container mx-auto">
                            <h2 className="text-center">Sign Up</h2>
                            <form>
                                <div className="form-group">
                                    <input type="" className="form-control" placeholder="First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="" className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="address" className="form-control" placeholder="Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
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
            
        </Consumer>
    );
  }
}

