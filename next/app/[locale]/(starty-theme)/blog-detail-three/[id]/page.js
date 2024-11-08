import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../../components/navbar/navbarTwo";
import Comments from "../../components/blog/comments";
import BlogSidebarTwo from "../../components/blog/blogSidebarTwo";
import FooterSix from "../../components/footer/footerSix";
import ScrollTop from "../../components/scrollTop";

import {FiArrowRight,FiHome, FiArrowLeft} from "../../assets/icons/vander"
import { blogMasonry } from "../../data/data";

export default function BlogDetailThree(props){
    let data = blogMasonry.find((blog)=>blog.id === parseInt(props.params.id))
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/blog/single04.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row g-0 align-items-center mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                        <h5 className="heading fw-semibold page-heading text-white title-dark">{data?.title}</h5>

                            <ul className="list-inline text-start mb-0 mt-4">
                                <li className="list-inline-item me-md-5 me-4 me-sm-0 mt-4">
                                    <span className="text-white-50 d-block">Author</span>
                                    <Link href="/blog-author" className="text-white title-dark">{data?.name}</Link>
                                </li>

                                <li className="list-inline-item me-md-5 me-4 me-sm-0 mt-4">
                                    <span className="text-white-50 d-block">Date</span>
                                    <span className="text-white title-dark">{data?.date}</span>
                                </li>

                                <li className="list-inline-item me-md-5 me-4 me-sm-0 mt-4">
                                    <span className="text-white-50 d-block">Read Time</span>
                                    <span className="text-white title-dark">8 min read</span>
                                </li>
                            </ul>
                        </div>

                        <div className="position-absolute top-50 end-0 d-none d-md-block">
                            <nav aria-label="breadcrumb" className="d-flex" style={{ transform:'rotate(-90deg)'}}>
                                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                    <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Blog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Single Post</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="card">
                            <div className="card-body shadow rounded">

                                <p className="text-muted"><span className="dropcaps display-4 text-dark me-2">T</span>he most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            
                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                            
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            
                                <Link href="#" className="badge text-bg-primary me-1">Minimal</Link>
                                <Link href="#" className="badge text-bg-primary me-1">Interior</Link>
                                <Link href="#" className="badge text-bg-primary me-1">Furniture</Link>
                                <div className="card mt-4 rounded overflow-hidden">
                                    <Image src={data?.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
            
                                    <div className="position-absolute bottom-0 start-50 translate-middle-x text-center mb-3 ms-4">
                                        <p className="fst-italic text-white mb-0">The man who comes back through the door in the wall will never be quite the same as the man who went out.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <Comments/>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-4">
                                    <div className="row pt-3">
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

                                <div className="row mt-2">
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="card blog blog-primary shadow rounded overflow-hidden">
                                            <div className="image position-relative overflow-hidden">
                                                <Image src='/images/blog/02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link href="#" className="badge text-bg-light">Branding</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link href="/blog-detail-three" className="h5 title text-dark d-block mb-0">The Dark Side of Overnight Success</Link>
                                                <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                                                <Link href="/blog-detail-three" className="link text-dark">Read More <FiArrowRight  className="align-middle"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="card blog blog-primary shadow rounded overflow-hidden">
                                            <div className="image position-relative overflow-hidden">
                                                <Image src='/images/blog/03.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link href="#" className="badge text-bg-light">Technology</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link href="/blog-detail-three" className="h5 title text-dark d-block mb-0">The Right Hand of Business IT World</Link>
                                                <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                                                <Link href="/blog-detail-three" className="link text-dark">Read More <FiArrowRight  className="align-middle ms-1"/></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-5">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link href="/blog-detail-three" className="text-dark align-items-center">
                                                <span className="pro-icons"><FiArrowLeft className="fea icon-sm align-middle"/></span>
                                                <span className="text-muted d-none d-lg-inline-block">Web Development</span>
                                                <Image src='/images/blog/06.jpg' width={65} height={48} className="avatar avatar-small rounded shadow ms-2" style={{height:'auto'}} alt=""/>
                                            </Link>
        
                                            <Link href="/" className="btn btn-lg btn-pills btn-icon btn-soft-primary"><FiHome className="icons"/></Link>
                                            
                                            <Link href="/blog-detail-three" className="text-dark align-items-center">
                                                <Image src='/images/blog/07.jpg' width={65} height={48} className="avatar avatar-small rounded shadow me-2" style={{height:'auto'}} alt=""/>
                                                <span className="text-muted d-none d-lg-inline-block">Web Designer</span>
                                                <span className="pro-icons"><FiArrowRight  className="align-middle ms-1"/></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlogSidebarTwo client={data?.client} name={data?.name}/>
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}