'use client'
import React, { useState } from "react";
import {accordionData} from "../../data/seo"

export default function Accordion(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <div className="col-md-6 mt-4 pt-2">
            <div className="accordion" id="buyingquestion">
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
        </div>
    )
}