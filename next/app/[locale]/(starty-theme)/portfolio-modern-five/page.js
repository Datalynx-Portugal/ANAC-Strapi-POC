import React from "react";
import NavbarTwo from "../components/navbar/navbarTwo";
import ModernPortfolioTwo from "../components/portfolio/modernPortfolioTwo";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

export default function ModernFive(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/port04.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Portfolio & Works</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works in Five Columns</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
           <ModernPortfolioTwo gridClass="row row-cols-md-2 row-cols-lg-5 mt-4 pt-2"/>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}