import React from "react";
import Link from "next/link";
import Image from "next/image";

import ScrollTop from "../components/scrollTop";
import FooterSix from "../components/footer/footerSix";
import BlogSidebar from "../components/blog/blogSidebar";
import NavbarTwo from "../components/navbar/navbarTwo";

import { BlogImageData } from "../data/data";

export default function BlogImageGridSidebar(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/blog02.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Blog & News</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Image Grid Layouts with Sidebar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            {BlogImageData.slice(0,8).map((item,index)=>{
                                return(
                                    <div className="col-lg-6 mb-4 pb-2" key={index}>
                                        <div className="card blog blog-image blog-primary shadow rounded overflow-hidden">
                                            <div className="card-img">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                
                                                <div className="position-absolute top-0 start-0 mt-3 ms-4">
                                                    <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                                </div>
                                            </div>
                                            <div className="content px-4">
                                                <Link href="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">{item.title}</Link>
                
                                                <div className="d-flex author align-items-center mt-2">
                                                    <Image src={item.client} width={45} height={45} className="avatar avatar-md-sm rounded-pill" alt=""/>
                                                    <div className="ms-2">
                                                        <small className="text-white-50 user d-block">{item.name}</small>
                                                        <small className="text-white-50 date"> {item.date}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
        
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <BlogSidebar search={true}/>
                    </div>
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}