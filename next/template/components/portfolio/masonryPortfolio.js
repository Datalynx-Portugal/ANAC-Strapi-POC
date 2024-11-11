'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import { portfolioData2, portfolioImage2 } from "../../data/data";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"


import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


export default function MasonryPortfolio({columnsCountBreakPoints,rowClass}){
    let [selectedCategory, setSelectedCategory] = useState(null);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);
    let [open, setIsOpen] = useState(false);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage2.length - 1) % portfolioImage2.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage2.length);
    };

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    let currentImage = portfolioImage2[currentImageIndex - 1];

    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? portfolioData2.filter((item) => item.category === selectedCategory)
        : portfolioData2;
    return(
        <>
         <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                    <li className={`${selectedCategory === null ? "active" : ''} list-inline-item categories position-relative`} onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'branding' ? "active" : ''} list-inline-item categories position-relative`} onClick={() => matchCategory('branding')}>Branding</li>
                                    <li className={`${selectedCategory === 'designing' ? "active" : ''} list-inline-item categories position-relative`}  onClick={() => matchCategory('designing')}>Designing</li>
                                    <li className={`${selectedCategory === 'photography' ? "active" : ''} list-inline-item categories position-relative`}  onClick={() => matchCategory('photography')}>Photography</li>
                                    <li className={`${selectedCategory === 'development' ? "active" : ''} list-inline-item categories position-relative`}  onClick={() => matchCategory('development')}>Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className={rowClass}>
                        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                            <Masonry>
                            {filteredData.map((item,index)=>{
                                return(
                                <div className='spacing picture-item' data-groups='["branding"]' key={index}>
                                    <div className="card portfolio portfolio-modern portfolio-primary rounded overflow-hidden">
                                        <Link href="#" onClick={() => handleImageClick(item.id)} scroll={false} className="lightbox">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        </Link>
                                        <div className="content text-center p-3">
                                            <Link href="/portfolio-detail-three" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                            <small className="text-muted fw-normal mb-0">{item.name}</small>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>

                        {open && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={portfolioImage2[(currentImageIndex + portfolioImage2.length - 1) % portfolioImage2.length]}
                            nextSrc={portfolioImage2[(currentImageIndex + 1) % portfolioImage2.length]}

                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                        )}
                

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item">
                                <Link className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="mdi mdi-chevron-left mdi-18px"></i></span>
                                </Link>
                            </li>
                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="mdi mdi-chevron-right mdi-18px"></i></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}