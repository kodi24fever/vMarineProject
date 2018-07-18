import React from 'react';
import FaceLogo from "../../img/facebook.png";
import InstaLogo from "../../img/instagram.png";
import { Link } from "react-router-dom";

export class Footer extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <footer>
                    <div className="container">
                        <div className="row">
                            <a href="https://www.facebook.com/"><img src={FaceLogo} width="50" height="50"/></a>
                            <a href="https://www.facebook.com/"><img src={InstaLogo} width="50" height="50"/></a>
                            <p>Rights Reserved</p>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
            );
    }
}