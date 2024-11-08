"use client"
import React,{useState} from "react";
import Link from 'next/link';
import Image from 'next/image'

import { innerPagesData } from "../data";

export default function InnerPages(){
    let [selectedCategory, setSelectedCategory] = useState(null);
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };
  
    let filteredData = selectedCategory
        ? innerPagesData.filter((item) => item.category === selectedCategory)
        : innerPagesData;
    return(
        <div className="section bg-light pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="px-lg-5 mx-lg-5">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <div className="filters-group-wrap text-center">
                                        <div className="filters-group">
                                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                                <li className={`${selectedCategory === null ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory(null)}>All</li>
                                                <li className={`${selectedCategory === 'about' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('about')} >About</li>
                                                <li className={`${selectedCategory === 'service' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('service')} >Services</li>
                                                <li className={`${selectedCategory === 'portfolio' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('portfolio')}>Portfolio</li>
                                                <li className={`${selectedCategory === 'shop' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('shop')}>Shop</li>
                                                <li className={`${selectedCategory === 'blog' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('blog')}>Blogs</li>
                                                <li className={`${selectedCategory === 'contact' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('contact')}>Contact</li>
                                                <li className={`${selectedCategory === 'special' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('special')}>Special</li>
                                                <li className={`${selectedCategory === 'about' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('p&f')}>Pricing & FAQs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="grid" className="row">
                                {filteredData.map((item,index) =>{
                                    return(
                                        <div className="col-lg-3 col-md-4 col-12 picture-item mt-100 mt-60" data-groups='["about"]' key={index}>
                                            <div className="card portfolio portfolio-modern portfolio-primary px-md-2">
                                                <Link href={item.link} target="_blank">
                                                    <Image src={item.image}  width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow-md" alt=""/>
                                                </Link>
                                                <div className="text-center pt-4">
                                                    <Link href={item.link} target="_blank" className="text-dark fs-6 fw-medium mb-0 d-block title text-uppercase">{item.title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
