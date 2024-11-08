'use client'
import Link from "next/link"
import React, { useState } from "react";
import { accordionData } from "../data/seo";

export default function FaqTwo(){
    let [activeTab, setActiveTab] = useState(0);
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <>
        <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="card section-title bg-white p-4 shadow rounded border-0">
                            <ul className="nav nav-pills nav-justified flex-column bg-transparent mb-0">
                                <li className="nav-item">
                                    <Link className={`${activeTab === 0 ? 'active' : ''} nav-link rounded shadow `} href="#" onClick={()=>setActiveTab(0)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Buying Questions</h6>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item mt-3">
                                    <Link className={`${activeTab === 1 ? 'active' : ''} nav-link rounded shadow `} href="#" onClick={()=>setActiveTab(1)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">General Questions</h6>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item mt-3">
                                    <Link className={`${activeTab === 2 ? 'active' : ''} nav-link rounded shadow `} href="#" onClick={()=>setActiveTab(2)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Payments Questions</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className="nav-item mt-3">
                                    <Link className={`${activeTab === 3 ? 'active' : ''} nav-link rounded shadow `} href="#" onClick={()=>setActiveTab(3)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Support Questions</h6>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="tab-content" id="pills-tabContent">
                            {activeTab === 0 ? 
                                <div className="tab-pane fade show active">
                                    <div className="section-title" id="tech">
                                        <h4>Buying Product</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="buyingquestion">
                                        {accordionData.slice(0,4).map((item, index)=>{
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
                                </div>  : ''  
                            }
                           
                            {activeTab === 1 ? 
                                <div className="tab-pane fade show active">
                                    <div className="section-title" id="general">
                                        <h4>General Questions</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="generalquestion">
                                        {accordionData.map((item, index)=>{
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
                                </div> : ''
                            }

                            {activeTab === 2 ? 
                                <div className="tab-pane fade show active" >
                                    <div className="section-title" id="payment">
                                        <h4>Payments Questions</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="paymentquestion">
                                        {accordionData.map((item, index)=>{
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
                                </div> :''
                            }
                            {activeTab === 3 ? 
                                <div className="tab-pane fade show active" >
                                    <div className="section-title" id="support">
                                        <h4>Support Questions</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="supportquestion">
                                        {accordionData.map((item, index)=>{
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
                                </div> : ''
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
