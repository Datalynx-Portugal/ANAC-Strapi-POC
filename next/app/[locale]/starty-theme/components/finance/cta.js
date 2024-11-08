'use client'
import React from "react";
import { Parallax } from 'react-parallax';
import Counter from "../counter";

export default function Cta(){
    return(
        <section className="position-relative w-100 overflow-hidden bg-primary">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage="/images/cta04.png"
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="section">
                <div className="container">
                <Counter/>
                </div>
            </div>
        </section>
    )
}