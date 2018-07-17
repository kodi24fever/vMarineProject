import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../component/navbar.jsx';
import {Footer} from '../component/footer.jsx';


//create your first component
export class Gallery extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1>Welcome to our awesome gallery</h1>
                <Footer />
            </React.Fragment>
        );
    }
}