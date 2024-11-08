'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { BlogImageMasonryData } from "../../data/data";

import { FiArrowRight } from "../../assets/icons/vander"

export default function Blog(){
    return(
        <div className="row mb-3" id="grid">
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 992: 2,}}>
                <Masonry>
                    {BlogImageMasonryData.slice(0,8).map((item,index)=>{
                        return(
                            <div className="p-2 picture-item" key={index}>
                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                    <div className="image position-relative overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
        
                                        <div className="blog-tag">
                                            <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                        </div>
                                    </div>
        
                                    <div className="card-body content">
                                        <Link href={`/blog-detail-two/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                        <Link href={`/blog-detail-two/${item.id}`} className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}