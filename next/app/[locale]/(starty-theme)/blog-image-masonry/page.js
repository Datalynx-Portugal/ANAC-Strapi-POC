import React from "react";
import Link from "next/link";
import NavbarTwo from "../components/navbar/navbarTwo";
import FooterSix from "../components/footer/footerSix";
import ScrollTop from "../components/scrollTop";
import ImageMasonryTwo from "../components/blog/imageMasonryTwo";

export default function BlogImageMasonry(){
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
                            <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Image Masonry Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <ImageMasonryTwo columnsCountBreakPoints={{350: 1, 768: 2, 991:3}}/>
                <div className="row mt-4">
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