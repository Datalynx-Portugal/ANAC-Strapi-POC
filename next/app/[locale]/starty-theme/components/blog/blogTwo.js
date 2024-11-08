import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiArrowRight} from "../../assets/icons/vander"

export default function BlogTwo(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h6 className="text-primary">Blogs</h6>
                    <h4 className="title fw-semibold mt-2 mb-3">Latest Blog and News</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card blog blog-image blog-primary shadow rounded overflow-hidden">
                    <div className="card-img">
                        <Image src='/images/blog/img01.jpg' width={0} height={0} sizes="100vw" style={{width:"100%", height:'auto'}} className="img-fluid" alt=""/>
                        <div className="card-overlay"></div>

                        <div className="position-absolute top-0 start-0 mt-3 ms-4">
                            <Link href="#" className="badge text-bg-light">Finance</Link>
                        </div>
                    </div>
                    <div className="content px-4">
                        <Link href="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">How to Get a Successful Ad for Your Business</Link>

                        <div className="d-flex author align-items-center mt-2">
                            <Image src='/images/client/04.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-pill" alt=""/>
                            <div className="ms-2">
                                <small className="text-light title-dark user d-block"> Calvin Carlo</small>
                                <small className="text-light title-dark date"> 13th April 2021</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card blog blog-primary shadow rounded overflow-hidden">
                    <div className="image position-relative overflow-hidden">
                        <Image src='/images/blog/01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                        <div className="blog-tag">
                            <Link href="#" className="badge text-bg-light">Corporate</Link>
                        </div>
                    </div>

                    <div className="card-body content">
                        <Link href="/blog-detail-three" className="h5 title text-dark d-block mb-0">Building Your Corporate Identity from Starty</Link>
                        <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                        <Link href="/blog-detail-three" className="link text-dark">Read More <FiArrowRight className="ms-1 align-middle"/></Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card blog blog-primary shadow rounded overflow-hidden">
                    <div className="image position-relative overflow-hidden">
                        <Image src='/images/blog/02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                        <div className="blog-tag">
                            <Link href="#" className="badge text-bg-light">Business</Link>
                        </div>
                    </div>

                    <div className="card-body content">
                        <Link href="/blog-detail-three" className="h5 title text-dark d-block mb-0">Stuck in a Financial Debt? Here’s an Easy Way Out</Link>
                        <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                        <Link href="/blog-detail-three" className="link text-dark">Read More <FiArrowRight className="ms-1 align-middle"/></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}