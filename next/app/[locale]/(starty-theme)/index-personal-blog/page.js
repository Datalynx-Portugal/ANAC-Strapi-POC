import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import BlogSidebar from "../components/blog/blogSidebar";
import FooterFour from "../components/footer/footerFour";
import ScrollTop from "../components/scrollTop";
import HeroSlider from "../components/personalBlog/heroSlider";
import Blog from "../components/personalBlog/blog";

import { FiArrowRight } from "../assets/icons/vander"

export default function IndexPersonalBlog(){
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>
         <HeroSlider/>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            <div className="col-lg-12 mb-4 pb-2 picture-item">
                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                    <div className="image position-relative overflow-hidden">
                                        <Image src="/images/blog/01.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
        
                                        <div className="blog-tag">
                                            <Link href="#" className="badge text-bg-light">Corporate</Link>
                                        </div>
                                    </div>
        
                                    <div className="card-body content">
                                        <Link href="/blog-detail-five" className="h5 title text-dark d-block mb-0">Building Your Corporate Identity from Starty</Link>
                                        <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                                        <Link href="/blog-detail-five" className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Blog/>
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
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}