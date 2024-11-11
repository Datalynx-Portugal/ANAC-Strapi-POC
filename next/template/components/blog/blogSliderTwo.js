'use client'
import React from "react"
import Image from "next/image";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BlogSliderTwo(){
    return(
        <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false} showThumbs={false}>
            <div>
                <Image src='/images/blog/slide01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}  className="d-block w-100" alt="..."/>
            </div>
            <div>
                <Image src='/images/blog/slide02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="d-block w-100" alt="..."/>
            </div>
            <div>
                <Image src='/images/blog/slide03.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="d-block w-100" alt="..."/>
            </div>
        </Carousel>
    )
}
