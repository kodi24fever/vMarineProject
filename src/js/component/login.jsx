import React from 'react';
import LoginBg from "../../img/loginBG.jpg";
import {Consumer} from "../stores/AppContext.jsx";
import { Redirect } from 'react-router';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  
  render() {
    return (
        <div className="wrapper login">
            <div className="container center_div LogIn">
                <h2 className="text-center">Login</h2>
                <Consumer>
                    {({ state, actions }) => {
                    const token = state.session.token;
                    
                      if(!token || token === ""){
                      return (
                          <form onSubmit={(e) => {
                                                e.preventDefault();
                                                actions.loadSession(this.state.username, this.state.password); 
                                          }}>
                              <div className="form-group">
                                  <input type="username" className="form-control" placeholder="Username"
                                  value={this.state.username}
                                  onChange={(e) => this.setState({username: e.target.value})}/>
                              </div>
                              <div className="form-group">
                                  <input type="password" className="form-control" placeholder="Password"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})}/>
                              </div>
                              <div className="form-group form-check">
                                  <input type="checkbox" className="form-check-input"/>
                                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                              </div>
                              <div className="text-center">
                                  <button type="submit" className="btn btn-primary">Login</button>
                              </div>
                          </form>
                      );
                        
                      }else return <Redirect to='/userPage'  />;
                      }
                    }
                </Consumer>
            </div>
        </div>  
    );
  }
}

