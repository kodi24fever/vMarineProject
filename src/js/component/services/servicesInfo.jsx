import React from 'react';
import { Link } from "react-router-dom";


function ServicesInfo() {
    return (
        <div>
            
            <div className="container-fluid">
                <div className="ml-5 mt-3">
                    <h4>Services</h4>
                    <p>VMarine offers both standar maintenance services as well as warranty and non-warranty repair services.</p>
                </div>
                <div className="row bg-light">
                    <h4 className="col-12 ml-5 mb-3">VMarine Mantenance Services</h4>
                    <div className="col-6 ">
                        <h6>20 Hour Services</h6>
                        <ul>
                            <li>System check with diagnostics</li>
                            <li>Replace fuel filter</li>
                            <li>Replace water/fuel separator</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h6>100 Hour Services</h6>
                        <ul>
                            <li>System check with diagnostics</li>
                            <li>Replace fuel filter</li>
                            <li>Replace water/fuel separator</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> 
                </div>
                <div className="row ml-5 mt-3">
                    <h4 className="col-12 mb-3">VMarine Repair Services</h4>
                    <div className="col-6">
                        <ul>
                            <li>System check with diagnostics</li>
                            <li>Replace fuel filter</li>
                            <li>Replace water/fuel separator</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>    
            </div>    
        </div>
    );
}

export default ServicesInfo;