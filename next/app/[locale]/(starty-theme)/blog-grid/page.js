import React from "react";
import Link from "next/link";
import Image from "next/image";

import { blogData } from "../data/data";

import {FiArrowRight} from "../assets/icons/vander"
import NavbarTwo from "../components/navbar/navbarTwo";
import ScrollTop from "../components/scrollTop";
import FooterSix from "../components/footer/footerSix";

export default function BlogGrid(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/blog01.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Blog & News</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Grid Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    {blogData.map((item,index)=>{
                        return(
                        <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
                            <div className="card blog blog-primary shadow rounded overflow-hidden">
                                <div className="image position-relative overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                                    <div className="blog-tag">
                                        <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                    </div>
                                </div>

                                <div className="card-body content">
                                    <Link href={`/blog-detail-two/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                    <Link href={`/blog-detail-two/${item.id}`} className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
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
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}