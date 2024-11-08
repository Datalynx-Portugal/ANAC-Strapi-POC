import React from "react";
import Link from "next/link";

import {AiOutlineCheckCircle,LiaTimesCircleSolid} from '../../assets/icons/vander'
export default function PricingFour(){
    let pricingData = [
        {
            title:'Free',
            amount:'0',
            desc:"For individuals looking for a simple Startups solution",
            btnText:'Get Start Free',
            tag:false,
            features:[
                {
                    check:true,
                    feature:' 1 Domains'
                },
                {
                    check:true,
                    feature:'1 GB File upload'
                },
                {
                    check:true,
                    feature:'2 GB Secure storage'
                },
                {
                    check:false,
                    feature:'Unlimited bandwidth'
                },
            ]
        },
        {
            title:'Startups',
            amount:'9',
            desc:"For individuals looking for a simple Startups solution",
            btnText:'Free for 14 Days',
            tag:true,
            features:[
                {
                    check:true,
                    feature:'5 Domains'
                },
                {
                    check:true,
                    feature:'2 GB File upload'
                },
                {
                    check:true,
                    feature:'20 GB Secure storage'
                },
                {
                    check:true,
                    feature:'Custom Views'
                },
                {
                    check:true,
                    feature:' Advanced Reports'
                },
                {
                    check:false,
                    feature:'Unlimited bandwidth'
                },
            ]
        },
        {
            title:'Business',
            amount:'49',
            desc:"For individuals looking for a simple Startups solution",
            btnText:'Contact with us',
            tag:false,
            features:[
                {
                    check:true,
                    feature:'10 Domains'
                },
                {
                    check:true,
                    feature:'5 GB File upload'
                },
                {
                    check:true,
                    feature:'50 GB Secure storage'
                },
                {
                    check:true,
                    feature:'Custom Permissions'
                },
                {
                    check:true,
                    feature:'Custom Permissions'
                },
            ]
        }
    ]
    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <span className="badge bg-soft-primary rounded-lg">Subscribe Plans</span>
                        <h4 className="title fw-semibold mb-3 mt-2">Our Pricing Plans</h4>
                        <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {pricingData.map((item, index)=>{
                    return(
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card shadow bg-white p-4 pt-5">
                                {item.tag === true ?  <div className="ribbon ribbon-right ribbon-primary overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>:''}
                                <div className="text-center">
                                    <h4 className="fw-semibold mb-0">{item.title}</h4>

                                    <div className="d-flex justify-content-center my-4">
                                        <span className="price display-5 fw-semibold mb-0">${item.amount}</span>
                                        <span className="text-muted align-self-end mb-1">/mo</span>
                                    </div>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>

                                <div className="p-4 mt-4 bg-soft-primary rounded shadow">
                                    <h6 className="mb-3">Features:</h6>
                                    <ul className="list-unstyled mb-4">
                                        {item.features.map((el,index) =>{
                                            return(
                                                <li className="text-muted mt-2" key={index}>
                                                    <span className={`${el.check === true ? 'text-success' :'text-danger'} h5 me-1`}>
                                                        {el.check === true ?  <AiOutlineCheckCircle className="align-middle"/> : <LiaTimesCircleSolid className="align-middle"/>}
                                                    </span> 
                                                    {el.feature}
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    <Link href="#" className="btn btn-pills btn-primary">{item.btnText}</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}