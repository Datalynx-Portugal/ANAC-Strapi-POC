import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiArrowRight, AiOutlineCheckCircle} from "../assets/icons/vander"
import NavbarTwo from "../components/navbar/navbarTwo";
import Partners from "../components/partners";
import ClientOne from "../components/client/clientOne";
import Footer from "../components/footer/footer";
import ScrollTop from "../components/scrollTop";

import { serviceData } from "../data/freelancer";
import Tab from "../components/freelancer/tab";
import Work from "../components/freelancer/work";

export default function IndexFreelancer(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>

        <section className="bg-half-170 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="title-heading">
                            <h4 className="display-4 fw-semibold mb-4">If you want to <br/> <span className="text-primary">hire pro</span> right now!</h4>
                            <p className="para-desc title-dark text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        
                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Create Account</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <Image src='/images/svg/freelancer.svg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 border-bottom border-top">
            <div className="container">
               <Partners/>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Choose from a pool of web development <br/> services we have for you</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {serviceData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className={`${item.iconClass} card features feature-primary features-classic p-4 rounded-md shadow border-0`}>
                                <div className="fea-icon bg-soft rounded-md">
                                    <Icon className="icon"/>
                                </div>

                                <div className="content mt-4">
                                    <h5 className="mb-3">{item.title1}<br/> {item.title2}</h5>
                                    <Link href="/page-single-service" className="title text-dark">Read More <FiArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary">Quickstart</h6>
                            <h4 className="title mb-3">Awesome isnt it? Lets dive in!</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-mg-10 mt-4 pt-2">
                        <Tab/>

                        <ul className="list-unstyled text-muted mb-0 mt-3">
                            <li className="list-inline-item me-lg-5 me-4"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Organize your data</li>
                            <li className="list-inline-item me-lg-5 me-4"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Work with any team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <Work/>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="text-primary">Testimonial</span>
                            <h4 className="title mb-3 mt-2">Dont believe us, <br/> Check what our partners say</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
                <ClientOne bgWhite={true}/>
            </div>
        </section>

        <section className="section" style={{backgroundImage:"url('/images/cta05.png')", backgroundPosition:'left'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="section-title">
                            <h4 className="title mb-3">Need a hand with your project? <br/> Let’s build an ideal Webdesign</h4>
                            <p className="para-desc title-dark text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 text-md-end">
                        <Link href="/page-contact" className="btn btn-primary">Contact us <FiArrowRight className="align-middle"/></Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}