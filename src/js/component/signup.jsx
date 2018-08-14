 import React from 'react';
 import {Consumer} from "../stores/AppContext.jsx";
 
export default class SignUp extends React.Component{
    constructor() {
         super();
        this.state = {
            username: '',
            //firstName: '',
            //lastName: '',
            email: '',
            /*address: '',
            phone: '',*/
            password: ''
            //confirmPassword: ''
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
                            <form onSubmit={(e) => {e.preventDefault(); 
                                                    actions.signUp(this.state.username, this.state.email, this.state.password);
                                                    this.setState({username: '', email: '', password: ''});
                                                    }}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                                </div>
                                {/*<div className="form-group">
                                    <label>First Name</label>
                                    <input type="" className="form-control" onChange={(e) => this.setState({firstName: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="" className="form-control" onChange={(e) => this.setState({lastName: e.target.value})}/>
                                </div>*/}
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                                </div>
                                {/*
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="address" className="form-control" onChange={(e) => this.setState({address: e.target.value})}/>
                                </div>
                                
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
                                </div>
                                */}
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


