'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { LuSearch } from "../../assets/icons/vander"

export default function ImageGallery(){
    let portfolioImage = ['/images/portfolio/01.jpg', '/images/portfolio/02.jpg', '/images/portfolio/03.jpg', '/images/portfolio/04.jpg', '/images/portfolio/05.jpg', '/images/portfolio/06.jpg']

    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    let currentImage = portfolioImage[currentImageIndex];
    return(
        <>
        <div id="grid" className="row mt-4">
            {portfolioImage.map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-4 col-12 spacing picture-item" key={index}>
                        <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                            <div className="card-img position-relative">
                                <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="card-overlay"></div>

                                <div className="pop-icon">
                                    <Link href="#" scroll={false} onClick={() => handleImageClick(index)} className="btn btn-pills btn-icon lightbox"><LuSearch/></Link>
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
            prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
            nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
        />
        )}
        </>
    )
}
