'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import('tiny-slider-react'), {ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function Team(){
    let settings = {
        container: '.tiny-six-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 6
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 2
            },

            375: {
                items: 1
            },
        },
      };
    let teamData = [
        {
            image:'/images/client/09.jpg',
            name:'Dennis Rosario',
            title:'C.E.O'
        },
        {
            image:'/images/client/10.jpg',
            name:'Billy Gregory',
            title:'Manager'
        },
        {
            image:'/images/client/11.jpg',
            name:'Connie Dunton',
            title:'Manager'
        },
        {
            image:'/images/client/12.jpg',
            name:'Alberta Petty',
            title:'Manager'
        },
        {
            image:'/images/client/13.jpg',
            name:'Shirley Garcia',
            title:'Manager'
        },
        {
            image:'/images/client/14.jpg',
            name:'Michael Wheeler',
            title:'Manager'
        },
        {
            image:'/images/client/15.jpg',
            name:'Billy Gregory',
            title:'Manager'
        },
    ]
    return(
        <>
        <div className="row">
            <div className="col-12 px-0"></div>
            <div className="tiny-six-item">
                <TinySlider settings={settings}>
                    {teamData.map((item,index)=>{
                        return(
                            <div className="tiny-slide" key={index}>
                                <div className="card team team-primary">
                                    <div className="card-img">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="card-overlay"></div>
                                    </div>
                                    <div className="team-content">
                                        <Link href="#" className="h6 name text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                        <small className="text-white title-dark">{item.title}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TinySlider>
            </div>
        </div>
        </>
    )
}