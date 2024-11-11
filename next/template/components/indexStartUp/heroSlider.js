'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroSlider(){
    return(
        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false} showThumbs={false}>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/start01.jpg')"}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <h4 className="display-3 fw-bold text-white title-dark mb-3">We Prepare Better Way <br/> For Accelerators</h4>
                                            <p className="text-white-50 mx-auto para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link href="/page-aboutus" className="btn btn-lg btn-primary">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/start02.jpg')"}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <Image src="/images/logo-icon-light.png" height={260} width={235} alt=""/>
                                            <h3 className="fw-bold text-white title-dark mb-0 mt-4">Investment & Consultant</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/start03.jpg')"}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <h4 className="display-3 fw-bold text-white title-dark mb-3">We Prepare Better Way <br/> For Accelerators</h4>
                                            <p className="text-white-50 mx-auto para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link href="/page-aboutus" className="btn btn-lg btn-primary">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </section>
    )
}