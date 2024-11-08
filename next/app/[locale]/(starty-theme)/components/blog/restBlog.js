'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Link as Link1 }  from "react-scroll"

import {FiArrowRight, AiOutlineInstagram} from "../../assets/icons/vander"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

let settings = {
    container: '.tiny-twelve-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 10
        },

        992: {
            items: 8
        },

        767: {
            items: 6
        },

        320: {
            items: 2
        },
    },
  };

export default function RestBlog(){
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let sliderImage = ['/images/portfolio/rest/01.jpg', '/images/portfolio/rest/02.jpg', '/images/portfolio/rest/03.jpg', '/images/portfolio/rest/04.jpg', '/images/portfolio/rest/05.jpg', '/images/portfolio/rest/06.jpg', '/images/portfolio/rest/07.jpg', '/images/portfolio/rest/08.jpg', '/images/portfolio/rest/09.jpg', '/images/portfolio/rest/10.jpg', '/images/portfolio/rest/11.jpg', '/images/portfolio/rest/12.jpg', '/images/portfolio/rest/09.jpg', '/images/portfolio/rest/10.jpg', '/images/portfolio/rest/11.jpg', '/images/portfolio/rest/12.jpg']

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + sliderImage.length - 1) % sliderImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImage.length);
    };

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    let currentImage = sliderImage[currentImageIndex];

    let blogData = [
        {
            image:'/images/blog/13.jpg',
            tag:'Restaurant',
            title:'The Food Heaven',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
        {
            image:'/images/blog/14.jpg',
            tag:'Drinks',
            title:'The Finest Drinks',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
        {
            image:'/images/blog/15.jpg',
            tag:'Cafe',
            title:'The Best Dishes',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
    ]
  
    return(
        <section className="section pb-0">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title mb-4 pb-2 text-center">
                        <h6 className="text-primary">Blog & News</h6>
                        <h4 className="title text-uppercase fw-bold mb-4">Use the tips <br/> and recipes of our chefs</h4>
                        <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                {blogData.map((item,index)=>{
                    return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card blog blog-primary shadow rounded overflow-hidden">
                                <div className="image position-relative overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                                    <div className="blog-tag">
                                        <Link href="#" className="badge text-bg-light">Restaurant</Link>
                                    </div>
                                </div>

                                <div className="card-body content">
                                    <Link href="/blog-detail-four" className="h5 fw-semibold title text-dark d-block mb-0">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                    <Link href="/blog-detail-four" className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="container-fluid mt-100 mt-60">
            <div className="row">
                <div className="col-12 px-0">
                    <div className="tiny-twelve-item">
                        <TinySlider settings={settings}>
                            {sliderImage.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card portfolio portfolio-classic portfolio-primary client-testi rounded-0 overflow-hidden">
                                            <div className="card-img position-relative">
                                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>

                                                <div className="pop-icon">
                                                    <Link href="#" className="btn btn-pills btn-icon lightbox" onClick={() => handleImageClick(index)}><AiOutlineInstagram/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider> 
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle d-md-block d-none">
                        <Link1 to="book-table" smooth={false} duration={500} className="btn btn-font-sm btn-pills-0 btn-primary text-uppercase">Follow Now</Link1>
                    </div>
                </div>
            </div>
        </div>
        {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={sliderImage[(currentImageIndex + sliderImage.length - 1) % sliderImage.length]}
                    nextSrc={sliderImage[(currentImageIndex + 1) % sliderImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
    </section>
    )
}