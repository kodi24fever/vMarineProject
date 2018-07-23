import React from 'react';
import { Link } from "react-router-dom";
import {Navbar} from '../component/navbar.jsx';
import {Footer} from '../component/footer.jsx';
import {GalleryContent} from '../component/gallery/galleryContent.jsx';


//create your first component
export class Gallery extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="text-center">Welcome to our awesome gallery</h1>
                <GalleryContent />
                <Footer />
            </React.Fragment>
        );
    }
}