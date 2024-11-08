import React from "react";
import Link from "next/link";
import {TbMailStar,AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,IoIosArrowForward} from "../../assets/icons/vander"
import Image from "next/image";

export default function Footer({top}){
    return(
        <footer className="footer bg-footer">
            {top === false ? ''
            :   <div className="py-5 footer-border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section-title">
                                    <div className="d-flex">
                                        <TbMailStar className="display-4 text-white title-dark"/>
                                        <div className="flex-1 ms-md-4 ms-3">
                                            <h4 className="fw-bold text-light title-dark mb-1">Subscribe to our newsletters</h4>
                                            <p className="text-white-50 mb-0">Sign up and receive the latest tips via email.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mt-4 mt-sm-0">
                                <div className="text-md-end ms-5 ms-sm-0">
                                    <Link href="" className="btn btn-primary">Subscribe Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-4 order-md-1">
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0">
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

                                <div className="col-lg-3 col-md-3 col-12 order-1 order-md-2">
                                    <h6 className="footer-head">Company</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/page-aboutus" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> About us</Link></li>
                                        <li><Link href="/page-services-two" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Services</Link></li>
                                        <li><Link href="/page-team" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Team</Link></li>
                                        <li><Link href="/page-pricing" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Pricing</Link></li>
                                        <li><Link href="/portfolio-detail-four" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Project</Link></li>
                                        <li><Link href="/blog-grid" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Blog</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-3">
                                    <h6 className="footer-head">Usefull Links</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Terms of Services</Link></li>
                                        <li><Link href="/" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Privacy Policy</Link></li>
                                        <li><Link href="/page-contact" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Contact Us</Link></li>
                                        <li><Link href="/" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Changelog</Link></li>
                                        <li><Link href="/components" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Components</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-3 order-md-4">
                                    <h6 className="footer-head">Resources</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/page-faqs" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Theme guide</Link></li>
                                        <li><Link href="/page-faqs" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Support desk</Link></li>
                                        <li><Link href="/page-services" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> What we offer</Link></li>
                                        <li><Link href="/page-aboutus" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Company history</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-4">
                            <div className="text-sm-start text-center">
                                <Link href="#">
                                    <Image src='/images/logo-light.png' width={95} height={26} alt=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-8 mt-4 mt-sm-0">
                            <div className="text-sm-end text-center">
                                <p className="mb-0 text-muted">{new Date().getFullYear()} © Starty. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}