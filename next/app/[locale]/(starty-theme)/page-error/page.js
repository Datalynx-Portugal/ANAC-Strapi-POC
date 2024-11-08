import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error(){
    return(
        <>
    <section className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/cta05.png')", backgroundPosition:'center'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                    <Image src="/images/svg/404.svg" width={0} height={0} sizes="100vw"  style={{width:'500px', height:'auto'}} alt=""/>
                    <div className="text-uppercase mt-4 display-5 fw-semibold">Page Not Found</div>
                    <div className="text-capitalize text-dark mb-4 error-page"></div>
                    <p className="text-muted para-desc mx-auto">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">  
                    <Link href="/" className="btn btn-primary mt-4">Go To Home</Link>
                </div>
            </div>
        </div>
    </section> 
        </>
    )
}