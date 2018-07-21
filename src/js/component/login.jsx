import React, { Component } from 'react';
import LoginBg from "../../img/loginBG.jpg";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  /*
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  */
  
  render() {
    return (
        <div className="wrapper login">
            <div className="container center_div LogIn">
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>  
    );
  }
}

