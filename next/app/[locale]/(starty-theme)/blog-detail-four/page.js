import Link from "next/link";
import NavbarTwo from "../components/navbar/navbarTwo";

import {AiOutlineUser,AiOutlineCalendar, AiOutlineClockCircle} from "../assets/icons/vander"
import Comments from "../components/blog/comments";
import BlogSidebarTwo from "../components/blog/blogSidebarTwo";
import FooterSix from "../components/footer/footerSix";
import ScrollTop from "../components/scrollTop";
import ImageGallery from "../components/blog/imageGallery";
import BlogSlider from "../components/blog/blogSlider";

export default function BlogDetailFour(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="bg-half-170">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="title-heading">
                            <ul className="list-inline">
                                <li className="list-inline-item me-3"><AiOutlineUser className="h5 mb-0 me-1"/><Link href="#" className="text-primary h6"> Mr. Donald Ruffy</Link></li>
                                <li className="list-inline-item text-muted h6 me-3"><AiOutlineCalendar className="h5 text-dark me-1 mb-0"/> 15th April 2021</li>
                                <li className="list-inline-item text-muted h6"><AiOutlineClockCircle className="h5 text-dark me-1 mb-0"/> 8 min read</li>
                            </ul>

                            <h5 className="heading fw-semibold page-heading">Capsule Wardrobe Essentials The Leopard Print Coat</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                                <ul className="breadcrumb p-0 mb-0">
                                    <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link href="/blog-grid">BLog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Single Post</li>
                                </ul>
                            </nav>
                        </div>

                       <ImageGallery/>

                        <div className="mt-4">
                            <p className="text-muted"><span className="dropcaps display-4 text-dark me-2">T</span>he most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        
                            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                        
                            <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
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
                    </div>

                    <BlogSidebarTwo client='/images/client/04.jpg' name='Christina Gonzalez'/>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Related News</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4">
                        <BlogSlider/>
                    </div>
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}