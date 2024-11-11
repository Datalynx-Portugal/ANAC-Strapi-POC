import React from "react";
import Link from "next/link";

export default function PricingTwo({title}){
    let PricingData = [
        {
            title:'Personal',
            amount:'9',
            features:['Number of People 1 Person','Unlimited Projects','Club Access Unlimited Access','Class Access Fitness Classes','Enhanced Security'],
            btnClass:'btn btn-light'
        },
        {
            title:'BUSINESS',
            amount:'39',
            features:['Number of People 5 Person','Unlimited Projects','Club Access Unlimited Access','Class Access Fitness Classes','Enhanced Security'],
            btnClass:'btn btn-primary'
        },
        {
            title:'ENTERPRISE',
            amount:'59',
            features:['Number of People 10 Person','Unlimited Projects','Club Access Unlimited Access','Class Access Fitness Classes','Enhanced Security'],
            btnClass:'btn btn-light'
        },
    ]
    return(
        <>
        {title === 'center' ? 
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary">Pricing Plan</h6>
                            <h4 className="title fw-semibold mt-2 mb-3">Select a Plan <br/> Now To Get More Profit</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div> : 
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2">
                            <h6 className="text-primary">Pricing Plan</h6>
                            <h4 className="title fw-semibold mt-2 mb-3">Select a Plan Now To Get Tickets</h4>
                            <p className="text-muted para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
                }

        <div className="row">
            {PricingData.map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                        <div className="card pricing price-two rounded text-center border-0 shadow px-4 py-5 bg-white">
                            <div className="mb-5">
                                <h1 className="display-4 fw-medium mb-0">${item.amount}</h1>
                                <p className="text-muted mb-0">Per Month</p>
                            </div>
        
                            <div className="p-2 bg-light h6 mx-5 rounded-lg">
                                <span className="text-dark text-uppercase">{item.title}</span>
                            </div>
        
                            <ul className="list-unstyled mb-0 mt-4">
                                {item.features.map((el,index)=>{
                                    return(
                                        <li className="text-muted mt-3" key={index}>{el}</li>
                                    )
                                })}
                                
                            </ul>
        
                            <div className="mt-4 pt-2">
                                <Link href="#" className={item.btnClass}>Start Now</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}