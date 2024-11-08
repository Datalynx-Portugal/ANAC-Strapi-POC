'use client'
import React from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import("tiny-slider-react"),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function ImageSlider(){
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
    let slideImage = ['/images/portfolio/single01.jpg', '/images/portfolio/single02.jpg', '/images/portfolio/single03.jpg']
    return(
        <div className="tiny-single-item">
            <TinySlider settings={settings}>
                {slideImage.map((item,index)=>{
                    return(
                    <div className="tiny-slide" key={index}>
                        <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid " alt=""/>
                    </div>
                    )
                })}
            </TinySlider> 
        </div>
    )
}