import React from "react";
import NavbarTwo from "../components/navbar/navbarTwo";
import BlogSidebar from "../components/blog/blogSidebar";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";
import SidebarMasonary from "../components/portfolio/sidebarMasonary";

export default function MasonrySidebar(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/port03.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Portfolio & Works</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works and Sidebar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <SidebarMasonary/>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <BlogSidebar search={true} />
                    </div>
                </div>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}