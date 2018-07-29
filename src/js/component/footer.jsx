import React from 'react';
import FaceLogo from "../../img/facebook.png";
import InstaLogo from "../../img/instagram.png";
import { Link } from "react-router-dom";

export class Footer extends React.Component{
    constructor(){
        super();
        this.state={
                listOfItems:['home', 'services', 'gallery', 'contact']
        };
    }
    
    render(){
        return(
            <React.Fragment>
                <footer>
                    <div className="container border-bottom border-top mt-4">
                        <ul className="nav justify-content-center">
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
                    <br></br>
                    <div className="container-fluid visual-footer pt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <a href="https://www.facebook.com/"><img src={FaceLogo} width="50" height="50"/></a>
                                    <a href="https://www.facebook.com/"><img src={InstaLogo} width="50" height="50"/></a>
                                </div>
                                <div className="col-6 pt-2 text-right"><p className="h6">&copy; Copyright 2018 Vazquez Marine</p></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
            );
    }
}