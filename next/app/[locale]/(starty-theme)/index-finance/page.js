import React from "react";
import Link from "next/link";

import NavbarTwo from "../components/navbar/navbarTwo";
import Process from "../components/process";
import TeamTwo from "../components/teamTwo";
import BlogOne from "../components/blog/blogOne";
import FooterFour from "../components/footer/footerFour";
import ScrollTop from "../components/scrollTop";
import VideoModal from "../components/finance/videoModal";

import { ctaData, servicesData } from "../data/finance";

import {FiMail, FiMapPin, BiLogoFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, FiVideo} from "../assets/icons/vander"
import Tab from "../components/finance/tab";
import Cta from "../components/finance/cta";

export default function IndexFinance(){
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

        <NavbarTwo navClass="defaultscroll sticky tagline-height" manuClass="navigation-menu nav-right nav-light"/>
        <div className="bg-home zoom-image d-flex align-items-center">
            <div className="bg-overlay image-wrap" style={{backgroundImage:"url('/images/bg/finance01.jpg')"}}></div>
            <div className="bg-overlay bg-linear-gradient"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-2 fw-bold text-white title-dark">Starty Finance & <br/> Consulting</h4>
                            <p className="para-desc mx-auto text-white-50">From banking to wealth management and securities distribution, we dedicated financial services the teams serve all major sectors.</p>
                            <VideoModal/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="row">
                    {servicesData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0" key={index}>
                            <div className="features feature-primary border-0 d-flex">
                                <div className="fea-icon rounded-circle bg-light shadow icon">
                                    <Icon className="icon"/>
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

            <div className="container mt-100 mt-60">
                <Tab/>
            </div>
        </section>

       <Cta/>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title  text-center">
                            <h4 className="title mb-3">Steps to Start Partnership</h4>
                        </div>
                    </div>
                </div>

                <Process icon={false}/>

                <div className="row justify-content-center mt-4 pt-2">
                    <div className="col-lg-7 mt-4 pt-2">
                        <div className="p-md-5 p-4 bg-light rounded shadow">
                            <div className="subcribe-form text-center">
                                <form>
                                    <input name="email" id="email3" type="email" className="rounded shadow" placeholder="Your email :" required=""/>
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
               <TeamTwo/>
            </div>
        </section>

        <section className="bg-cta" style={{backgroundImage:"url('/images/cta03.jpg')"}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-5 col-md-6">
                        <div className="card section-title px-4 py-5 shadow rounded bg-white border-0 ms-lg-5">
                            <h6 className="text-primary mb-0">SERVICE PROVIDER</h6>
                            <h4 className="mt-2 mb-3">Missioned To Maximize The Business Process</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            {ctaData.map((item,index)=>{
                                return(
                                <div className="progress-box mt-4" key={index}>
                                    <h6 className="text-muted fw-normal">{item.title}</h6>
                                    <div className="progress position-relative">
                                        <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}></div>
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
        <section className="section">
            <div className="container">
                <BlogOne/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}