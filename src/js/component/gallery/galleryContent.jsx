import React from 'react';
import Photo from '../../../img/rolia.jpg';

export class GalleryContent extends React.Component{
    constructor() {
        super();
        this.state = {
            photos:[{/*classHerewithImage amap to show all images in gallery*/}]
        };
    }
    
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center my-5">Welcome to our Awesome Gallery</h1>
                    <p className="text-center mb-5">Check out our latest projects. Feel free to contact us if you liked it!</p>
                    <div className="row"> 
                        <div className="col-4">
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                            <img className="img-fluid" src={Photo}/>
                        </div>
                        <div className="col-4">
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