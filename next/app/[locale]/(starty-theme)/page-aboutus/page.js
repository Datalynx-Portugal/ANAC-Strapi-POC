import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import ClientTwo from "../components/client/clientTwo";
import Partners from "../components/partners";
import Team from "../components/team";
import VideoModal from "../components/aboutUs/videoModal";
import Counter from "../components/aboutUs/counter";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

import {AiOutlineCheckCircle,FiArrowRight} from '../assets/icons/vander'
import { aboutData } from "../data/aboutUs";

export default function PageAboutUs(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/about.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Who we are?</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">About Our Company</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src="/images/about.jpg" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto' }} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3">We are a creative design studio!</h4>
                            <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                            <ul className="list-unstyled text-muted mb-0">
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Beautiful and easy to understand animations</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Theme advantages are pixel perfect design</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    {aboutData.map((item, index) =>{
                        let Icon = item.icon 
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                            <div className="card shadow p-4 rounded features features-classic feature-primary">
                                <Icon className="h1 mb-0 text-primary"/>

                                <div className="content my-3 border-bottom">
                                    <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>

                                    <p className="text-muted mt-3">{item.desc}</p>
                                </div>

                                <Link href="/page-single-service" className="d-flex align-items-center justify-content-between">
                                    <span className="fw-medium text-dark">Read More</span>
                                   <FiArrowRight/>
                                </Link>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container-fluid px-0 mt-100 mt-60">
                <div className="bg-half-260" style={{backgroundImage:"url('/images/cta.jpg')", backgroundPosition:'top'}}>
                    <div className="bg-overlay"></div>
                    <VideoModal/>
                </div>
            </div>

            <div className=" mt-100 mt-60">
                <ClientTwo/>
            </div>

            <div className="container mt-5">
                <Partners/>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <Team/>
            </div>

            <Counter/>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}