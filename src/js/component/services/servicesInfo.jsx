import React from 'react';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

library.add(faWrench);

function ServicesInfo() {
    return (
        <div className="container">
        
            <div className="ml-5 mt-5 mb-5 text-center">
                <h2>Services</h2>
                <p className="lead">VMarine offers both standard maintenance services as well as warranty and non-warranty repair services.
                    Offering the convenience of both in-marina service as well as mobile and dockside service, the most common services we provide are the following:</p>
            </div>
                
            <div className="container-fluid servMant">
                <div className="container">
                    <div className="row">
                        <h4 className="col-12 ml-5 mb-3 mt-3 text-center">VMarine Mantenance Services</h4>
                        <div className="col-lg-6 col-sm-12 col-xm-12">
                            <h6 className="ml-5">20 Hour Services</h6>
                            <ul className="listServ">
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>System check with diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace fuel filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace water/fuel separator</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace engine oil and filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Change gear oil</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace spark plugs</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspect and/or replace tab-zinc and anode</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Grease points in the engine</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Spray anti-corrosion layer on metels</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xm-12">
                            <h6 className="ml-5">100 Hour Services</h6>
                            <ul className="listServ">
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>System check with diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace fuel filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace water/fuel separator</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace engine oil and filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Change gear oil</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace spark plugs</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspect and/or replace tab-zinc and anode</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Grease points in the engine</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Spray anti-corrosion layer on metels</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replace water pump impeller</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspect water pump housing & replaceif necessary</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Optional/Extra: Replace thermostats (Recommended every 300 hrs)</li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5 servRep">
                <div className="row ml-5 mt-3">
                    <h4 className="col-12 mt-3 mb-3 text-center">VMarine Repair Services</h4>
                    <div className="col-lg-12 col-sm-12 col-xm-12">
                        <ul className="listServRep">
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Powerhead Rebuilds</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Lower Unit Repair & Reseal</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Fuel System Cleaning</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Electrical Systems Diagnostics</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Hydraulic Steering & Helm Repair</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Carburetor Rebuilds</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Mobil & Dockside Service</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Repowering/Rigging</li>
                            <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Much more</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ServicesInfo;