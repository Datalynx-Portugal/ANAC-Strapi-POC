"use client"
import React from "react"
import CountUp from 'react-countup';

export default function Counter(){
    let counterData = [
        {
            end:'12',
            title:'SPEAKERS'
        },
        {
            end:'18',
            title:'SPONSORS'
        },
        {
            end:'8',
            title:'WORKSHOPS'
        },
    ]
    return(
        <div className="row justify-content-center">
            {counterData.map((item, index)=>{
                return(
                    <div className="col-lg-12 col-md-4 col-6 mt-4 mt-lg-0" key={index}>
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-6 fw-semibold title-dark mt-2"><CountUp start={0} end={item.end}/><span className="h4">+</span></h2>
                            <small className="counter-head text-muted">{item.title}</small>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}