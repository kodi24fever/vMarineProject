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
                    
                return (
                    <div className="container-fluid mt-4" id="profileForm">
                        <p className="display-4 text-left text-info">Feel free to see or update your information</p>
                        <form onSubmit={(e) => {e.preventDefault(); actions.updateProfile.email(this.state.email);}}>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="email" className="form-control" placeholder={state.userAccount.email} onChange={(e) => this.setState({email: e.target.value})}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                        </form>
                        <form className="needs-validation" onSubmit={(e) => {e.preventDefault(); actions.updateProfile.password(this.state.password);}}>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="password" className="form-control" placeholder={state.userAccount.password} onChange={(e) => this.setState({password: e.target.value})}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                        </form>
                        <form className="needs-validation" onSubmit={(e) => {e.preventDefault(); actions.updateProfile.address(this.state.address);}}>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="" className="form-control" placeholder={state.userAccount.address} onChange={(e) => this.setState({address: e.target.value})}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                        </form>
                        <form className="needs-validation" onSubmit={(e) => {e.preventDefault(); actions.updateProfile.phone(this.state.phone);}}>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="" className="form-control" placeholder={state.userAccount.phone} onChange={(e) => this.setState({password: e.target.value})}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                        </form>
                    </div>
                );
            }
            }

        </Consumer>
     );
    }
}