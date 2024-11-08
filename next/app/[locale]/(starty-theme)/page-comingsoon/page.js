import React from "react";
import Link from "next/link";
import Image from "next/image";

import {AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile} from "../assets/icons/vander"

export default function Comingsoon(){
    return(
        <>
         <section className="position-relative" style={{backgroundImage:"url('/images/bg/comingsoon.jpg')", backgroundPosition:'center'}}>
            <div className="bg-overlay opacity-7"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                            <div className="text-center mt-md-5">
                                <Link href="/"><Image src='/images/logo-icon.png' width={43} height={48} alt=""/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h4 className="coming-soon fw-bold text-uppercase">Coming Soon</h4>
                                <p className="text-white-50 para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <div className="subcribe-form mt-4 pt-2">
                                    <form>
                                        <input type="email" id="email" className="bg-white opacity-6 rounded shadow" required placeholder="Type your Email.."/>
                                        <button type="submit" className="btn btn-primary" style={{top:'2.5px'}}>Notify Me</button>
                                    </form>
                                </div>
            
                                <p className="text-white-50 mt-2"><span className="text-danger fw-bold">*</span>Notify me when website is launched</p>
                            </div>
                            <div className="text-center mb-md-5">
                                <span className="text-white-50 h6">Follow Now</span>
                                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-2">
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
            </div>
        </section>
        </>
    )
}