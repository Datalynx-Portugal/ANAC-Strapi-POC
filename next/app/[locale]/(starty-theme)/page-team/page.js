import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiFacebook,FiInstagram,FiTwitter,FiLinkedin} from "../assets/icons/vander"
import NavbarTwo from "../components/navbar/navbarTwo";
import Team from "../components/team";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

import { teamData } from "../data";

export default function Teams(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/bg/team.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Showcase your team</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Meet Our Team</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Team</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    {teamData.map((item,index)=>{
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card team team-primary rounded-0 team-two overflow-hidden shadow">
                                <div className="team-image">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="overlay"></div>
                                </div>
                                <ul className="list-unstyled social-icon team-social mb-0">
                                    <li><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                    <li className="mt-1"><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                    <li className="mt-1"><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    <li className="mt-1"><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                </ul>
                                <div className="team-content">
                                    <Link href="#" className="h6 text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                    <small className="text-white title-dark">{item.title}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section  bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 pb-2">
                        <div className="section-title text-center">
                            <h4 className="title fw-semibold mb-3">About the team</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <Team/>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}
