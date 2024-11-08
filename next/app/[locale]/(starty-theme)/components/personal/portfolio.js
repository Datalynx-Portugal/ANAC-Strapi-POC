'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import { projectsData, projectImage } from "../../data/data";
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

export default function Portfolio(){
    let [selectedCategory, setSelectedCategory] = useState(null);
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

    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? projectsData.filter((item) => item.category === selectedCategory)
        : projectsData;
    
    
    return(
        <>
         <div className="container-fluid" >
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                <li className={`${selectedCategory === null ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === 'branding' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('branding')}>Branding</li>
                                <li className={`${selectedCategory === 'designing' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`}  onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={`${selectedCategory === 'photography' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`}  onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={`${selectedCategory === 'development' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`}  onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="grid" className="row row-cols-1 row-cols-md-2 row-cols-lg-5 mt-4 pt-2">
                {filteredData.map((item,index)=>{
                    return(
                    <div className="col spacing picture-item" data-groups='["branding"]' key={index}>
                        <div className="card portfolio portfolio-creative portfolio-primary shadow rounded overflow-hidden">
                            <div className="position-relative">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="overlay"></div>

                                <div className="lightbox-icon">
                                    <Link href="#" scroll={false} onClick={() => handleImageClick(item.id)} className="lightbox text-dark"><i className="mdi mdi-plus"></i></Link>
                                </div>
                            </div>
                            <div className="content p-3">
                                <Link href="/portfolio-detail-one" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                <small className="text-muted fw-normal mb-0">{item.name}</small>
                            </div>
                        </div>
                    </div>
                    )
                })}
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