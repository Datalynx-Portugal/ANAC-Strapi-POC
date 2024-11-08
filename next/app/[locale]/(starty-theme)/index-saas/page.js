import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import Partners from "../components/partners";
import PricingFour from "../components/pricing/pricingFour";
import Faq from "../components/faq";
import Footer from "../components/footer/footer";
import ScrollTop from "../components/scrollTop";
import VideoModal from "../components/saas/videoModal";

import { featureData } from "../data/saas";

import { AiOutlineCheckCircle, MdKeyboardArrowRight} from "../assets/icons/vander"

export default function IndexSass(){
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
         <section className="bg-home d-flex align-items-center saas-background" style={{height:'auto'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                        <div className="title-heading margin-top-100">
                            <h4 className="display-6 fw-bold mb-4">Keep Your Team Organized, Everywhare</h4>
                            <p className="text-muted mx-auto para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                           <VideoModal/>
                        </div>

                        <div className="home-dashboard position-relative">
                            <Image src='/images/lapy.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <Partners/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title fw-semibold mb-3">Core Features</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featureData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-5" key={index}>
                                <div className="features feature-primary border-0">
                                    <div className="fea-icon bg-soft rounded-circle shadow icon">
                                        <Icon className="icon"/>
                                    </div>

                                    <div className="content mt-4">
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
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src='/images/1.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-4">Our Featured Service <br/> that We Provide</h4>
                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>List of the tasks that require your attention</li>
                            </ul>
                            <Link href="#" className="mt-3 h6 text-primary">Find Out More <MdKeyboardArrowRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title me-lg-5">
                            <h4 className="title mb-4">Beats to boost <br/> your productivity.</h4>
                            <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>List of the tasks that require your attention</li>
                            </ul>
                            <Link href="#" className="mt-3 h6 text-primary">Find Out More <MdKeyboardArrowRight className="align-middle"/></Link>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 order-1 order-md-2">
                        <Image src='/images/1.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div> 
        </section>
        <section className="section bg-light">
            <div className="container">
                <PricingFour/>
            </div>
        </section>
        <section className="section">
            <div className="container">
               <Faq/>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}