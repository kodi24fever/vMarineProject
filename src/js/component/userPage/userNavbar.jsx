import React from 'react';
import Avatar  from'../../../img/profile-avatar.jpg';

export class UserNavbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <img className="img-fluid rounded-circle" src={Avatar} width="60" height="20" />
                <a href="/home" type="button" className="btn btn-primary">Log out</a>
            </nav>
        );
    }
}

