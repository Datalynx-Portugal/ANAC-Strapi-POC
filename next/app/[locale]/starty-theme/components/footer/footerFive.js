import React from "react";
import Link from "next/link";
import Image from "next/image";

import {AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,IoIosArrowForward,FiArrowRight} from "../../assets/icons/vander"

export default function FooterFive(){
    return(
        <>
        <footer className="footer bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="#" className="logo-footer">
                                        <Image src='/images/logo-light.png' height={26} width={95} alt=""/>
                                    </Link>
                                    <p className="mt-4">Start working with Starty that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><Link href="https://1.envato.market/starty-next" target="_blank" className="rounded"><AiOutlineShoppingCart className="align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><AiOutlineDribbble/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                        <li className="list-inline-item"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook/></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                        <li className="list-inline-item"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></Link></li>
                                        <li className="list-inline-item"><Link href="mailto:support@shreethemes.in" className="rounded"><FiMail/></Link></li>
                                        <li className="list-inline-item"><Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><AiOutlineFile/></Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/page-aboutus" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> About us</Link></li>
                                        <li><Link href="/page-services-two" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Services</Link></li>
                                        <li><Link href="/page-team" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Team</Link></li>
                                        <li><Link href="/page-pricing" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Pricing</Link></li>
                                        <li><Link href="/portfolio-detail-four" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Project</Link></li>
                                        <li><Link href="/blog-grid" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Blog</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Usefull Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Terms of Services</Link></li>
                                        <li><Link href="/" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Privacy Policy</Link></li>
                                        <li><Link href="/page-contact" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Contact Us</Link></li>
                                        <li><Link href="/" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Changelog</Link></li>
                                        <li><Link href="/components" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Components</Link></li>
                                    </ul>
                                </div>
            
                                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="text-light footer-head">Start project with Starty</h5>

                                    <ul className="list-unstyled footer-list mt-4 mb-2">
                                        <li className="list-inline-item mx-1"><Link href="#" className="btn btn-soft-primary">Signin</Link></li>
                                        <li className="list-inline-item mx-1"><Link href="#" className="btn btn-primary">Signup</Link></li>
                                    </ul>
                                    <small className="d-block">Are you developer ? <Link href="#" className="text-foot fw-medium">Learn More<FiArrowRight/></Link></small>

                                    <Image src='/images/logo-icon.png' width={90} height={100} className="mt-4" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="text-center">
                                <p className="mb-0 text-muted">{new Date().getFullYear()} © Starty. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}