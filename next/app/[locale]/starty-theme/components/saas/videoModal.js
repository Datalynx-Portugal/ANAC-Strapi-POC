'use client'
import React,{useState} from "react";
import Link from "next/link";

import {FiPlay} from "../../assets/icons/vander"

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

export default function VideoModal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="mt-4 pt-2">
            <Link href="#" scroll={false} onClick={() => setOpen(true)} className="btn btn-lg btn-pills btn-primary lightbox"><FiPlay className="me-2"/>Watch now</Link>
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