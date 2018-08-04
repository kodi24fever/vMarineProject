import React from 'react';
import {Consumer} from "../../stores/AppContext.jsx";

export default class Profile extends React.Component {
    constructor(){
        super();
        this.state ={
            email: '',
            password: '',
            address: '',
            phone: ''
        };
    }
    render(){
    return (
        <Consumer>
            {({state, actions}) => {
                    let updateUser = state.userAccount;
                return (
                    <div className="container-fluid mt-4" id="profileForm">
                        <p className="display-4 text-info text-left">Feel free to see or update your information</p>
                        <form className="" onSubmit={(e) => {e.preventDefault(); actions.updateProfile.email(this.state.email);}}>
                            <div className="row mb-3">
                                <label className="col-1">Email</label>
                                <div className="col-12 col-lg-11 mx-auto"><input type="email" className="form-control" placeholder={state.userAccount.email} onChange={(e) => updateUser.setState({email: e.target.value})}></input></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-1">Password</label>
                                <div className="col-12 col-lg-10"><input type="password" className="form-control" placeholder={state.userAccount.password} onChange={(e) => updateUser.setState({password: e.target.value})}></input></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-1">Address</label>
                                <div className="col-12 col-lg-10"><input type="" className="form-control" placeholder={state.userAccount.address} onChange={(e) => updateUser.setState({address: e.target.value})}></input></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-1">Phone</label>
                                <div className="col-12 col-lg-10"><input type="" className="form-control" placeholder={state.userAccount.phone} onChange={(e) => updateUser.setState({password: e.target.value})}></input></div>
                            </div>
                            <div className="text-center"><button className="btn btn-primary" type="submit">Update</button></div>
                        </form>
                    </div>
                );
            }
            }

        </Consumer>
     );
    }
}