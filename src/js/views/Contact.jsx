import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../component/navbar.jsx';
import {Carousel} from '../component/home/carousel.jsx';
import {BodyContent} from '../component/home/bodyContent.jsx';
import {Footer} from '../component/footer.jsx';


//create your first component
export class Contact extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Carousel />
                <BodyContent />
                <Footer />
            </React.Fragment>
        );
    }
}
