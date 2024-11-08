import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import Partners from "../components/partners";
import Team from "../components/team";
import PricingThree from "../components/pricing/pricingThree";
import ClientTwo from "../components/client/clientTwo";
import BlogTwo from "../components/blog/blogTwo";
import FooterFour from "../components/footer/footerFour";
import ScrollTop from "../components/scrollTop";
import HeroSlider from "../components/business/heroSlider";
import VideoModal from "../components/business/videoModal";
import Cta from "../components/business/cta";
import Counter from "../components/business/counter";

import { aboutData } from "../data/business";

export default function IndexBusiness(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <HeroSlider/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 order-1 order-md-2">
                        <div className="features-absoluteTwo">
                            <div className="position-relative">
                                <Image src='/images/01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                                <VideoModal/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 order-2 order-md-1">
                        <div className="row">
                            {aboutData.map((item,index)=>{
                                let Icon = item.icon
                                return(
                                <div className="col-lg-6 col-12 mb-4 pt-2" key={index}>
                                    <div className="card features feature-primary">
                                        <Icon className="icon h1 d-block mb-3"/>
                                        <Link href="/page-single-service" className="h5 title text-dark">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <Partners/>
            </div>
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 pb-2">
                        <div className="section-title text-center">
                            <h6 className="text-primary">Our Skills</h6>
                            <h4 className="title fw-semibold mt-2 mb-3">We are a team of talented business & investment experts</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Research</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'84%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">84%</div>
                            </div>
                        </div>

                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Sales & Trading</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'74%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">75%</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Investment</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'79%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">79%</div>
                            </div>
                        </div>

                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Finance</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'95%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">95%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <Team/>
            </div>

            <Counter/>
        </section>

        <section className="section">
           <PricingThree/>
        </section>
       <Cta/>
        <section className="section">
           <ClientTwo/>
            <div className="container mt-100 mt-60">
               <BlogTwo/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}