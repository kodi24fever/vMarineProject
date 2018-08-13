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
                <GalleryContent />
                <Footer className="fixed-bottom"/>
            </React.Fragment>
        );
    }
}