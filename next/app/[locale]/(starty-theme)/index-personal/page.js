import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import ClientOne from "../components/client/clientOne";
import BlogOne from "../components/blog/blogOne";
import FooterThree from "../components/footer/footerThree";
import TextAnimation from "../components/personal/textAnimation";
import Portfolio from "../components/personal/portfolio";


import { aboutData, servicesData } from "../data/personal";

import { FiArrowDown } from "../assets/icons/vander"
import Cta from "../components/personal/cta";

export default function IndexPersonal(){
   
    return(
    <>
    <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>

    <section className="bg-half-260" style={{backgroundImage:"url('/images/bg/personal.jpg')"}}>
        <div className="bg-overlay bg-gradient-white-overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title-heading">
                        <h4 className="mb-0">Hello IM</h4>
                        <TextAnimation/>
                        <p className="para-desc title-dark text-muted mb-0">Obviously Im a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    
                        <div className="mt-4">
                            <Link href="#" className="btn btn-primary">Hire Me</Link>
                        </div>
                    </div>
                </div>
                <div className="position-absolute top-100 start-50 translate-middle text-center" style={{zIndex:'1'}}>
                    <Link href="#" className="btn btn-icon btn-pills bg-white title-dark shadow scroll-down"><FiArrowDown className="icons"/></Link>
                </div>
            </div>
        </div>
    </section>

    <div className="position-relative">
        <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section pb-0" id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="position-relative">
                        <Image src="/images/about.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow-md" alt=""/>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="ms-lg-5">
                        <div className="section-title">
                            <span className="badge rounded-pill bg-soft-primary">About Me</span>
                            <h4 className="title fw-bold mt-2 mb-4">Better Design <br/> Better Experience</h4>
                            <p className="para-desc text-muted">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                        {aboutData.map((item, index) => {
                            return(
                            <div className="progress-box mt-4" key={index}>
                                <h6 className="title text-muted">{item.title}</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}>
                                        <div className="progress-value d-block text-muted h6">{item.progress}</div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mt-3 mb-4">What i offer ?</h4>
                        <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {servicesData.map((item, index)=>{
                    let Icon = item.icon 
                    return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card border-0 p-4 text-center rounded features features-classic feature-primary">
                                <Icon className="icon2 w-100 mb-3" style={{height:'32px'}} />

                                <div className="content">
                                    <Link href="/page-single-service" className="title text-dark h5">{item.title}</Link>

                                    <p className="text-muted mb-0 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    <section className="section" id="portfolio">
       <Portfolio/>
        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4">Clients Review</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                    </div>
                </div>
            </div>

            <ClientOne/>
        </div>
    </section>
    <Cta/>
    <section className="section">
        <div className="container">
            <BlogOne/>
        </div>
    </section>
    <FooterThree/>
    </>
    )
}