import React from "react";
import Link from "next/link";

import {AiOutlineCheckCircle} from "../../assets/icons/vander"

export default function PricingOne(){
    let pricingData = [
        {
            title:'FREE',
            desc:'For individuals looking for a simple Startups solution',
            amount:'0',
            features:[
                {
                    check:true,
                    title:'1 Domains'
                },
                {
                    check:true,
                    title:'1 GB File upload'
                },
                {
                    check:true,
                    title:'2 GB Secure storage'
                },
                {
                    check:false,
                    title:'Unlimited bandwidth'
                },
            ]
        },
        {
            title:'STARTUPS',
            desc:'For individuals looking for a simple Startups solution',
            amount:'9',
            features:[
                {
                    check:true,
                    title:'5 Domains'
                },
                {
                    check:true,
                    title:'2 GB File upload'
                },
                {
                    check:true,
                    title:'20 GB Secure storage'
                },
                {
                    check:false,
                    title:'Unlimited bandwidth'
                },
            ]
        },
        {
            title:'BUSINESS',
            desc:'For individuals looking for a simple Startups solution',
            amount:'39',
            features:[
                {
                    check:true,
                    title:'10 Domains'
                },
                {
                    check:true,
                    title:'5 GB File upload'
                },
                {
                    check:true,
                    title:'50 GB Secure storage'
                },
                {
                    check:false,
                    title:'Unlimited bandwidth'
                },
            ]
        },
        {
            title:'PREMIUM',
            desc:'For individuals looking for a simple Startups solution',
            amount:'99',
            features:[
                {
                    check:true,
                    title:'50 Domains'
                },
                {
                    check:true,
                    title:'10 GB File upload'
                },
                {
                    check:true,
                    title:'200 GB Secure storage'
                },
                {
                    check:true,
                    title:'Unlimited bandwidth'
                },
            ]
        },
    ]
    return(
        <>
            <div className="row">
                {pricingData.map((item, index) =>{
                    return(
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                        <div className="card border-0 shadow">
                            <div className="p-4 border-bottom border-light">
                                <h6 className="fw-semibold mb-3 text-uppercase">{item.title}</h6>
                                <p className="text-muted mb-0">{item.desc}</p>

                                <div className="d-flex my-4">
                                    <span className="price h3 fw-semibold mb-0">${item.amount}</span>
                                    <span className="text-muted align-self-end mb-1">/mo</span>
                                </div>

                                <Link href="#" className="btn btn-soft-primary w-100">Buy Now</Link>
                            </div>

                            <div className="p-4">
                                <h6 className="mb-3">Features:</h6>
                                <ul className="mb-0 list-unstyled">
                                    {item.features.map((el,index)=>{
                                        return(
                                        <li className="text-muted mb-2" key={index}><span className={`${el.check === true ? 'text-success ' : 'text-danger'} h5 me-1`}><AiOutlineCheckCircle className="align-middle"/></span> {el.title}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}