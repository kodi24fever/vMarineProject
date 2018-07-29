import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../component/navbar.jsx';
import ContactForm from '../component/contact/contactForm.jsx';

import {Footer} from '../component/footer.jsx';


//create your first component
export class Contact extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3706115104637!2d-80.24040178497847!3d25.791344583623374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7242527a5f3%3A0x2e2451e013af9f46!2s2501+NW+18th+Terrace%2C+Miami%2C+FL+33125!5e0!3m2!1sen!2sus!4v1532896335559" 
                width="100%" height="400" frameBorder="0" allowFullscreen></iframe>
                <ContactForm />
                <Footer />
            </React.Fragment>
        );
    }
}
