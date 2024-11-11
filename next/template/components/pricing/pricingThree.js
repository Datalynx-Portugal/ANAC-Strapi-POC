import React from "react";
import Link from "next/link";

export default function PricingThree(){
    let pricingData = [
        {
            title:'Starter',
            amount:'39',
            feature:['1 User', 'Unlimited Projects', 'Download Prototypes', 'Enhanced Security'],
            btnClass:'btn btn-primary mt-4'
        },
        {
            title:'Professional',
            amount:'59',
            feature:['10 User', 'Unlimited Projects', 'Download Prototypes', 'Enhanced Security'],
            btnClass:'btn btn-soft-primary mt-4'
        },
    ]
    return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 text-center text-lg-start">
                        <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <h6 className="text-primary">Pricing Plan</h6>
                            <h4 className="title fw-semibold mt-2 mb-3">Select a Plan <br/> Now To Get More Profit</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="ms-lg-5">
                            <div className="row align-items-center">
                                {pricingData.map((item, index)=>{
                                    return(
                                    <div className="col-md-6 col-12 mt-4 pt-2" key={index}>
                                        <div className="card pricing-rates text-center shadow rounded">
                                            <div className="card-body py-5 my-md-4">
                                                <h6 className="title text-uppercase mb-4">{item.title}</h6>
                                                <div className="d-flex justify-content-center text-primary mb-4">
                                                    <span className="h4 mb-0 mt-2">$</span>
                                                    <span className="price h1 mb-0">{item.amount}</span>
                                                    <span className="h4 align-self-end mb-1">/mo</span>
                                                </div>
        
                                                <ul className="list-unstyled mb-0 ps-0">
                                                    {item.feature.map((item,index)=>{
                                                        return(
                                                            <li className="text-muted mt-2" key={index}>{item}</li>
                                                        )
                                                    })}
                                                </ul>
                                                <Link href="#" className={item.btnClass}>Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}