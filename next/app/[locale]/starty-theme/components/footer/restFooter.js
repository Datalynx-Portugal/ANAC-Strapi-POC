'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Link as Link1} from "react-scroll"


import { Parallax } from 'react-parallax';

import {FiFacebook,FiInstagram, FiTwitter, FiLinkedin} from "../../assets/icons/vander"

export default function RestFooter(){
    return(
        <>
        <footer className="footer position-relative overflow-hidden w-100">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage='/images/bg/rest-footer.jpg'
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div>
                <div className="bg-overlay bg-gradient-overlay-dark"></div>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12">
                            <div className="footer-py-60">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <Link href="#"><Image src='/images/logo-light.png' width={176} height={48} alt=""/></Link> 
                                        
                                        <div className="content mt-4 pt-2">
                                            <h4 className="text-white title-dark text-uppercase mb-3">Starty Restaurant & Drinks</h4>
                                            <p className="mb-2">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                                            <p className="mb-2">Open: 09:00 am – 01:00 pm</p>

                                            <ul className="list-unstyled footer-list mb-0">
                                                <li className="list-inline-item mx-2"><Link href="tel:+152534-468-854" className="text-foot">+152 534-468-854</Link></li>
                                                <li className="list-inline-item mx-2"><Link href="mailto:contact@example.com" className="text-foot">contact@example.com</Link></li>
                                            </ul>

                                            <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                                <li className="list-inline-item"><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item"><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item"><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item"><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-py-30 footer-bar bg-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-start text-center">
                                    <p className="mb-0">{new Date().getFullYear()}© Starty. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-3 mt-sm-0">
                                <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                                    <li className="list-inline-item"><Link1 smooth={true} duration={500} to="home" className="text-foot me-2">Home</Link1></li>
                                    <li className="list-inline-item"><Link1 smooth={true} duration={500} to="menulist" className="text-foot me-2">Menu</Link1></li>
                                    <li className="list-inline-item"><Link1 smooth={true} duration={500} to="book-table" className="text-foot me-2">Book a Table</Link1></li>
                                    <li className="list-inline-item"><Link1 smooth={true} duration={500} to="service" className="text-foot me-2">Service</Link1></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}