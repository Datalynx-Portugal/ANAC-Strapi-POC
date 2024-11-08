'use client'
import React from "react";
import Link from "next/link";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {AiOutlineUser, AiOutlineCalendar, AiOutlineClockCircle} from "../../assets/icons/vander"

export default function HeroSlider(){
    return(
        <>

        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/blog-bg01.jpg')"}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="container">
                                    <div className="row justify-content-center mt-5">
                                        <div className="col-lg-12 text-center">
                                            <div className="title-heading">
                                                <Link href="#" className="heading text-white title-dark h4">Top 10 Things to <br/> See and Do in Northern Norway</Link>
                                            
                                                <ul className="list-inline mt-4 mb-0">
                                                    <li className="list-inline-item me-3"><AiOutlineUser className="text-white h5 mb-0 me-1"/><Link href="#" className="text-white-50 h6"> Mr. Donald Ruffy</Link></li>
                                                    <li className="list-inline-item text-white-50 h6 me-3"><AiOutlineCalendar className="h5 text-white title-dark mb-0 me-1"/> 13th March 2023</li>
                                                    <li className="list-inline-item text-white-50 h6"><AiOutlineClockCircle className="h5 text-white title-dark mb-0 me-1"/> 8 min read</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/blog-bg02.jpg')"}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading">
                                            <Link href="#" className="heading text-white title-dark h4">Best Love Songs: <br/> Romantic Songs of All Time</Link>
                                        
                                            <ul className="list-inline mt-4 mb-0">
                                                <li className="list-inline-item me-3"><AiOutlineUser className="text-white h5 mb-0 me-1"/><Link href="#" className="text-white-50 h6"> Mr. Donald Ruffy</Link></li>
                                                <li className="list-inline-item text-white-50 h6 me-3"><AiOutlineCalendar className="h5 text-white title-dark mb-0 me-1"/> 5th May 2021</li>
                                                <li className="list-inline-item text-white-50 h6"><AiOutlineClockCircle className="h5 text-white title-dark mb-0 me-1"/> 8 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/blog-bg03.jpg')"}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading">
                                            <Link href="#" className="heading text-white title-dark h4">Discover the Hidden<br/> Links Between Music and Food</Link>
                                        
                                            <ul className="list-inline mt-4 mb-0">
                                                <li className="list-inline-item me-3"><AiOutlineUser className="text-white h5 mb-0 me-1"/><Link href="#" className="text-white-50 h6"> Mr. Donald Ruffy</Link></li>
                                                <li className="list-inline-item text-white-50 h6 me-3"><AiOutlineCalendar className="h5 text-white title-dark mb-0 me-1"/> 19th June 2023</li>
                                                <li className="list-inline-item text-white-50 h6"><AiOutlineClockCircle className="h5 text-white title-dark mb-0 me-1"/> 8 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </section>
        </>
    )
}