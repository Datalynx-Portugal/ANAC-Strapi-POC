'use client'
import React  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { popularCauses } from "../../data/charity";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function Causes(){
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
    <div className="row">
        <div className="col-12 mt-4">
            <div className="tiny-three-item">
                <TinySlider settings={settings}>
                    {popularCauses.map((item,index)=>{
                        return(
                        <div className="tiny-slide" key={index}>
                            <div className="blog blog-primary causes position-relative overflow-hidden p-2">
                                <div>
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                                </div>

                                <div className="causes-content bg-white p-4 shadow rounded">
                                    <Link href="/blog-detail-three" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-4">{item.desc}</p>

                                    <div className="progress-box pt-4">
                                        <div className="progress rounded-md" style={{height:'6px'}}>
                                            <div className="progress-bar position-relative bg-primary rounded-md" style={{width:item.progress}}>
                                                <div className="progress-value d-block text-muted h6">{item.rais}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <span className="title text-muted text-start mb-0">{item.start}</span>
                                            <span className="title text-muted text-end mb-0">{item.goal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </TinySlider>    
            </div>
        </div>
    </div>
    )
}