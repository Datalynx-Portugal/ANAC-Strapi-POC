import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiSmartphone,AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile} from '../../assets/icons/vander'

export default function CharityFooter(){
    return(
        <footer className="footer bg-footer">
            <div className="py-5 footer-border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <p className="text-white-50">Contact our volunteer and join the <u className="text-light title-dark">Starty Foundations</u></p>
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="section-title">
                                        <div className="d-flex align-items-center">
                                            <FiSmartphone className="display-6 text-white title-dark"/>
                                            <div className="flex-1 ms-3">
                                                <Link href="tel:+152534-468-854" className="text-light title-dark mb-0 h5">+152 534-468-854</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-lg-6 col-12">
                                    <div className="section-title">
                                        <div className="d-flex align-items-center">
                                            <FiMail className="display-6 text-white title-dark"/>
                                            <div className="flex-1 ms-3">
                                                <Link href="mailto:contact@example.com" className="text-light title-dark mb-0 h5">contact@example.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 mt-sm-0">
                            <ul className="list-unstyled social-icon foot-social-icon text-md-end mb-0">
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
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-2 col-md-2 col-sm-3">
                                    <div className="text-sm-start">
                                        <Link href="#" className="logo-footer">
                                            <Image src="/images/logo-light.png" width={110} height={30} alt=""/>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <ul className="list-unstyled footer-list terms-service mb-0 text-sm-start">
                                        <li className="list-inline-item mb-0"><Link href="/page-aboutus" className="text-foot me-2">About us</Link></li>
                                        <li className="list-inline-item mb-0"><Link href="#" className="text-foot me-2">Terms</Link></li>
                                        <li className="list-inline-item mb-0"><Link href="/page-faqs" className="text-foot me-2">FAQs</Link></li>
                                        <li className="list-inline-item mb-0"><Link href="/page-contact" className="text-foot">Contact</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="text-md-end">
                                        <Link href="#" className="btn btn-primary">Donate Now</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-9 mt-4">
                                    <p className="foot-text mb-0 text-md-start">It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 pt-0 bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center text-md-start">
                                <p className="mb-0 text-muted">{new Date().getFullYear()} © Starty. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}