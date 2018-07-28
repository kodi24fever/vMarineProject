import React from 'react';

export class BodyContent extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 my-5"><p className="display-4">Certified Service of Yamaha, Mercury, Suzuki, Johnson, and more.</p></div>
                        <div className="col-10 mx-auto">
                            <p className="home-text">
                            Our specialization is repairing and servicing any outboard engine. As well as maintaining and repairing the 
                            mechanical and electrical equipment found on recreational boats and small commercial ones. Yamaha, Seven 
                            Marine, Honda and more are the services we offer when it comes to systems checking and computer diagnostics.
                            Located at the 27TH Avenue
                            </p>
                            <p className="home-text">
                            We focus on the highest quality of work by answering product and service questions; suggesting information 
                            about other products and services. Process orders, prepare correspondences and fulfill customer needs to ensure 
                            100% customer satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12 mt-5"><p className="display-4">Vazquez Marine Services are</p></div>
                        <ul className="list-group mx-auto mb-3">
                            <li className="list-group-item"><p className="h6">System check with diagnostics</p></li>
                            <li className="list-group-item"><p className="h6">Replace water/fuel separator</p></li>
                            <li className="list-group-item"><p className="h6">Replace water/fuel separator</p></li>
                            <li className="list-group-item"><p className="h6">Replace water/fuel separator</p></li>
                            <li className="list-group-item"><p className="h6">Replace water/fuel separator</p></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}