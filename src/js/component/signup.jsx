 import React from 'react';
 import {Consumer} from "../stores/AppContext.jsx";
 
export default class SignUp extends React.Component{
    constructor() {
         super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phone: '',
            password: '',
            confirmPassword: ''
        };
    }
    
 render() {
    return (
        <Consumer>
            {({state, actions}) => {
                return (
                    <div className="wrapper signUp mt-5">
                        <div className="container mx-auto">
                            <h2 className="text-center">Sign Up</h2>
                            <form>
                                <div className="form-group">
                                    <input type="" className="form-control" placeholder="First Name" onChange={(e) => this.setState({firstName: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="" className="form-control" placeholder="Last Name" onChange={(e) => this.setState({lastName: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="address" className="form-control" placeholder="Address" onChange={(e) => this.setState({address: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
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


