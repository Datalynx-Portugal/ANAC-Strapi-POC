import React  from "react";
import Link from "next/link";

import NavbarTwo from "../components/navbar/navbarTwo";
import TeamTwo from "../components/teamTwo";
import CharityBlog from "../components/blog/charityBlog";
import CharityFooter from "../components/footer/charityFooter";
import ScrollTop from "../components/scrollTop";
import VideoModal from "../components/charity/videoModal";
import Causes from "../components/charity/causes";

import { aboutData } from "../data/charity";

import { FiArrowRight } from "../assets/icons/vander"


export default function IndexCharity(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/bg/charity.jpg')"}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                            <h4 className="heading fw-bold text-white title-dark mb-4">More Charity <br/>More Better Life</h4>
                            <p className="text-white-50 para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                           <VideoModal/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="features-absolute rounded shadow p-md-5 p-4 bg-white">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="section-title">
                                        <span className="badge bg-soft-primary rounded-lg">Charity Donation</span>
                                        <h6 className="mb-0 mt-3">We are near to our</h6>
                                        <h4 className="title fw-semibold mb-3">CAMPAIGN</h4>
                                        <p className="text-muted para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pt-2 mt-md-0 pt-md-0">
                                    <div className="progress-box mt-4">
                                        <div className="progress rounded-md" style={{height:'10px'}}>
                                            <div className="progress-bar position-relative bg-primary rounded-md" style={{width:'60%'}}>
                                                <div className="progress-value d-block text-muted h6">Raised 60% = $ 600000</div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                                            <h6 className="title text-muted text-end mb-0">Goal: $ 1000000</h6>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-lg-end">
                                        <Link href="#" className="btn btn-primary">Donate Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">Popular Causes</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
                <Causes/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">What We Do?</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {aboutData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary features-classic p-4 text-center rounded-md shadow border-0">
                                    <div className="fea-icon bg-soft rounded-md mx-auto">
                                        <Icon className="icon"/>
                                    </div>
        
                                    <div className="content mt-4">
                                        <h5 className="mb-3">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                        <Link href="/page-single-service" className="title text-dark">Read More<FiArrowRight className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="bg-cta" id="volunteer" style={{backgroundImage:"url('/images/bg/charity2.jpg')"}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="card p-4 border-0 rounded bg-white">
                            <h4>Become a volunteer to help helpless</h4>

                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Why you join us?</label>
                                            <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Volunteers</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

               <TeamTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <CharityBlog/>
            </div>
        </section>
        <CharityFooter/>
        <ScrollTop/>
        </>
    )
}