import React from "react";
import Link from "next/link";
import Image from "next/image";

import { aboutTwo, services} from "../data/services";
import NavbarTwo from "../components/navbar/navbarTwo";
import About from "../components/services/about";
import PricingFive from "../components/pricing/pricingFive";
import Partners from "../components/partners";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

export default function ServicesTwo(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/services.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row g-0 align-items-center mt-5">
                    <div className="col-lg-8 col-md-6">
                        <div className="title-heading text-md-start text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Our Services</h5>
                            <p className="text-white-50 mb-0">We Are Here To Help You</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <div className="text-md-end text-center">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                    <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <About/>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    {services.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className={`${item.iconClass} features border-0 d-flex`}>
                                <div className="fea-icon rounded-circle text-white title-dark">
                                    <Icon style={{width:'24px', height:'24px'}} />
                                </div>

                                <div className="content flex-1 ms-3">
                                    <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <PricingFive/>
            </div>

            <div className="container mt-5">
                <Partners/>
            </div>
        </section>
        <div className="container-fluid px-0">
            <div className="py-5 position-relative" style={{backgroundImage:"url('/images/cta02.jpg')", backgroundPosition:'center'}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-8">
                            <h4 className="display-6 h4 mb-0 text-white title-dark fw-medium">We create digital ideas that are bigger, bolder, braver and better.</h4>
                        </div>

                        <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 text-md-center">
                            <Link href="#" className="btn btn-light">Join us Now</Link>
                            <p className="text-white-50 mb-0 mt-2">or free trial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}