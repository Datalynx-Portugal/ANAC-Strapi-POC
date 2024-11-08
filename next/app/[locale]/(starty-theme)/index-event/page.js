import React from "react";
import Link from "next/link";
import Image from "next/image";

import Process from "../components/process";
import Team from "../components/team";
import EventTab from "../components/eventTab";
import PricingTwo from "../components/pricing/pricingTwo";
import BlogOne from "../components/blog/blogOne";
import FooterTwo from "../components/footer/footerTwo";
import NavbarTwo from "../components/navbar/navbarTwo";
import ScrollTop from "../components/scrollTop";
import CountDown from "../components/event/countDown";
import Counter from "../components/event/counter";
import Cta from "../components/event/cta";

export default function Event(){
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
         <section className="bg-half-260 bg-animation-left d-table w-100" style={{backgroundImage:"url('/images/bg/events.jpg')"}}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading position-relative" style={{zIndex:'2'}}>
                            <h4 className="heading fw-semibold text-white title-dark mb-4">Advancing <br/> Research 2021</h4>
                            <p className="text-white-50 para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <CountDown/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <Process title="Host Your Event"/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="section-title text-md-start text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Keynote Speakers</h4>
                            <p className="para-desc title-dark text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-4 d-none d-md-block">
                        <div className="text-md-end text-center">
                            <Link href="#" className="btn btn-primary">All Speakers</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
               <Team/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <Image src='/images/events/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-lg-3">
                        <div className="section-title">
                            <h4 className="title fw-semibold mb-3">Starty Event management</h4>
                            <p className="text-muted para-desc">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                        
                            <blockquote className="mx-auto blockquote h6 p-0 px-4 text-muted"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-primary mt-3">- Starty Event</small></blockquote>
                        </div>
                    </div>

                    <div className="col-lg-2 order-lg-2">
                       <Counter/>
                    </div>
                </div>
            </div>
        </section>
        <EventTab/>

        <section className="bg-half-170" style={{backgroundImage:"url('/images/bg/busi04.jpg')"}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <Cta/>
                </div>
            </div>
        </section>

        <section className="section" id="pricing">
            <div className="container">
                <PricingTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}