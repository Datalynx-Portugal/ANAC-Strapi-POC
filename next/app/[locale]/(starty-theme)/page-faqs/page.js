import React from "react";
import Link from "next/link";
import NavbarTwo from "../components/navbar/navbarTwo";
import PricingFive from "../components/pricing/pricingFive";
import FaqTwo from "../components/faqTwo";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

export default function Faq(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Questions & Answers</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">FAQs</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <FaqTwo/>
            <div className="container mt-100 mt-60">
                <PricingFive/>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}