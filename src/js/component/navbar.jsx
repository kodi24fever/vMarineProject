import React from 'react';

export class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
                listOfItems:['Home', 'Services', 'Gallery', 'Contact']
        };
    }
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand mx-auto" href="#"><img/></a>
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
                                            <a className="nav-link" href="#">{names}</a>
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