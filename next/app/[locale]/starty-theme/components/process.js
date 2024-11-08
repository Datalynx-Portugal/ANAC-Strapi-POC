import React from "react";

import {FaAnkh,FiAirplay, BiUser} from "../assets/icons/vander"

export default function Process({title,icon}){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title fw-semibold mb-3">{title}</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
                    {icon === false ? 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">1</div>: 
                        <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto"><FaAnkh className="icon"/></div>
                    }

                    <div className="content mt-4 pt-2">
                        <h4>Conferences</h4>
                        <p className="text-muted mb-0 mt-3">Write a short description, that will describe the title or something informational and useful.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mt-4 pt-2">
                <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
                    {icon === false ? 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">2</div>: 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto"><FiAirplay className="icon"/></div>
                    }

                    <div className="content mt-4 pt-2">
                        <h4>Webinars</h4>
                        <p className="text-muted mb-0 mt-3">Write a short description, that will describe the title or something informational and useful.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 mt-4 pt-2">
                <div className="features feature-primary text-center border-0 px-lg-4 position-relative">
                    {icon === false ? 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">3</div>: 
                         <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto"><BiUser className="icon"/></div>
                    }

                    <div className="content mt-4 pt-2">
                        <h4>Virtual Classes</h4>
                        <p className="text-muted mb-0 mt-3">Write a short description, that will describe the title or something informational and useful.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}