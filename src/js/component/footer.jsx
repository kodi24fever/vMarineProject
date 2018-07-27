import React from 'react';
import FaceLogo from "../../img/facebook.png";
import InstaLogo from "../../img/instagram.png";
import { Link } from "react-router-dom";

export class Footer extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <footer>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-6">
                                <a href="https://www.facebook.com/"><img src={FaceLogo} width="50" height="50"/></a>
                                <a href="https://www.facebook.com/"><img src={InstaLogo} width="50" height="50"/></a>
                            </div>
                            <div className="col-6 pt-2 text-right"><h5>Rights Reserved</h5></div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
            );
    }
}