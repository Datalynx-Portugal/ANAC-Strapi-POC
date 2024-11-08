'use client'
import React,{useState} from "react";
import Link from "next/link";
import {Link as Link1} from "react-scroll"

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

import {FiPlay} from "../../assets/icons/vander"

export default function VideoModal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-3 text-white title-dark fw-semibold mb-0">We Design & Build <br/> Products For All.</h4>

                            <div className="watch-video mt-4">
                                <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="play-icon-circle lightbox h4 mb-0 bg-primary text-white title-dark text-center rounded-pill" ><FiPlay className="icon"/></Link>
                            </div>
                            <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="yba7hPeTSjk"
                                onClose={() => setOpen(false)} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-shape-arrow">
                <Link1 to="features" smooth={true} duration={500} className="mouse-down"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link1>
            </div> 
        </>
    )
}