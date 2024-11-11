'use client'
import React from "react"
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
    return(
        <h4 className="heading mb-4">
        <TypeAnimation
            sequence={[
                'Phillip Anthony',
                1000,
                'Web Developer',
                1000,
                'Photographer',
                1000
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="fw-semibold"
            /></h4>
    )
}