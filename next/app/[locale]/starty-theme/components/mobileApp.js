import React from "react";
import Link from "next/link";
import Image from "next/image";

import {BsApple, FaGooglePlay, MdKeyboardArrowRight, FiSmartphone} from "../assets/icons/vander"

export default function MobileApp(){
    return(
        <>
        <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 col-12">
                <Image src='/images/crypto/apps.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
            </div>

            <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ms-lg-5">
                    <h4 className="title mb-4">Available for your <br/> Smartphones</h4>
                    <p className="text-muted para-desc mb-0">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                    <div className="my-4">
                        <Link href="#" className="btn btn-lg btn-dark mt-2 me-2"><BsApple/> App Store</Link>
                        <Link href="#" className="btn btn-lg btn-dark mt-2">Play Store <FaGooglePlay/></Link>
                    </div>

                    <div className="d-inline-block">
                        <div className="pt-4 d-flex align-items-center border-top">
                            <FiSmartphone className="fea icon-md me-2 text-primary"/>
                            <div className="content">
                                <h6 className="mb-0">Install app now on your cellphones</h6>
                                <Link href="#" className="text-primary">Learn More <MdKeyboardArrowRight/></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}