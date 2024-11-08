"use client"
import React,{ useState } from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

export default function Cta(){
    let [isOpen, setOpen] = useState(false);
    return(
        <div className="col-12">
            <div className="section-title play-icon">
                <Link href="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                </Link>

                <div className="mt-4">
                    <h4 className="title text-white title-dark">Let’s Make Something Together</h4>
                    <p className="text-white-50 mb-0">The Biggest Event Ever</p>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="yba7hPeTSjk"
                onClose={() => setOpen(false)} 
            />
        </div>
    )
}