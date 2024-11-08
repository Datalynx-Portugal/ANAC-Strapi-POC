import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FaFacebookF,FiInstagram, FaTwitter,FaLinkedinIn,FiDribbble} from '../assets/icons/vander'
import NavbarTwo from "../components/navbar/navbarTwo";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

export default function PortfolioDetailTwo(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="section bg-light">
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-8 col-md-6">
                        <div className="title-heading text-md-start text-center">
                            <h2 className="mb-0">Modern & Classic</h2>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <div className="text-md-end text-center">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Single Post</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Image src="/images/portfolio/01.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded shadow img-fluid" alt=""/>
                        <Image src="/images/portfolio/02.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded shadow img-fluid mt-4" alt=""/>
                        <Image src="/images/portfolio/03.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded shadow img-fluid mt-4" alt=""/>
                    </div>

                    <div className="col-lg-6">
                        <div className="section-title me-md-4">
                            <h4 className="title mb-4">Project Description</h4>
    
                            <p className="text-muted">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        </div>

                        <div className="section-title mt-4 pt-2">
                            <h4 className="title mb-4">Project Details</h4>
                        </div>

                        <dl className="row mb-0">
                            <dt className="col-md-4 fw-medium col-5">Client :</dt>
                            <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                            <dt className="col-md-4 fw-medium col-5">Category :</dt>
                            <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                            <dt className="col-md-4 fw-medium col-5">Date :</dt>
                            <dd className="col-md-8 col-7 text-muted">15th April 2021</dd>

                            <dt className="col-md-4 fw-medium col-5">Website :</dt>
                            <dd className="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                            <dt className="col-md-4 fw-medium col-5">Location :</dt>
                            <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                        </dl>

                        <div className="mt-5 pt-5 border-top">
                            <ul className="list-unstyled align-items-center social-icon social mb-0">
                                <li className="list-inline-item me-2 mb-0">Share :</li>
                                <li className="list-inline-item"><Link href="#" className="rounded-pill"><FaFacebookF/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded-pill mt-1"><FiInstagram/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded-pill mt-1"><FaTwitter/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded-pill mt-1"><FaLinkedinIn/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded-pill mt-1"><FiDribbble/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <FooterSeven/>
       <ScrollTop/>
        </>
    )
}