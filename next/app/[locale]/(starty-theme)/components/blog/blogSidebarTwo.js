import React from "react";
import Image from "next/image";
import Link from "next/link";

import {FaFacebookF, AiOutlineInstagram, AiOutlineTwitter,AiFillLinkedin, AiOutlineDribbble} from "../../assets/icons/vander"

export default function BlogSidebarTwo({client, name}){
    let recentPost =[
        {
            image:'/images/blog/01.jpg',
            title:'Consultant Business',
            date:'13th March 2023'
        },
        {
            image:'/images/blog/02.jpg',
            title:'Grow Your Business',
            date:'5th May 2023'
        },
        {
            image:'/images/blog/03.jpg',
            title:'Look On The Glorious Balance',
            date:'19th June 2023'
        },
    ]
    return(
        <>
        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="sidebar sticky-bar">
                <div className="widget text-center">
                    <div className="rounded p-4 shadow bg-white">
                        <Image src={client} width={85} height={85} className="avatar avatar-medium rounded-circle shadow-lg" alt=""/>

                        <div className="mt-4">
                            <Link href="/blog-author" className="text-dark title h5">{name}</Link>
                            <p className="text-muted">Blogger</p>

                            <ul className="list-unstyled align-items-center social-icon social mb-0">
                                <li className="list-inline-item"><Link href="#" className="rounded"><FaFacebookF/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded mt-1"><AiOutlineInstagram/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded mt-1"><AiOutlineTwitter/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded mt-1"><AiFillLinkedin/></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded mt-1"><AiOutlineDribbble/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="widget mt-4 pt-2">
                    <div className="rounded p-4 shadow bg-white">
                        <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded text-center">Recent Post</h6>
                        <div className="mt-4">
                            {recentPost.map((item,index)=>{
                                return(
                                    <div className="d-flex align-items-center mt-3" key={index}>
                                        <Image src={item.image} className="avatar avatar-small rounded" width={0} height={0} sizes="100vw" style={{width:'auto', height:'65px'}} alt=""/>
                                        <div className="flex-1 ms-3">
                                            <Link href="#" className="d-block title text-dark">{item.title}</Link>
                                            <span className="text-muted">{item.date}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
                <div className="widget mt-4 pt-2 text-center">
                    <div className="rounded p-4 shadow bg-white">
                        <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded">Tags Cloud</h6>
                        <div className="tagcloud mt-4">
                            <Link href="#" className="rounded text-dark">Business</Link>
                            <Link href="#" className="rounded text-dark">Finance</Link>
                            <Link href="#" className="rounded text-dark">Marketing</Link>
                            <Link href="#" className="rounded text-dark">Fashion</Link>
                            <Link href="#" className="rounded text-dark">Bride</Link>
                            <Link href="#" className="rounded text-dark">Lifestyle</Link>
                            <Link href="#" className="rounded text-dark">Travel</Link>
                            <Link href="#" className="rounded text-dark">Beauty</Link>
                            <Link href="#" className="rounded text-dark">Video</Link>
                            <Link href="#" className="rounded text-dark">Audio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}