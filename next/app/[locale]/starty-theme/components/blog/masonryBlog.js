'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"

import { blogMasonry } from "../../data/data";

import {FiArrowRight} from "../../assets/icons/vander"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function MasonryBlog(){
    return(
        <div className="col-lg-8 col-md-6">
            <div className="row mb-4">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 992: 2}}>
                <Masonry>
                    {blogMasonry.slice(0,8).map((item,index)=>{
                        return(
                            <div className="p-2" key={index}>
                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                    <div className="image position-relative overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
        
                                        <div className="blog-tag">
                                            <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                        </div>
                                    </div>
        
                                    <div className="card-body content">
                                        <Link href={`/blog-detail-three/${item.id}`} className="h5 title text-dark d-block mb-0">The Right Hand of Business IT World</Link>
                                        <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                                        <Link href={`/blog-detail-three/${item.id}`} className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
                
            </div>

            <div className="row">
                <div className="col-12">
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
    )
}