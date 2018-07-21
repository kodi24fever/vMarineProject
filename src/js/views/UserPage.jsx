import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../component/navbar.jsx';
import {Footer} from '../component/footer.jsx';


//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Footer />
            </React.Fragment>
        );
    }
}