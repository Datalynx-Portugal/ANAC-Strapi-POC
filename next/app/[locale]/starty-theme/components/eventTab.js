'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Link as Link1} from "react-scroll"


import {FiClock, AiOutlineUser} from "../assets/icons/vander"

export default function EventTab(){
    let [activeIndex, setActiveIndex] = useState(1)

    let eventData = [
        {
            image:'/images/events/1.jpg',
            time:'10:00AM - 12:00PM',
            title:'Digital Conference Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Calvin'
        },
        {
            image:'/images/events/2.jpg',
            time:'12:30PM - 01:00PM',
            title:'Conference On User Interface',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Cristina'
        },
        {
            image:'/images/events/3.jpg',
            time:'02:00PM - 03:30PM',
            title:'Business World Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Murfhy'
        },
        {
            image:'/images/events/4.jpg',
            time:'04:00PM - 05:30PM',
            title:'Business Conference for professional',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Ganalia'
        },
        {
            image:'/images/events/5.jpg',
            time:'10:00AM - 12:00PM',
            title:'Digital Conference Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Calvin'
        },
        {
            image:'/images/events/6.jpg',
            time:'12:30PM - 01:00PM',
            title:'Conference On User Interface',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Cristina'
        },
        {
            image:'/images/events/7.jpg',
            time:'02:00PM - 03:30PM',
            title:'Business World Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Murfhy'
        },
        {
            image:'/images/events/8.jpg',
            time:'04:00PM - 05:30PM',
            title:'Business Conference for professional',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Ganalia'
        },
        {
            image:'/images/events/9.jpg',
            time:'10:00AM - 12:00PM',
            title:'Digital Conference Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Calvin'
        },
        {
            image:'/images/events/10.jpg',
            time:'12:30PM - 01:00PM',
            title:'Conference On User Interface',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Cristina'
        },
        {
            image:'/images/events/11.jpg',
            time:'02:00PM - 03:30PM',
            title:'Business World Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Murfhy'
        },
        {
            image:'/images/events/12.jpg',
            time:'04:00PM - 05:30PM',
            title:'Business Conference for professional',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Ganalia'
        },
        {
            image:'/images/events/5.jpg',
            time:'10:00AM - 12:00PM',
            title:'Digital Conference Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Calvin'
        },
        {
            image:'/images/events/8.jpg',
            time:'12:30PM - 01:00PM',
            title:'Conference On User Interface',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Cristina'
        },
        {
            image:'/images/events/10.jpg',
            time:'02:00PM - 03:30PM',
            title:'Business World Event Intro',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Murfhy'
        },
        {
            image:'/images/events/11.jpg',
            time:'04:00PM - 05:30PM',
            title:'Business Conference for professional',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
            name:'by Ganalia'
        },
        
    ]
    return(
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Event Schedules</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-12 mt-4 pt-2">
                        <ul className="nav nav-pills nav-justified flex-column flex-sm-row bg-transparent mb-0">
                            <li className="nav-item">
                                <Link className={activeIndex === 1 ? "nav-link rounded active" : "nav-link rounded"} id="pills-first-tab" scroll={false} href="#" onClick={()=>setActiveIndex(1)}>
                                    <div className="text-center p-2">
                                        <h6 className="mb-0 text-muted tab-para">1st Day</h6>
                                        <p className="mb-0 fs-6 fw-semibold">Tuesday</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className={activeIndex === 2 ? "nav-link rounded active" : "nav-link rounded"} id="pills-second-tab" scroll={false} href="#" onClick={()=>setActiveIndex(2)}>
                                    <div className="text-center p-2">
                                        <h6 className="mb-0 text-muted tab-para">2nd Day</h6>
                                        <p className="mb-0 fs-6 fw-semibold">Wednesday</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className={activeIndex === 3 ? "nav-link rounded active" : "nav-link rounded"} id="pills-third-tab" scroll={false} href="#" onClick={()=>setActiveIndex(3)}>
                                    <div className="text-center p-2">
                                        <h6 className="mb-0 text-muted tab-para">3rd Day</h6>
                                        <p className="mb-0 fs-6 fw-semibold">Friday</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className={activeIndex === 4 ? "nav-link rounded active" : "nav-link rounded"} id="pills-fourth-tab" scroll={false} href="#" onClick={()=>setActiveIndex(4)}>
                                    <div className="text-center p-2">
                                        <h6 className="mb-0 text-muted tab-para">4th Day</h6>
                                        <p className="mb-0 fs-6 fw-semibold">Saturday</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="tab-content" id="pills-tabContent">
                            {activeIndex === 1 ? 
                                <div className="tab-pane fade show active" id="pills-first" >
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-center">        
                                            <tbody>
                                                {eventData.slice(0,4).map((item,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td className="px-3 py-5 align-items-center" style={{minWidth:'200px'}}>
                                                                <FiClock className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.time}</span>
                                                            </td>
                                                            <td className="px-3 py-5" style={{minWidth:'550px'}}>
                                                                <div className="d-flex align-items-center">
                                                                    <Image src={item.image} width={110} height={110}  className="avatar avatar-medium rounded-pill shadow-lg float-start" alt=""/>
                                                                    <div className="ms-3">
                                                                        <h6>{item.title}</h6>
                                                                        <p className="mb-0 text-muted">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-5 text-center align-items-center" style={{minWidth:'200px'}}>
                                                                <AiOutlineUser className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.name}</span>
                                                            </td>
                                                            <td className="px-3 py-5 text-end" style={{minWidth:'150px'}}><Link1 to="pricing" smooth={true} duration={500}  className="btn btn-sm btn-primary">Buy Ticket</Link1></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : ""
                            }
                            {activeIndex === 2 ? 
                                <div className="tab-pane fade show active" id="pills-second">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-center">        
                                            <tbody>
                                                {eventData.slice(4,8).map((item,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td className="px-3 py-5 align-items-center" style={{minWidth:'200px'}}>
                                                                <FiClock className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.time}</span>
                                                            </td>
                                                            <td className="px-3 py-5" style={{minWidth:'550px'}}>
                                                                <div className="d-flex align-items-center">
                                                                    <Image src={item.image} width={110} height={110}  className="avatar avatar-medium rounded-pill shadow-lg float-start" alt=""/>
                                                                    <div className="ms-3">
                                                                        <h6>{item.title}</h6>
                                                                        <p className="mb-0 text-muted">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-5 text-center align-items-center" style={{minWidth:'200px'}}>
                                                                <AiOutlineUser className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.name}</span>
                                                            </td>
                                                            <td className="px-3 py-5 text-end" style={{minWidth:'150px'}}><Link1 to="pricing" smooth={true} duration={500}  className="btn btn-sm btn-primary">Buy Ticket</Link1></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div> : ""
                            }
                            {activeIndex === 3 ? 
                                <div className="tab-pane fade show active" id="pills-third">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-center">        
                                            <tbody>
                                                {eventData.slice(8,12).map((item,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td className="px-3 py-5 align-items-center" style={{minWidth:'200px'}}>
                                                                <FiClock className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.time}</span>
                                                            </td>
                                                            <td className="px-3 py-5" style={{minWidth:'550px'}}>
                                                                <div className="d-flex align-items-center">
                                                                    <Image width={110} height={110}  src={item.image} className="avatar avatar-medium rounded-pill shadow-lg float-start" alt=""/>
                                                                    <div className="ms-3">
                                                                        <h6>{item.title}</h6>
                                                                        <p className="mb-0 text-muted">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-5 text-center align-items-center" style={{minWidth:'200px'}}>
                                                                <AiOutlineUser className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.name}</span>
                                                            </td>
                                                            <td className="px-3 py-5 text-end" style={{minWidth:'150px'}}><Link1 to="pricing" smooth={true} duration={500}  className="btn btn-sm btn-primary">Buy Ticket</Link1></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>:''
                            }
                            {activeIndex === 4 ? 
                                <div className="tab-pane fade show active" id="pills-fourth">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-center">        
                                            <tbody>
                                                {eventData.slice(12,16).map((item,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td className="px-3 py-5 align-items-center" style={{minWidth:'200px'}}>
                                                                <FiClock className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.time}</span>
                                                            </td>
                                                            <td className="px-3 py-5" style={{minWidth:'550px'}}>
                                                                <div className="d-flex align-items-center">
                                                                    <Image src={item.image} width={110} height={110}  className="avatar avatar-medium rounded-pill shadow-lg float-start" alt=""/>
                                                                    <div className="ms-3">
                                                                        <h6>{item.title}</h6>
                                                                        <p className="mb-0 text-muted">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-3 py-5 text-center align-items-center" style={{minWidth:'200px'}}>
                                                                <AiOutlineUser className="h5 align-middle mt-1 me-1"/>
                                                                <span className="text-muted ms-1">{item.name}</span>
                                                            </td>
                                                            <td className="px-3 py-5 text-end" style={{minWidth:'150px'}}><Link1 to="pricing" smooth={true} duration={500}  className="btn btn-sm btn-primary">Buy Ticket</Link1></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>:''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}