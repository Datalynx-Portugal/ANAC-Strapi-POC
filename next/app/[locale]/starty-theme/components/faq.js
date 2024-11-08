'use client'
import React, { useState } from "react";

export default function Faq(){
    let [activeIndex, setActiveIndex] = useState(1)

    let accordionData = [
        {
            id:1,
            title:'How does it work ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:2,
            title:'Do I need a designer to use Starty ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:3,
            title:'What do I need to do to start selling ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:4,
            title:'Does CMR offer relocation assistance?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:5,
            title:'How is management perceived at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:6,
            title:'How is the work/life balance at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:7,
            title:'What is the salary like at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:8,
            title:'What is a typical working day like at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:9,
            title:'What is a typical working day like at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:10,
            title:'What are working conditions like at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
    ]
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title mb-4 pb-2 text-center">
                    <h4 className="title mb-3">Frequently Asked Questions</h4>
                    <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-10 mt-4 pt-2">
                <div className="accordion" id="buyingquestion">
                    <div className="row">
                        <div className="col-md-6">
                            {accordionData.slice(0,6).map((item, index)=>{
                                return(
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ?
                                        <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                            <div className="accordion-body text-muted bg-white collapsed">
                                                {item.desc}
                                            </div>
                                        </div>:''
                                        }
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-md-6">
                            {accordionData.slice(6,11).map((item, index)=>{
                                return(
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ?
                                        <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                            <div className="accordion-body text-muted bg-white collapsed">
                                                {item.desc}
                                            </div>
                                        </div>:''
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}