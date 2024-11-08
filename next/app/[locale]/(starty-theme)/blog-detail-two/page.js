import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import Comments from "../components/blog/comments";
import FooterSix from "../components/footer/footerSix";
import ScrollTop from "../components/scrollTop";
import VideoModal from "../components/blog/videoModal";

import { blogData } from "../data/data";

import {AiOutlineCalendar,AiOutlineClockCircle, FiArrowRight} from "../assets/icons/vander"

export default function BlogDetailTwo(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="bg-half-170 bg-light bg-gradient">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="title-heading">
                            <h4 className="heading fw-semibold">These striking photos capture the future of human flight</h4>

                            <div className="d-flex mt-4 pb-4 align-items-center justify-content-between">
                                <div className="d-flex author align-items-center">
                                    <Image src='/images/client/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-pill" alt=""/>
                                    <div className="ms-2">
                                        <h6 className="user d-block mb-0"><Link href="#" className="text-dark">Cristino Murphy</Link></h6>
                                        <small className="date text-muted mb-0">Content Writer</small>
                                    </div>
                                </div>

                                <div>
                                    <Link href="#" className="btn btn-primary">Follow</Link>
                                </div>
                            </div>

                            <ul className="list-inline d-flex pt-4 mb-0 border-top justify-content-between">
                                <li className="list-inline-item text-muted h6"><AiOutlineCalendar className="me-1 h5 text-dark"/>19th June 2021</li>
                                <li className="list-inline-item text-muted h6"><AiOutlineClockCircle className="me-1 h5 text-dark"/> 10 min read</li>
                            </ul>
                        </div>

                        <div className="mt-5">
                            <Image src='/images/blog/single03.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        </div>

                        <div className="mt-5">
                            <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                            <p className="text-muted">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                            <p className="text-muted">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence Lorem ipsum.</p>
                            <p className="text-muted">Fortunately, the phrase Lorem Ipsum is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                        
                            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                        </div>

                        <div className="row align-items-center mt-5">
                            <div className="col-md-5">
                                <div className="position-relative">
                                    <Image src="/images/blog/img04.jpg" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}}  className="img-fluid rounded shadow" alt=""/>
                                    <VideoModal/>
                                </div>
                            </div>

                            <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="ms-lg-4">
                                    <p className="text-muted"><span className="dropcaps display-4 text-primary me-2">T</span>he most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                    <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                           <Comments/>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-5">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Related News :</h5>

                                <div className="row">
                                    {blogData.slice(0,2).map((item,index)=>{
                                        return(
                                            <div className="col-md-6 mt-4 pt-2" key={index}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                                    <div className="image position-relative overflow-hidden">
                                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                        
                                                        <div className="blog-tag">
                                                            <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                                        </div>
                                                    </div>
                        
                                                    <div className="card-body content">
                                                        <Link href="/blog-detail-three" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                        <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                                        <Link href="/blog-detail-three" className="link text-dark">Read More <FiArrowRight className=" align-middle"/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}
