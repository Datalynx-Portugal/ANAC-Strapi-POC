'use client'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import ("tiny-slider-react"),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import { aboutTwo } from "../../data/services"

import {FiArrowRight} from "../../assets/icons/vander"

export default function About(){
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
                {aboutTwo.map((item,index)=>{
                    return(
                    <div className="tiny-slide" key={index}>
                        <div className="card features features-modern feature-primary m-2">
                            <div className="card-img position-relative overflow-hidden">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                                <div className="overlay rounded"></div>
                                <div className="content bg-transparent">
                                    <Link href="/page-single-service" className="text-white small mb-0 d-block title">Read More <FiArrowRight className="align-middle"/></Link>
                                </div>
                            </div>

                            <div className="px-2 pt-4">
                                <Link href="/page-single-service" className="title text-dark h5">{item.title}</Link>

                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </TinySlider>
        
        </div>
    )
}