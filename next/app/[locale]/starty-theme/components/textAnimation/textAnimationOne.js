'use client'

import React from "react"
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimationOne(){
    return(
        <h4 className="display-6 fw-semibold my-4">Create a powerfull websites <br/> for
        <TypeAnimation
            sequence={[
                'Startup Business',
                1000,
                'Corporate Business',
                1000,
                'Finance',
                1000,
                'Application',
                1000,
                'Saas',
                1000,
                'SEO Agency',
                1000,
                'Digital Marketing',
                1000,
                'Product Launch',
                1000,
                'Restaurent',
                1000,
                'Coffee & Cafe',
                1000,
                'Personal',
                1000,
                'Minimal Portfolio',
                1000,
                'Developer',
                1000,
                'Personal Blog',
                1000,
                'Charity',
                1000,
                'Event Management',
                1000,
                'e-Commerce',
                1000,

            ]}
            wrapper="span"
            speed={10}
            className="fw-semibold text-primary ms-2"
            repeat={Infinity}
            />
          <span id="typed" className="fw-semibold text-primary"></span></h4>
    )
}