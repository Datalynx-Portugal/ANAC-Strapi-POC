'use client'
import React from "react";
import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';
export default function CounterTwo(){
    let counterData = [
        {
            start:'0',
            end:'5458',
            title:'Investment Projects'
        },
        {
            start:'0',
            end:'15',
            title:'Years of Experience'
        },
        {
            start:'0',
            end:'54',
            title:'Offices in the World'
        },
        {
            start:'0',
            end:'214',
            title:'Successful Cases'
        },
    ]
    return(
        <>
        <section className="position-relative w-100 overflow-hidden bg-primary">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage='/images/cta04.png'
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="section">
                <div className="container">
                    <div className="row">
                        {counterData.map((item,index) =>{
                            return(
                                <div className="col-md-3 col-6" key={index}>
                                    <div className="counter-box position-relative text-center">
                                        <h2 className="mb-0 display-1 fw-bold title-dark text-white mt-2 opacity-3"><CountUp start={item.start} end={item.end}/></h2>
                                        <span className="counter-head fw-semibold title-dark text-white position-absolute top-50 start-50 translate-middle">{item.title}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}