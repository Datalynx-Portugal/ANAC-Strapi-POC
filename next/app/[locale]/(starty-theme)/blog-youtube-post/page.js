import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import Comments from "../components/blog/comments";
import BlogSidebar from "../components/blog/blogSidebar";
import FooterSix from "../components/footer/footerSix";
import ScrollTop from "../components/scrollTop";

import { blogData } from "../data/data";

import {FiArrowRight} from "../assets/icons/vander"

export default function BlogYoutubePost(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"Url('/images/bg/blog01.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <span className="badge bg-primary">Youtube</span>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">1 Hour Pine Forest In 4K Relaxing Nature Sounds</h5>
                            
                            <ul className="list-inline text-center mb-0">
                                <li className="list-inline-item mx-4 mt-4">
                                    <span className="text-white-50 d-block">Author</span>
                                    <Link href="#" className="text-white title-dark">Christina Gonzalez</Link>
                                </li>

                                <li className="list-inline-item mx-4 mt-4">
                                    <span className="text-white-50 d-block">Date</span>
                                    <span className="text-white title-dark">29th Dec 2023</span>
                                </li>

                                <li className="list-inline-item mx-4 mt-4">
                                    <span className="text-white-50 d-block">Read Time</span>
                                    <span className="text-white title-dark">8 min read</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            <iframe src="https://www.youtube.com/embed/2dljZWZQLFQ?feature=oembed" allow="autoplay; encrypted-media" title="starty" style={{height:'430px'}} allowFullScreen=""></iframe>

                            <div className="card-body">
                                <p className="text-muted">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                <p className="text-muted">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            
                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Fronter Template</small></blockquote>
                            
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            
                                <Link href="#" className="badge badge-link bg-primary me-1">Minimal</Link>
                                <Link href="#" className="badge badge-link bg-primary me-1">Interior</Link>
                                <Link href="#" className="badge badge-link bg-primary me-1">Furniture</Link>
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
                                                        <Link href={`/blog-detail-two/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                        <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                                        <Link href={`/blog-detail-two/${item.id}`} className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
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