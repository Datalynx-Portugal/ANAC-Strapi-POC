import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Comments(){
    let data = [
        {
            image: '/images/client/01.jpg',
            name:'Lorenzo Peterson',
            time:'13th March 2023 at 01:10 pm',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image: '/images/client/02.jpg',
            name:'Tammy Camacho',
            time:'5th May 2023 at 10:30 am',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image: '/images/client/03.jpg',
            name:'Tammy Camacho',
            time:'19th June 2023 at 09:00 am',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image: '/images/client/04.jpg',
            name:'Lorenzo Peterson',
            time:'20th june 2023 at 02:10 pm',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
    ]
    return(
        <div className="card-body">
            <h5 className="card-title mb-0">Comments :</h5>

            <ul className="media-list list-unstyled mt-5 mb-0">
                {data.map((item,index)=>{
                    return(
                        <li className="mt-4" key={index}>
                            <div className="d-flex justify-content-between" key={index}>
                                <div className="d-flex align-items-center">
                                    <Link className="pe-3" href="#">
                                        <Image src={item.image} width={45} height={45} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                    </Link>
                                    <div className="commentor-detail">
                                        <h6 className="mb-0"><Link href="#" className="text-dark media-heading">Lorenzo Peterson</Link></h6>
                                        <small className="text-muted">15th April 2021 at 01:25 pm</small>
                                    </div>
                                </div>
                                <Link href="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                            </div>
                            <div className="mt-3">
                                <p className="text-muted fst-italic p-3 bg-light rounded">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}