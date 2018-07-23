import React from 'react';
import Photo from '../../../img/rigo-baby.jpg';

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
                    <div className="row"> 
                        <div className="col-3">
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                        </div>
                        <div className="col-3">
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                        </div> 
                        <div className="col-3">
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                        </div>
                        <div className="col-3">
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                            <img src={Photo}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}