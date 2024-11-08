'use client'
import React,{useState} from "react";
import Link from "next/link";

export default function Tab(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <div className="bg-dark bg-white-dark p-4 rounded shadow">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-soft-light" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <Link className={`${activeIndex === 1 ? 'active' : ' '} nav-link nav-link-alt rounded`} onClick={() => setActiveIndex(1)} scroll={false} href="#">
                                <div className="text-center">
                                    <h6 className="title fw-normal mb-0 text-light title-dark">npm</h6>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`${activeIndex === 2 ? 'active' : ' '} nav-link nav-link-alt rounded`} scroll={false} href="#" onClick={() => setActiveIndex(2)}>
                                <div className="text-center">
                                    <h6 className="title fw-normal mb-0 text-light title-dark">nuget</h6>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`${activeIndex === 3 ? 'active' : ' '} nav-link nav-link-alt rounded`} scroll={false} href="#" onClick={() => setActiveIndex(3)}>
                                <div className="text-center">
                                    <h6 className="title fw-normal mb-0 text-light title-dark">spm</h6>
                                </div>
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`${activeIndex === 4 ? 'active' : ' '} nav-link nav-link-alt rounded`} scroll={false} href="#" onClick={() => setActiveIndex(4)}>
                                <div className="text-center">
                                    <h6 className="title fw-normal mb-0 text-light title-dark">github</h6>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="tab-content">
                        <div className={`${activeIndex === 1 ? 'active show' : ' '} tab-pane fade`}>
                            <p className="text-muted mb-0"><span className="text-success">$</span> npm install <span className="text-success">-g</span> claps.js</p>
                        </div>
                        
                        <div className={`${activeIndex === 2 ? 'active show' : ' '} tab-pane fade`}>
                            <p className="text-muted mb-0">coming soon ...</p>                       
                        </div>

                        <div className={`${activeIndex === 3 ? 'active show' : ' '} tab-pane fade`}>
                            <p className="text-muted mb-0">coming soon ...</p>                       
                        </div>

                        <div className={`${activeIndex === 4 ? 'active show' : ' '} tab-pane fade`}>
                            <p className="text-muted mb-0">coming soon ...</p>                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}