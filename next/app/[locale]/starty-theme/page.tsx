import React from "react";
import Link from 'next/link';
import Image from 'next/image'

import Navbar from "./components/navbar/navbar";
import FooterSmall from "./components/footer/footerSmall";
import ScrollTop from "./components/scrollTop";
import TextAnimationOne from "./components/textAnimation/textAnimationOne";
import Demo from "./components/demo";
import InnerPages from "./components/innerPages";

import { templateData, featureData} from './data';

import {AiOutlineFile} from "./assets/icons/vander"

export default function Home() {
  return (
   <>
   <Navbar/>
    <section className="bg-half-170 pb-0" id="home" style={{backgroundImage:"url('/images/bg/live.png')"}}>
      <div className="container-fluid">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="title-heading">
                      <Image src='/images/logo-icon.png' width={72} height={80} alt=""/>
                      <TextAnimationOne/>
                      <p className="text-muted mx-auto para-desc pb-md-5 mb-5">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                  
                      <Image src='/images/demos/live/home.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="" className="img-fluid"/>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section pb-0" id="demos">
        <div className="position-relative">
           <Demo/>
        </div>

        <div className="container-fluid mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <div className="px-lg-5 mx-lg-5">
                        <div className="row justify-content-center mb-0">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h4 className="title mb-0">Template Demos</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            {templateData.map((item, index) =>{
                                return(
                                    <div className="col-lg-4 col-md-6 col-12 picture-item mt-100 mt-60" key={index}>
                                        <div className="card portfolio portfolio-modern portfolio-primary px-lg-4 px-md-2">
                                            <Link href={item.link} target="_blank">
                                                <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow-md" alt=""/>
                                            </Link>
                                            <div className="text-center pt-4">
                                                <Link href={item.link} target="_blank" className="text-dark fs-5 fw-medium mb-0 d-block title text-uppercase">{item.title}</Link>
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
    </section>

    <section className="section" id="service">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h4 className="title mb-0">Template Features</h4>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {featureData.map((item, index) => {
                    let Icon = item.icon
                    return(
                        <div className="col mt-4 pt-2" key={index}>
                            <div className="card features feature-primary features-classic p-4 text-center rounded-md shadow border-0">
                                <div className="fea-icon bg-soft rounded-md mx-auto">
                                    <Icon className="icon"/>
                                </div>

                                <div className="content mt-4">
                                    <h6 className="mb-0">{item.title}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>

    <section id="inner">
        <div className="section pt-0 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative" style={{zIndex:'1'}}>
                            <div className="position-relative">
                                <Image src='/images/demos/live/lapy.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            </div>
                            <div className="content mt-4 pt-2">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="section-title my-4 py-2 text-center">
                                            <h4 className="title mb-4">Inner Pages</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-light"></div>
            </div>
        </div>
        <InnerPages/>
    </section>

    <section className="section" id="contact">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-5 col-12">
                    <Image src='/images/demos/live/cell-phone.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-lg-5">
                        <h4 className="gradient-text mb-4">Fully Responsive</h4>
                        <h5 className="title mb-3">You can use <u>Starty</u> in all type of devices whether it is a tablet, mobile or desktop the size does not matter..</h5>
                        <h5 className="text-muted para-desc fw-normal">Starty is fully responsive with all devices and fully managed by <b>React & Bootstrap</b> latest version.</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterSmall/>
    <ScrollTop/>
    <div className="position-fixed" style={{bottom:'20px', left:'20px', zIndex:'1'}}>
        <Link href="https://forms.gle/QkTueCikDGqJnbky9" className="d-flex" target="_blank">
            <span className="btn btn-pills btn-icon btn-lg btn-primary"><AiOutlineFile  className="fea icon-sm icons align-middle"/></span>
            <span className="shadow-md px-2 py-1 m-auto ms-2 rounded bg-white text-dark">Customization</span>
        </Link>
    </div>
   </>
  )
}
