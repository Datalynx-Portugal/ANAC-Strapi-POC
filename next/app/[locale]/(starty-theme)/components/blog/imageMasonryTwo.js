'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BlogImageMasonryData } from "../../data/data";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function ImageMasonryTwo({columnsCountBreakPoints}){
    return(
        <div className="row">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry>
                {BlogImageMasonryData.map((item,index)=>{
                return(
                    <div className="p-2" key={index}>
                        <div className="card blog blog-image blog-primary shadow rounded overflow-hidden">
                            <div className="card-img">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="card-overlay"></div>

                                <div className="position-absolute top-0 start-0 mt-3 ms-4">
                                    <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                </div>
                            </div>
                            <div className="content px-4">
                                <Link href="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">{item.title}</Link>

                                <div className="d-flex author align-items-center mt-2">
                                    <Image src={item.client} width={45} height={45} className="avatar avatar-md-sm rounded-pill" alt=""/>
                                    <div className="ms-2">
                                        <small className="text-white-50 user d-block">{item.name}</small>
                                        <small className="text-white-50 date">{item.date}</small>
                                    </div>
                                </div>
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
