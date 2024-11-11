'use client'
import React from "react"
import Link from "next/link";
import Image from "next/image";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Demo(){
    return(
        <div className="attach-icons-hero text-center py-md-5 py-lg-0">
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Next Js</Tooltip>}>
                <Link href="#"><Image src='/images/demos/live/next.png' width={65} height={65} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React Js</Tooltip>}>
                <Link href="#"><Image src='/images/demos/live/react.png' width={65} height={65} className="img-fluid avatar avatar-md-md my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bootstrap 5</Tooltip>}>
                <Link href="#"><Image src='/images/demos/live/bootstrap2.png' width={65} height={65} className="img-fluid avatar avatar-md-md my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">SASS</Tooltip>}>
                <Link href="#"><Image src='/images/demos/live/scss2.png' width={65} height={65} className="img-fluid avatar avatar-md-md my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}>
                <Link href="#"><Image src='/images/demos/live/css2.png' width={65} height={65} className="img-fluid avatar avatar-md-md my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}>
                <Link href="#"><Image src='/images/demos/live/js.png' width={65} height={65} className="img-fluid avatar avatar-md-md my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
            </OverlayTrigger>
        </div>
    )
}
