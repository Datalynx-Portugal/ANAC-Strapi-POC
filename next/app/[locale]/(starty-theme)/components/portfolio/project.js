'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { LuSearch } from "../../assets/icons/vander"

import { projectsData, projectImage } from "../../data/data";

export default function Projects(){
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
    
    let currentImage = projectImage[currentImageIndex - 1];
    return(
        <>
        <div className="row mt-4">
            {projectsData.slice(0,6).map((item, index)=>{
                return(
                    <div className="col-md-6 col-12 spacing picture-item" key={index}>
                        <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                            <div className="card-img position-relative">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="card-overlay"></div>

                                <div className="pop-icon">
                                    <Link href="#" scroll={false} onClick={() => handleImageClick(item.id)} className="btn btn-pills btn-icon lightbox"><LuSearch/></Link>
                                </div>
                            </div>
                            <div className="content text-center p-3">
                                <Link href="/portfolio-detail-two" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                <small className="text-muted fw-normal mb-0">{item.name}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
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