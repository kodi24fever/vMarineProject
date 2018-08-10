import React from 'react';
import Photo from '../../../img/rolia.jpg';
import {Consumer} from "../../stores/AppContext.jsx";

export class GalleryContent extends React.Component{
  
  
    
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <p className="display-4 text-center my-5">Welcome to our Awesome Gallery</p>
                    <p className="gallery-text text-center mb-5">Check out our latest projects. Feel free to contact us if you liked it!</p>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <Consumer>
                                {({state}) => {
                                state.gallery.map((photo, index) => {
                                    return <img className="img-fluid" key="index" src={photo.guid.rendered}/>;  
                                });
                                }}
                            </Consumer>
                        </div>
                 
                        
                        <div className="col-12 col-lg-4">
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}