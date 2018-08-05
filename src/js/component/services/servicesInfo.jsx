import React from 'react';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import ServImg from "../../../img/ServMotorBG.jpg";

library.add(faWrench);

function ServicesInfo() {
    return (
        <div>
            
            <div className="container">
                <div className="ml-5 mt-5 mb-5 text-center">
                    <h2>Services</h2>
                    <p className="lead">VMarine offers both standard maintenance services as well as warranty and non-warranty repair services.
                    Offering the convenience of both in-marina service as well as mobile and dockside service, the most common services we provide are the following:</p>
                </div>
            </div>
            
            <div className="container"><div className="row"><h2 className="col-12 ml-5 mb-3 text-center">VMarine Maintenance Services</h2></div></div>
            
            <div className="container-fluid py-4 servMant">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h3 className="ml-5">100 Hour Services</h3>
                            <ul className="listServ">
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>PC-Check to show parameter diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of engine oil and filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Change gear oil</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of fuel filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Compression diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Fuel injection pressure diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of water/fuel separator</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement spark plugs</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspection and/or replacement of tab-zinc and anode</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of water pump impeller</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspection of water pump housing & replaceif necessary</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Spray anti-corrosion layer on metals</li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h3 className="ml-5">Annual Services</h3>
                            <ul className="listServ">
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>PC-Check to show parameter diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of engine oil and filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Change gear oil</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of fuel filter</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Compression diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Fuel injection pressure diagnostics</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of water/fuel separator</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement spark plugs</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspection and/or replacement of tab-zinc and anode</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Replacement of water pump impeller</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Inspection of water pump housing & replaceif necessary</li>
                                <li><FontAwesomeIcon icon="wrench" className="mr-2"/>Spray anti-corrosion layer on metals</li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
            
            <div className="container"><div className="row"><h2 className="col-12 my-4 text-center">VMarine Repair Services</h2></div></div>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <ul className="listServ">
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
                    <div className="col-12 col-lg-6 ServImg">
                        <img className="img-fluid border border-light" src={ServImg} width="350" height="450" />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ServicesInfo;