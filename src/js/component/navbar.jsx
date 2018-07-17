import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

export class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
                listOfItems:['home', 'services', 'gallery', 'contact']
        };
    }
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand mx-auto" to="/home">
                        <img className="img-fluid" src={Logo} width="150" height="150" />
                    </Link>
                    <button className="navbar-toggler btn-block" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <a className="navbar-brand" href="#">Menu</a>
                        <span className="navbar-toggler-icon text-right"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            {
                                this.state.listOfItems.map((names, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <Link className="nav-link" to={"/"+names}>
                                                <h5>{names.toUpperCase()}</h5>
                                            </Link>
                                        </li>
                                    );
                                })
                                }
                        </ul>
                    </div>
                    <a className="btn btn-success" role="button">Sign in</a>
                    <a className="btn btn-primary" role="button">Sign up</a>
                </div>
            </nav>
            );
    }
}