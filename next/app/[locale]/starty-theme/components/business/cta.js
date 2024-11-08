'use client'
import React,{useState} from "react";
import Link from "next/link";

import { Parallax } from 'react-parallax';

import ModalVideo from 'react-modal-video';
import '../../../../node_modules/react-modal-video/css/modal-video.css';

export default function Cta(){
    let [isOpen, setOpen] = useState(false);
    return(
        <section className="position-relative overflow-hidden w-100">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage='/images/bg/busi04.jpg'
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="bg-half-170">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="play-icon">
                                <Link href="#" scroll={false} onClick={() => setOpen(true)} className="play-btn lightbox">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}