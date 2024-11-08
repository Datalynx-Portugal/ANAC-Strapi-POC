'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {TbMailStar,AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,} from "../../assets/icons/vander"

import Modal from 'react-bootstrap/Modal';
export default function FooterThree({top}){
    let [show, setShow] = useState(false);

  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
    return(
        <>
         <footer className="footer bg-footer">
            {top === false ? "":
                <div className="py-5 footer-border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section-title">
                                    <div className="d-flex align-items-center">
                                    <TbMailStar className="display-4 text-white title-dark"/>
                                        <div className="flex-1 ms-md-4 ms-3">
                                            <h4 className="fw-semibold text-light title-dark mb-1">Ready to start your project ?</h4>
                                            <p className="text-white-50 mb-0">Build responsive, mobile-first projects on the web with the worlds most popular front-end component library.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mt-4 mt-sm-0">
                                <div className="text-md-end ms-5 ms-sm-0">
                                    <Link href="#" className="btn btn-primary" onClick={handleShow}>Contact Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-2">
                            <div className="text-sm-start text-center">
                                <Link href="/">
                                    <Image src='/images/logo-light.png' width={95} height={26} alt=""/>
                                </Link>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <div className="text-center">
                                <p className="mb-0 text-muted">{new Date().getFullYear()} © Starty. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
    
                        <div className="col-sm-4 mt-4 mt-sm-0">
                            <ul className="list-unstyled social-icon foot-social-icon text-sm-end text-center mb-0">
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
        </footer>
            <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            centered
            >
            <Modal.Body className="p-0 position-relative overflow-hidden">
                <div className="container-fluid px-0">
                    <div className="row align-items-center g-0">
                        <div className="col-lg-6 col-md-5">
                            <Image src='/images/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded-start" alt=""/>
                        </div>

                        <div className="col-lg-6 col-md-7">
                            <form className="p-4" >
                                <div id="simple-msg"></div>
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
                                            <label className="form-label">Subject</label>
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
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            </Modal>
        </>
    )
}