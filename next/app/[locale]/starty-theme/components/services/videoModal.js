'use client'
import React,{useState} from "react";
import Link from "next/link"

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

export default function VideoModal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="play-icon">
            <Link href="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
            </Link>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => setOpen(false)} 
        />
        </>
    )
}