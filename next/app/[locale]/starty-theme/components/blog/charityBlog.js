import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiArrowRight} from '../../assets/icons/vander'

export default function CharityBlog(){
    let blogData =[
        {
            image:'/images/charity/news01.jpg',
            title:'Helping Kids Grow Up Stonger',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            tag:'Home'
        },
        {
            image:'/images/charity/news02.jpg',
            title:'Pure Water More Essential',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            tag:'Water'
        },
        {
            image:'/images/charity/news03.jpg',
            title:'Education for African Children',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            tag:'Educations'
        },
    ]
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h6 className="text-primary">Blogs</h6>
                    <h4 className="title fw-semibold mt-2 mb-3">Latest Blog & News</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            {blogData.map((item, index)=>{
                return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                    <div className="card blog blog-primary shadow rounded overflow-hidden">
                        <div className="image position-relative overflow-hidden">
                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                            <div className="blog-tag">
                                <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                            </div>
                        </div>

                        <div className="card-body content">
                            <Link href="/blog-detail-five" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                            <p className="text-muted mt-2 mb-2">{item.desc}</p>
                            <Link href="/blog-detail-three" className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}