import React from "react";
import Image from "next/image";


export default function Partners(){
    let clientImg = ['/images/client/logo-1.svg', '/images/client/logo-2.svg', '/images/client/logo-3.svg', '/images/client/logo-4.svg', '/images/client/logo-5.svg', '/images/client/logo-6.svg']
    return(
        <div className="row justify-content-center">
            {clientImg.map((item,index)=>{
                return(
                <div className="col-lg-2 col-md-2 col-6 text-center" key={index}>
                    <Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </div>
                )
            })}
        </div>
    )
}