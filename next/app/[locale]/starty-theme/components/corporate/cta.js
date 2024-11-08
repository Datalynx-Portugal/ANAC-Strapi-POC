'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { ctaData } from "../../data/corporate";
const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function Cta(){
    let settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
      };
    return(
        <div className="tiny-single-item">
            <TinySlider settings={settings}>
                {ctaData.map((item,index)=>{
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="card client-testi text-center">
                                <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded-pill mx-auto" alt=""/>

                                <div className="card-body pb-0 content">
                                    <p className="h6 fw-normal text-muted fst-italic">{item.desc}</p>

                                    <div className="name mt-4">
                                        <small className="text-uppercase fw-semibold d-block">{item.name}</small>
                                        <small className="text-muted">{item.title}</small>
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