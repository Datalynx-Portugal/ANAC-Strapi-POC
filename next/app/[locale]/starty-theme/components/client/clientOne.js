'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import('tiny-slider-react'), {ssr:false})
import 'tiny-slider/dist/tiny-slider.css';


export default function ClientOne({bgWhite}){
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
    let clientsData = [
        {
            image:'/images/client/01.jpg',
            name:'Thomas Israel',
            desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "'
        },
        {
            image:'/images/client/02.jpg',
            name:'Carl Oliver',
            desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "'
        },
        {
            image:'/images/client/03.jpg',
            name:'Barbara McIntosh',
            desc:'" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."'
        },
        {
            image:'/images/client/04.jpg',
            name:'Jill Webb',
            desc:'" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."'
        },
        {
            image:'/images/client/05.jpg',
            name:'Dean Tolle',
            desc:'"There is now an abundance of readable dummy texts. These are usually used when a text is required. "'
        },
        {
            image:'/images/client/06.jpg',
            name:'Christa Smith',
            desc:'"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "'
        },
    ]
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="tiny-three-item">
                        <TinySlider settings={settings}>
                            {clientsData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className={`${bgWhite === true ? 'bg-white shadow' : ''} card border-0 text-center`}>
                                            <div className="card-body">
                                                <Image src={item.image} width={65} height={65} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                                <p className="text-muted mt-4">{item.desc}</p>
                                                <h6 className="text-primary">- {item.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </>
    )
}