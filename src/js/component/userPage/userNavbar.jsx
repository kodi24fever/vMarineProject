import React from 'react';
import Avatar  from'../../../img/profile-avatar.jpg';
import {Consumer} from "../../stores/AppContext.jsx";
import { Link } from "react-router-dom";

export class UserNavbar extends React.Component{
    render(){
        return(
            <Consumer>
                {({state, actions}) => {
                    return (
                        <nav className="navbar navbar-dark bg-dark">
                            <img className="img-fluid rounded-circle" src={Avatar} width="60" height="20" />
                            <Link to='/home' type="button" className="btn btn-primary" onClick={actions.logout}>Log out</Link>
                        </nav>                    
                    );
                }
                }

            </Consumer>
        );
    }
}

