import React from "react";
import Link from "next/link";
import Image from "next/image";

import {AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,IoIosArrowForward, FiTruck, FiArchive,AiOutlineTransaction, BsShieldCheck} from "../../assets/icons/vander"

export default function ShopFooter(){
    return(
        <footer className="footer bg-footer">    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60">
                        <div className="row">
                            <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <Link href="#" className="logo-footer">
                                    <Image src='/images/logo-light.png' width={95} height={26} alt=""/>
                                </Link>
                                <p className="mt-4">Start working with Starty that can provide everything you.</p>
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
                            
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12 mb-4 pb-2">
                                        <h5 className="footer-head mb-0">Shopping & Clothes</h5>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12">
                                        <ul className="list-unstyled footer-list">
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Men</Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Jackets & Coats </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Jeans </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/>  Loungewear </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Polo shirts </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Shirts</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-4 col-12 mt-2 mt-sm-0">
                                        <ul className="list-unstyled footer-list">
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Shorts </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Suits Swimwear </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> T-shirts </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Tracksuits </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Trousers</Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Shirts</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-4 col-12 mt-2 mt-sm-0">
                                        <ul className="list-unstyled footer-list">
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> My account </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Order History </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Wish List </Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Newsletter</Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Affiliate</Link></li>
                                            <li><Link href="/index-fashion" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Returns</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <h5 className="footer-head">Newsletter</h5>
                                <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="foot-subscribe mb-3">
                                                <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                <input type="email" name="email" id="emailsubscribe" className="form-control rounded" placeholder="Your email : " required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" defaultValue="Subscribe"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-30 footer-border">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FiTruck className="align-middle h5 mb-0 me-2"/>
                                    <h6 className="mb-0">Free delivery</h6>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FiArchive className="align-middle h5 mb-0 me-2"/>
                                    <h6 className="mb-0">Non-contact shipping</h6>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex align-items-center justify-content-center">
                                    <AiOutlineTransaction className="align-middle h5 mb-0 me-2"/>
                                    <h6 className="mb-0">Money-back quarantee</h6>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="d-flex align-items-center justify-content-center">
                                    <BsShieldCheck className="align-middle h5 mb-0 me-2"/>
                                    <h6 className="mb-0">Secure payments</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-border">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-30">
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
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}