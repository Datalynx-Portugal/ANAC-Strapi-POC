'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { workData, workImage } from "../../data/freelancer";
import {FiArrowRight} from "../../assets/icons/vander"

export default function Work(){
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + workImage.length - 1) % workImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % workImage.length);
    };

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    let currentImage = workImage[currentImageIndex];
    return(
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div id="grid" className="row">
                            <div className="col-md-6 col-12 picture-item">
                                <div className="section-title text-center text-md-start mt-md-5 mb-4 pb-2">
                                    <h6 className="text-primary">Our Work</h6>
                                    <h4 className="title mb-3">Inspire design for <br/> the Digital Age</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                </div>
                            </div>
                            {workData.map((item,index)=>{
                                return(
                                <div className="col-md-6 col-12 mt-4 pt-2 picture-item" key={index}>
                                    <div className="card portfolio portfolio-modern portfolio-primary rounded overflow-hidden">
                                        <Link href="#" onClick={() => handleImageClick(index)} className="lightbox">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        </Link>
                                        <div className="content text-center p-3">
                                            <Link href="/portfolio-detail-three" className="text-dark h6 mb-0 d-block title">{item.title1}</Link>
                                            <small className="text-muted fw-normal mb-0">{item.title2}</small>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
        
                            <div className="col-md-6 col-12 mt-4 pt-2 picture-item">
                                <div className="section-title text-center text-md-start">
                                    <h4 className="mb-3">Check out more creative designs</h4>
                                    <p className="para-desc mx-auto text-muted mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                
                                    <Link href="#" className="btn btn-primary">Explore More <FiArrowRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={workImage[(currentImageIndex + workImage.length - 1) % workImage.length]}
                    nextSrc={workImage[(currentImageIndex + 1) % workImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </section>
    )
}