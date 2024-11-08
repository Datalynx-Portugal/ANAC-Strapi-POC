import React  from "react";
import Link from "next/link";
import Image from "next/image";

import {FiFacebook,FiInstagram,FiTwitter,FiLinkedin} from "../assets/icons/vander"

export default function TeamTwo(){
    let teamData = [
        {
            image:'/images/client/13.jpg',
            name:'Dennis Rosario',
            title:'Manager'
        },
        {
            image:'/images/client/14.jpg',
            name:'Billy Gregory',
            title:'Manager'
        },
         {
            image:'/images/client/15.jpg',
            name:'Connie Dunton',
            title:'Manager'
        },
        {
            image:'/images/client/16.jpg',
            name:'Alberta Petty',
            title:'Manager'
        },
    ]
    return(
        <>
        <div className="row">
            {teamData.map((item,index)=>{
                return(
                    <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card team team-primary rounded team-two overflow-hidden shadow">
                            <div className="team-image">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                <div className="overlay"></div>
                            </div>
                            <ul className="list-unstyled social-icon team-social mb-0">
                                <li><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                <li className="mt-1"><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                <li className="mt-1"><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                <li className="mt-1"><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                            </ul>
                            <div className="team-content">
                                <Link href="#" className="h6 text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                <small className="text-white title-dark">{item.title}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}