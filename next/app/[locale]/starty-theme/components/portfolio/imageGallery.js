'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image";

import {LuSearch} from '../../assets/icons/vander'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

export default function ImageGallery(){

    let images = ['/images/portfolio/01.jpg','/images/portfolio/02.jpg','/images/portfolio/03.jpg', '/images/portfolio/04.jpg', '/images/portfolio/05.jpg' ,'/images/portfolio/06.jpg', '/images/portfolio/07.jpg', '/images/portfolio/08.jpg',]
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    
    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    let currentImage = images[currentImageIndex];

    return(
        <div className="container">
            <div id="grid" className="row">
                {images.map((item,index)=>{
                    return(
                    <div className="col-md-3 col-12 spacing picture-item" key={index}>
                        <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                            <div className="card-img position-relative">
                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="card-overlay"></div>

                                <div className="pop-icon">
                                    <Link href="#" onClick={() => handleImageClick(index)}  className="btn btn-pills btn-icon lightbox"><LuSearch/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
                {open && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                        nextSrc={images[(currentImageIndex + 1) % images.length]}

                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
        </div>
    )
}