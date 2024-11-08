import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FiPhone, FiMail,FiMapPin} from "../../assets/icons/vander"

export default function FooterTwo(){
    return(
        <footer className="footer bg-footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="footer-py-60 text-center">
                            <div className="row py-5">
                                <div className="col-md-4">
                                    <div className="card border-0 text-center features feature-clean bg-transparent">
                                        <div className="icons text-primary text-center mx-auto">
                                           <FiPhone className="d-block rounded h3 mb-0"/>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="footer-head">Phone</h5>
                                            <p className="text-muted">Start working with Starty that can provide everything</p>
                                            <Link href="tel:+152534-468-854" className="text-foot">+152 534-468-854</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="card border-0 text-center features feature-clean bg-transparent">
                                        <div className="icons text-primary text-center mx-auto">
                                            <FiMail className="d-block rounded h3 mb-0"/>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="footer-head">Email</h5>
                                            <p className="text-muted">Start working with Starty that can provide everything</p>
                                            <Link href="mailto:contact@example.com" className="text-foot">contact@example.com</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="card border-0 text-center features feature-clean bg-transparent">
                                        <div className="icons text-primary text-center mx-auto">
                                            <FiMapPin className="d-block rounded h3 mb-0"/>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="footer-head">Location</h5>
                                            <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                                            <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                                data-type="iframe" className="video-play-icon text-foot lightbox">View on Google map</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container text-center">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-3 col-md-2 col-sm-3">
                            <div className="text-sm-start">
                                <Link href="#" className="logo-footer">
                                    <Image src='/images/logo-icon.png' width={30} height={34} alt=""/>
                                </Link>
                            </div>
                        </div>
    
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled footer-list terms-service mb-0">
                                <li className="list-inline-item mb-0"><Link href="/page-aboutus" className="text-foot me-2">About us</Link></li>
                                <li className="list-inline-item mb-0"><Link href="#" className="text-foot me-2">Terms</Link></li>
                                <li className="list-inline-item mb-0"><Link href="/page-faqs" className="text-foot me-2">FAQs</Link></li>
                                <li className="list-inline-item mb-0"><Link href="/page-contact" className="text-foot">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="text-sm-end">
                                <p className="mb-0 text-foot">© {new Date().getFullYear()} <Link href="http://www.shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}