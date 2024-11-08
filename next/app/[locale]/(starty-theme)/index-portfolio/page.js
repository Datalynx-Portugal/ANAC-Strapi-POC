import React from "react";
import Link from "next/link";

import NavbarTwo from "../components/navbar/navbarTwo";
import Partners from "../components/partners";
import Process from "../components/process";
import PricingOne from "../components/pricing/pricingOne";
import BlogOne from "../components/blog/blogOne";
import FooterThree from "../components/footer/footerThree";
import ScrollTop from "../components/scrollTop";
import VideoModal from "../components/portfolio/videoModal";
import Projects from "../components/portfolio/project";

export default function IndexPortfolio(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>
        <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/bg/portfolio.jpg')"}}>
            <div className="bg-overlay bg-dark bg-white-dark opacity-5"></div>
            <VideoModal/>
        </section>

        <div className="position-relative">
            <div className="shape overflow-hidden text-light">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="bg-light">
            <div className="container py-3">
                <Partners />
            </div>
        </section>

        <section className="section">
            <div className="container">
                <Process title="Work Process" icon={false}/>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8">
                                <div className="section-title text-md-start text-center mb-4 pb-2">
                                    <h4 className="title fw-semibold mb-3">Our Latest Projects</h4>
                                    <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-4 d-none d-md-block">
                                <div className="text-md-end text-center">
                                    <Link href="/portfolio-classic-four" className="btn btn-primary">See More</Link>
                                </div>
                            </div>
                        </div>
                        <Projects/>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">Pricing Plans</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
                <PricingOne/>
            </div>

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>
        <FooterThree top={false}/>
        <ScrollTop/>
        </>
    )
}