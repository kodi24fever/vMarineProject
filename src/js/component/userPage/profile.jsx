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
                    let resetUserValue = this.state;
                    let updateUser = state.userAccount;
                return (
                    <div className="container-fluid mt-4" id="profileForm">
                        <p className="display-4 text-info text-left">Feel free to see or update your information</p>
                        <form className="" onSubmit={(e) => {e.preventDefault(); 
                                                        actions.updateProfile(this.state.email, this.state.password, this.state.address, this.state.phone);
                                                        this.setState({email: '', password: '', address: '', phone:''});
                                                    }}>
                            <div className="row mb-3">
                                <label className="col-1">Email</label>
                                <div className="col-12 col-lg-10"><input type="email" className="form-control" value={resetUserValue.email} placeholder={state.userAccount.billing_email} onChange={(e) => this.setState({email: e.target.value, password: updateUser.password, address: updateUser.address, phone: updateUser.phone})}></input></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-1">Password</label>
                                <div className="col-12 col-lg-10"><input type="password" className="form-control" value={resetUserValue.password} placeholder={state.userAccount.password} onChange={(e) => this.setState({password: e.target.value, email: updateUser.email, address: updateUser.address, phone: updateUser.phone})}></input></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-1">Address</label>
                                <div className="col-12 col-lg-10"><input type="" className="form-control" value={resetUserValue.address} placeholder={state.userAccount.billing_address_1} onChange={(e) => this.setState({address: e.target.value, email: updateUser.email, password: updateUser.password, phone: updateUser.phone})}></input></div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-1">Phone</label>
                                <div className="col-12 col-lg-10"><input type="" className="form-control" value={resetUserValue.phone} placeholder={state.userAccount.phone} onChange={(e) => this.setState({phone: e.target.value, email: updateUser.email, password: updateUser.password, address: updateUser.address})}></input></div>
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