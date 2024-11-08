"use client"
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

let TinySlider = dynamic(()=>import('tiny-slider-react'), {ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { projectsData,projectImage } from "../../data/data";

import {FiCamera} from "../../assets/icons/vander"

export default function Project(){
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + projectImage.length - 1) % projectImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImage.length);
    };

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    let currentImage = projectImage[currentImageIndex];
    let settings = {
        container: '.tiny-five-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    return(
        <>
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="tiny-five-item">
                        <TinySlider settings={settings}>
                            {projectsData.map((item, index) => {
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card portfolio portfolio-classic portfolio-primary m-2 rounded overflow-hidden">
                                            <div className="card-img position-relative">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                
                                                <div className="pop-icon">
                                                    <Link href="#" scroll={false} onClick={() => handleImageClick(index)} className="btn btn-pills btn-icon lightbox"><FiCamera/></Link>
                                                </div>
                                            </div>
                                            <div className="content pt-3">
                                                <Link href="/portfolio-detail-one" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                                <small className="text-muted fw-normal mb-0">{item.name}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
        {open && (
            <Lightbox
                mainSrc={currentImage}
                prevSrc={projectImage[(currentImageIndex + projectImage.length - 1) % projectImage.length]}
                nextSrc={projectImage[(currentImageIndex + 1) % projectImage.length]}

                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
            />
        )}
        </>
    )
}
