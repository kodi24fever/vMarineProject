import React from 'react';

export class Carousel extends React.Component{
    
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.pexels.com/photos/218983/pexels-photo-218983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://media.istockphoto.com/photos/christmas-lights-defocused-background-bokeh-gold-blue-picture-id613518332" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://media.istockphoto.com/photos/christmas-lights-defocused-background-bokeh-gold-blue-picture-id613518332" alt="Third slide"/>
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