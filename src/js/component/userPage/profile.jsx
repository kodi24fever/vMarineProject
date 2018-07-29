import React from 'react';
import {Consumer} from "../../stores/AppContext.jsx";

export default class Profile extends React.Component {
    render(){
    return (
        <Consumer>
            {({state}) => {
                return (
                    <div className="container-fluid mt-4" id="profileForm">
                        <p className="display-4 text-left text-info">Feel free to see or update your information</p>
                        <form className="needs-validation">
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="email" className="form-control" placeholder={state.userAccount.email}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="password" className="form-control" placeholder={state.userAccount.password}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="" className="form-control" placeholder={state.userAccount.address}></input></div>
                                <div className="col-lg-2 mx-auto mt-2 mt-sm-2 mt-lg-0"><button className="btn btn-primary" type="submit">Update</button></div>
                            </div>
                            <div className="row my-3">
                                <div className="col-12 col-lg-10"><input type="" className="form-control" placeholder={state.userAccount.phone}></input></div>
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