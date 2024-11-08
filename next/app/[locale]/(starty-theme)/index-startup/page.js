import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import ScrollTop from "../components/scrollTop";
import PricingOne from "../components/pricing/pricingOne";
import BlogOne from "../components/blog/blogOne";
import Footer from "../components/footer/footer";
import HeroSlider from "../components/indexStartUp/heroSlider";
import Project from "../components/indexStartUp/project";

import {AiOutlineCheckCircle} from "../assets/icons/vander"

import { featureData, processData } from "../data/startUp";

export default function IndexStartUp(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <HeroSlider/>
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="features-absolute">
                            <div className="row">
                                {featureData.map((item,index)=>{
                                    let Icon = item.icon
                                    return(
                                    <div className="col-md-6 mt-4 pt-2" key={index}>
                                        <div className="features feature-primary rounded px-4 py-5 bg-white shadow border-0 d-flex align-items-center">
                                            <div className="fea-icon rounded-circle bg-light text-dark">
                                                <Icon className="icon text-dark"/>
                                            </div>
                
                                            <div className="content flex-1 ms-3">
                                                <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src='/images/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title fw-semibold mb-3">We are a creative design studio!</h4>
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
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">Latest Projects & Works</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
            </div>
 
 
            <Project/>
        </section>
        <section className="section">
            <div className="container">
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
        </section>
        <section className="section bg-light overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="me-lg-5">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="section-title text-center text-md-start mb-4 pb-2">
                                        <h4 className="title fw-semibold mb-4">Work Process</h4>
                                        <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {processData.map((item,index)=>{
                                    return(
                                    <div className="col-md-12 mt-4 pt-2" key={index}>
                                        <div className="features feature-primary rounded border-0 d-flex">
                                            <div className="fea-icon rounded-circle text-white title-dark shadow avatar avatar-md-sm" style={{width:'40px', height:'40px'}}>
                                                {index+1}
                                            </div>
                
                                            <div className="content flex-1 ms-3">
                                                <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}   
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="img-fluid-responsive position-relative">
                            <Image src="/images/lapy.png" width={0} height={0} sizes="100vw" style={{width:'1175px', height:'auto'}} className="mx-auto d-block" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <BlogOne/>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}