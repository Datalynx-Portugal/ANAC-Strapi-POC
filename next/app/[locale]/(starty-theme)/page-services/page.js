import React from "react";
import Link from "next/link";
import Image from "next/image";

import { aboutData,tabData } from "../data/services";
import NavbarTwo from "../components/navbar/navbarTwo";
import Tab from "../components/finance/tab";
import Counter from "../components/counter";
import ClientTwo from "../components/client/clientTwo";
import BlogOne from "../components/blog/blogOne";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

export default function Services(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/services.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">What we offer?</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Services Agency</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    {aboutData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-4" key={index}>
                            <div className="card border-0 p-4 text-center rounded features features-classic feature-primary">
                                <Icon className="h1 mb-3 text-primary w-100"/>
                                <div className="content">
                                    <Link href="/page-single-service" className="title text-dark h5">{item.title}</Link>

                                    <p className="text-muted mb-0 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Tab/>
            </div>
        </section>
        <section className="section bg-primary">
            <div className="container">
                <Counter/>
            </div>
        </section>

        <section className="section">
            <ClientTwo/>

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>
        <div className="container-fluid px-0">
            <div className="py-5 position-relative" style={{backgroundImage:"url('/images/cta02.jpg')", backgroundPosition:'center'}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7">
                            <h4 className="display-6 h4 mb-0 text-white title-dark fw-medium">Make your website unforgettable <br/> Join the Starty community.</h4>
                        </div>

                        <div className="col-lg-4 col-md-5 text-md-end mt-4 mt-sm-0">
                            <Link href="#" className="btn btn-light">Join us Now</Link>
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