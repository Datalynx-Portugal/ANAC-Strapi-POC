import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import FooterSix from "../components/footer/footerSix";
import ScrollTop from "../components/scrollTop";

import {AiOutlineCalendar, AiOutlineUser, FiArrowRight, FaFacebookF,AiOutlineInstagram, AiOutlineTwitter,AiFillLinkedin, AiOutlineDribbble} from "../assets/icons/vander"
import { blogData } from "../data/data";

export default function BlogDetailOne(){
    return(
        <>

        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="bg-half-170 d-table w-100 pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="title-heading">
                            <ul className="list-inline">
                                <li className="list-inline-item"><AiOutlineUser className="mb-0 me-1 text-dark h5"/><Link href="#" className="text-primary h6"> Mr. Donald Ruffy</Link></li>
                                <li className="list-inline-item text-muted h6 ms-3"><AiOutlineCalendar className="mb-0 me-1 text-dark h5"/> 19th June 2021</li>
                            </ul>

                            <h4 className="heading text-decoration-underline mb-4">The Right Hand of Business IT World</h4>
                            <p className="text-muted h5 fw-normal mb-0">If the distribution of letters and words is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card rounded overflow-hidden">
                            <Image src='/images/blog/single01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                            
                            <div className="position-absolute bottom-0 start-0 mb-3 ms-4">
                                <Link href="#" className="badge text-bg-primary me-1">Finance</Link>
                                <Link href="#" className="badge text-bg-primary">Marketing</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-md-1 d-md-block d-none">
                                <div className="sidebar sticky-bar">
                                    <ul className="list-unstyled align-items-center social-icon social mb-0">
                                        <li><Link href="#" className="rounded"><FaFacebookF/></Link></li>
                                        <li><Link href="#" className="rounded mt-1"><AiOutlineInstagram/></Link></li>
                                        <li><Link href="#" className="rounded mt-1"><AiOutlineTwitter/></Link></li>
                                        <li><Link href="#" className="rounded mt-1"><AiFillLinkedin/></Link></li>
                                        <li><Link href="#" className="rounded mt-1"><AiOutlineDribbble/></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-11">
                                <p className="text-muted"><span className="dropcaps display-4 text-primary me-2">T</span>he most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            
                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                            
                                <p className="text-muted mb-0">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <div className="card rounded overflow-hidden">
                            <Image src='/images/blog/single02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
    
                            <div className="position-absolute bottom-0 start-50 translate-middle-x text-center mb-3 ms-4">
                                <p className="fst-italic text-white mb-0">The man who comes back through the door in the wall will never be quite the same as the man who went out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <p className="text-muted mb-0"><span className="dropcaps display-4 text-primary me-2">I</span>t seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <span className="divider-main divider"></span>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title">
                            <h4 className="title mb-0">Related News</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogData.slice(0,3).map((item, index)=>{
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
                                        <Link href="/blog-detail-one" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                        <Link href="/blog-detail-one" className="link text-dark">Read More <FiArrowRight className="ms-1 align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}
