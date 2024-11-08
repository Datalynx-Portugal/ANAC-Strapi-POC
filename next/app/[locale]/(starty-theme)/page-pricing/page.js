import Link from "next/link";
import React from "react";
import { pricingData } from "../data";
import NavbarTwo from "../components/navbar/navbarTwo";
import PricingFive from "../components/pricing/pricingFive";
import PricingTwo from "../components/pricing/pricingTwo";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";
export default function Pricing(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Comfortable Rates</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Pricing</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <PricingFive title={false}/>
            </div>
        </section>
        <section className="section bg-light">
            <div className="container">
                <PricingTwo title="center"/>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary">Pricing Plan</h6>
                            <h4 className="title fw-semibold mt-2 mb-3">Select a Plan <br/> Now To Get More Profit</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {pricingData.map((item,index)=>{
                        return(
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card pricing text-center border-0 rounded shadow overflow-hidden">
                                <div className="px-4 py-5 bg-light border-bottom">
                                    <h5 className="text-uppercase mb-0">{item.title}</h5>
                                    <p className="text-primary mb-0">{item.payaments}</p>
                                </div>

                                <div className="px-4 pb-5 pt-4 bg-white">
                                    <ul className="list-unstyled mb-0">
                                        {item.features.map((el,index)=>{
                                            return(
                                                <li className="border-bottom h6 py-4" key={index}>{el}</li>
                                            )
                                        })}
                                    </ul>

                                    <div className="my-4">
                                        <h1 className="fw-semibold mb-0 text-primary">${item.amount}</h1>
                                    </div>

                                    <Link href="#" className={item.btnClass}>Subscribe Now</Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}