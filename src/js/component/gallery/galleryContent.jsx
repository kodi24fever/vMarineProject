import React from 'react';
import Photo from '../../../img/rolia.jpg';
import {Consumer} from "../../stores/AppContext.jsx";

export class GalleryContent extends React.Component{
    
    render(){
        return(
            <Consumer>
                {({state}) => {
                    return(
                        <div className="container">
                            <p className="display-4 text-center my-5">Welcome to our Awesome Gallery</p>
                            <p className="gallery-text text-center mb-5">Check out our latest projects. Feel free to contact us if you liked it!</p>
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    {
                                        state.gallery.map( (photo, index) => {
                                            return <img className="img-fluid pb-3" key={index} src={photo.url}/>; 
                                        })
                                    }
                                </div>
                                <div className="col-12 col-lg-4">
                                    {   state.isLoading ? (<div className="loader mx-auto"></div>)
                                        :
                                        state.gallery.map( (photo, index) => {
                                            return <img className="img-fluid pb-3" key={index} src={photo.url}/>; 
                                        })
                                    }
                                </div>
                                <div className="col-12 col-lg-4">
                                    {
                                        state.gallery.map( (photo, index) => {
                                            return <img className="img-fluid pb-3" key={index} src={photo.url}/>; 
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    );}
                }
            </Consumer>
        );
    }
}