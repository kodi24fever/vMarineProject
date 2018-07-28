import React from 'react';
import Photo2 from '../../../img/IMG_9.jpg';
import Photo1 from '../../../img/rolia.jpg';
import Photo from '../../../img/IMG_15.jpg';

export class Carousel extends React.Component{
    
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Photo} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Photo1} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Photo2} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}