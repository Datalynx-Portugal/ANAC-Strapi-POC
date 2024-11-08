'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import("tiny-slider-react"),{ssr:false});
import 'tiny-slider/dist/tiny-slider.css';

import { blogData } from "../../data/data";

import {FiArrowRight} from "../../assets/icons/vander"

export default function BlogSlider(){
    let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    return(
    <div className="tiny-three-item">
        <TinySlider settings={settings}>
            {blogData.map((item,index)=>{
            return(
                <div className="tiny-slide" key={index}>
                    <div className="card blog blog-primary shadow rounded overflow-hidden m-2" key={index}>
                        <div className="image position-relative overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                            <div className="blog-tag">
                                <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                            </div>
                        </div>

                        <div className="card-body content">
                            <Link href="/blog-detail-four" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                            <p className="text-muted mt-2 mb-2">{item.desc}</p>
                            <Link href="/blog-detail-four" className="link text-dark">Read More<FiArrowRight className="align-middle"/> </Link>
                        </div>
                    </div>
                </div>
            )
            })}
        </TinySlider>  
    </div>
    )
}
