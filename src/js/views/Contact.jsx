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
    
                <ContactForm />
                <Footer />
            </React.Fragment>
        );
    }
}
