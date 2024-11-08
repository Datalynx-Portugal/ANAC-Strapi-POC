import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiArrowRight,AiOutlineCheckCircle} from "../assets/icons/vander"

import NavbarTwo from "../components/navbar/navbarTwo";
import Partners from "../components/partners";
import ClientOne from "../components/client/clientOne";
import Footer from "../components/footer/footer";
import ScrollTop from "../components/scrollTop";
import Accordion from "../components/seo/accordian";

import {serviceData} from "../data/seo"

export default function IndexSeo(){
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
         <section className="bg-home d-flex align-items-center seo-home">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                        <div className="heading-title margin-top-100">
                            <h1 className="heading fw-semibold text-white title-dark mb-3">We build Digital products <br/> for your Success</h1>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                            <div className="subcribe-form mt-4 pt-2">
                                <form>
                                    <div className="mb-3">
                                        <input type="url" id="url" className="bg-white rounded-lg border opacity-7" required placeholder="https://shreethemes.in"/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9 col-md-10">
                                <div className="home-dashboard">
                                    <Image src='/images/seo.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto',top:'0'}} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="position-relative">
            <div className="shape seo-hero overflow-hidden text-light"></div>
        </div>

        <section className="section mt-4" style={{backgroundImage:"url('/images/bg-shape.png')", backgroundRepeat:'no-repeat', backgroundPosition:'right'}}>
            <div className="container">
                <Partners/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <span className="badge text-bg-primary rounded-lg">Services</span>
                            <h4 className="title mt-2 mb-4">Core Features</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {serviceData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card p-4 rounded features features-classic feature-primary">
                                    <div className="fea-icon rounded bg-light shadow icon">
                                        <Icon className="icon mb-0 text-primary"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>

                                        <p className="text-muted mt-3">{item.desc}</p>
                                    </div>

                                    <Link href="page-single-service">
                                        <span className="text-dark">Read More <FiArrowRight className="ms-1"/></span>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src='/images/svg/coworking.svg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <span className="badge text-bg-primary rounded-lg">About Us</span>
                            <h4 className="title mt-2 mb-4">Why Our Agency ?</h4>
                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>List of the tasks that require your attention</li>
                            </ul>
                            <Link href="/page-aboutus" className="btn btn-primary">About us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="bg-overlay bg-gradient-primary"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title text-white title-dark mb-3">Get your free quote today?</h4>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                            <div className="subcribe-form mt-4 pt-2">
                                <form>
                                    <div className="mb-3">
                                        <input type="email" id="email" className="bg-white rounded-lg opacity-7" required placeholder="Type your mail id..."/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
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

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-3">Frequently Asked Questions</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 mt-4 pt-2">
                        <Image src='/images/faqs.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <Accordion/>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}