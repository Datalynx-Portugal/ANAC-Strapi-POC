import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import Team from "../components/team";
import BlogOne from "../components/blog/blogOne";
import Footer from "../components/footer/footer";
import ScrollTop from "../components/scrollTop";
import Cta from "../components/corporate/cta";

import {FiMail, FiMapPin, BiLogoFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin,AiOutlineCheckCircle, FiArrowRight} from "../assets/icons/vander"

import { aboutData, skillsData } from "../data/corporate";

export default function IndexCorporate(){
    return(
        <>
         <div className="tagline bg-white">
            <div className="container">                
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0"><Link href="#" className="text-muted fw-normal"><FiMail className="fea icon-sm text-primary"/> support@starty.com</Link></li>
                                <li className="list-inline-item mb-0 ms-3"><Link href="#" className="text-muted fw-normal"><FiMapPin className="fea icon-sm text-primary"/> 4432 Pick Street Denver, CO 80203</Link></li>
                            </ul>

                            <ul className="list-unstyled social-icon tagline-social text-muted mb-0">
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><BiLogoFacebook className="h6 mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><AiOutlineInstagram className="h6 mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><AiOutlineTwitter className="h6 mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="ps-0"><AiFillLinkedin className="h6 mb-0 icon"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavbarTwo navClass="defaultscroll sticky tagline-height" manuClass="navigation-menu nav-right" navDark={true}/>

        <section className="bg-half-170 bg-light pb-0 d-table w-100" style={{backgroundImage:"url('/images/bg/corporate01.png')", backgroundPosition:'center'}}>
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="title-heading">
                            <h4 className="display-3 mb-4 fw-bold title-dark"> Insuring Your Future <br/> From Today </h4>
                            <p className="para-desc text-muted">From banking to wealth management and securities distribution, we dedicated financial services the teams serve all major sectors.</p>
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-lg btn-pills btn-primary">Work with us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mt-5 mt-sm-0">
                        <Image src='/images/corporate01.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div> 
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Explore Solutions</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {aboutData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="features feature-primary feature-bg border-0 p-4 rounded shadow">
                                <div className="fea-icon rounded text-white title-dark">
                                    <Icon className="icon text-white"/>
                                </div>

                                <div className="content mt-3">
                                    <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted para mt-2 mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src='/images/about02.jpg' width={0} height={0} sizes="100vw" style={{width:'auto', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title fw-semibold mb-3">Crafted For Digital Agency.</h4>
                            <p className="text-muted para-desc mb-0">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                        
                            <div className="row mt-4">
                                <div className="col-lg-6 col-12">
                                    <ul className="mb-0 list-unstyled">
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Fully Responsive</li>
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Finance & Restructuring </li>
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Audit & Assurance </li>
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Trades & Stock Market </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <ul className="mb-0 list-unstyled">
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Strategy & Planning </li>
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Software & Research </li>
                                        <li className="mb-1"><span className="text-primary h4 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Support & Maintenance </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Read More <FiArrowRight className="align-middle"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 pb-2">
                        <div className="section-title text-center">
                            <h4 className="title fw-semibold mb-3">Meet Our Team Expert</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4 pt-2">
                <Team/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="section-title mb-4 pb-2 mb-md-0 pb-md-0 me-lg-5">
                            <h4 className="title fw-semibold mb-3">Our Skills & Expertise</h4>
                            <p className="text-muted para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="ms-lg-5">
                            {skillsData.map((item,index)=>{
                                return(
                                    <div className="progress-box mt-4" key={index}>
                                        <h6 className="text-muted fw-normal">{item.title}</h6>
                                        <div className="progress position-relative">
                                            <div className="progress-bar position-relative bg-primary" style={{width:`${item.progress}`}}></div>
                                            <div className="progress-value d-block text-muted h6 fw-normal">{item.progress}</div>
                                        </div>
                                    </div> 
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-cta" style={{backgroundImage:"url('/images/cta03.jpg')"}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card py-5 px-4 border-0 rounded bg-white">
                            <Cta/>
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

        <div className="container-fluid px-0">
            <div className="py-5 position-relative" style={{backgroundImage:"url('/images/cta02.jpg')"}}>
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
        <Footer top={false}/>
        <ScrollTop/>
        </>
    )
}