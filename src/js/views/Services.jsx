import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../component/navbar.jsx';
import {Carousel} from '../component/home/carousel.jsx';
import ServicesInfo from '../component/services/servicesInfo.jsx';
import {Footer} from '../component/footer.jsx';


//create your first component
export class Services extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Carousel />
                <ServicesInfo />
                <Footer />
            </React.Fragment>
        );
    }
}