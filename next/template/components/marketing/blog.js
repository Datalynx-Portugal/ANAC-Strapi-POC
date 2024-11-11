'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

import { blogData } from "../../data/data"

const TinySlider = dynamic(()=>import("tiny-slider-react"),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';


export default function Blogs(){
    let settings = {
        container: '.tiny-four-item',
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
                items: 4
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
        <div className="tiny-four-item">
            <TinySlider settings={settings}>
            {blogData.map((item,index)=>{
                return(
                    <div className="tiny-slide" key={index}>
                        <div className="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
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
                                    <Image src={item.client} width={36} height={36} className="avatar avatar-md-sm rounded-pill" alt=""/>
                                    <div className="ms-2">
                                        <small className="text-white-50 user d-block">{item.name}</small>
                                        <small className="text-white-50 date"> {item.date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </TinySlider>
        </div>
    )
}