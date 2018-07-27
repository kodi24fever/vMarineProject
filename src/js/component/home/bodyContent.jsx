import React from 'react';

export class BodyContent extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12"><h1>Certified Service of Yamaha Outboard and Seven Marine</h1></div>
                        <div className="col-12">
                            <p>
                            We specialize in servicing and dealing exclusively YAMAHA Outboard engines and Seven Marine, 
                            parts and products. Conveniently located at Hurricane Cove Marina by the Miami River, we are prepared 
                            to deal with any YAMAHA Outboard motor and Seven Marine, by land or by sea. From 100 hour services, 
                            computer diagnostics, to rebuilding powerheads, repowering, and performing warranty repairs, 
                            our YAMAHA Outboard and Seven Marine certified master technician is ready for any YAMAHA Outboard 
                            and Seven Marine outboard motor repair. A family-owned and operated business, we like to keep our 
                            focus on the highest quality of work, attention to detail and our commitment to make our customers 
                            100% satisfied. Our goal is and will always be our customer needs.
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12"><h1>Our Services are Plenty...</h1></div>
                        
                        <ul className="list-group mx-auto">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}