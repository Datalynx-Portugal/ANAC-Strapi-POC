import React from "react";
import Link from "next/link";

export default function PricingFive({title}){
    return(
        <>
        {title === false ? '':
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h6 className="text-primary">Pricing Plan</h6>
                        <h4 className="title fw-semibold mt-2 mb-3">Select a Plan <br/> Now To Get More Profit</h4>
                        <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                    </div>
                </div>
            </div>
        }

        <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card pricing text-center border-0 rounded py-5">
                    <h4 className="mb-0">FREE</h4>

                    <div className="my-5">
                        <h1 className="display-2 fw-medium mb-0">$0</h1>
                        <p className="text-muted mb-0">Per Year</p>
                    </div>

                    <ul className="list-unstyled mb-0">
                        <li className="text-muted mt-3">Number of People 01 Person</li>
                        <li className="text-muted mt-3">Unlimited Projects</li>
                        <li className="text-muted mt-3">Club Access Unlimited Access</li>
                        <li className="text-muted mt-3">Class Access Fitness Classes</li>
                        <li className="text-muted mt-3">Enhanced Security</li>
                    </ul>

                    <div className="mt-5">
                        <Link href="#" className="btn btn-lg btn-primary">Free</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card pricing bg-primary bg-gradient text-center border-0 rounded py-5">
                    <h4 className="mb-0 text-white title-dark">STARTER</h4>

                    <div className="my-5">
                        <h1 className="display-2 fw-medium text-white title-dark mb-0">$39</h1>
                        <p className="text-white-50 mb-0">Per Year</p>
                    </div>

                    <ul className="list-unstyled mb-0">
                        <li className="text-white-50 mt-3">Number of People 01 Person</li>
                        <li className="text-white-50 mt-3">Unlimited Projects</li>
                        <li className="text-white-50 mt-3">Club Access Unlimited Access</li>
                        <li className="text-white-50 mt-3">Class Access Fitness Classes</li>
                        <li className="text-white-50 mt-3">Enhanced Security</li>
                    </ul>

                    <div className="mt-5">
                        <Link href="#" className="btn btn-lg btn-light">Start Now</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card pricing text-center border-0 rounded py-5">
                    <h4 className="mb-0">PROFESSIONAL</h4>

                    <div className="my-5">
                        <h1 className="display-2 fw-medium mb-0">$59</h1>
                        <p className="text-muted mb-0">Per Year</p>
                    </div>

                    <ul className="list-unstyled mb-0">
                        <li className="text-muted mt-3">Number of People 01 Person</li>
                        <li className="text-muted mt-3">Unlimited Projects</li>
                        <li className="text-muted mt-3">Club Access Unlimited Access</li>
                        <li className="text-muted mt-3">Class Access Fitness Classes</li>
                        <li className="text-muted mt-3">Enhanced Security</li>
                    </ul>

                    <div className="mt-5">
                        <Link href="#" className="btn btn-lg btn-primary">Update Now</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}