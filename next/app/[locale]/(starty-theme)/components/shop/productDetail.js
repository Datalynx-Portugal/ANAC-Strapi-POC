'use client'
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import("tiny-slider-react"),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import {AiOutlineCheckCircle} from "../../assets/icons/vander"
import Product from "../product";

import { productData2 } from "../../data/data";


export default function ProductDetails(){
    let [counter, setCounter] = useState(0);

    let incrementCounter = () => {
        setCounter(counter + 1);
    };

    let decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };
    let settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
      };
      let settings2 = {
        container: '.tiny-four-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 4
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
      };
    return(
        <section className="section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="tiny-single-item">
                        <TinySlider settings={settings}>
                            <div className="tiny-slide"><Image src='/images/shop/items/f2.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/></div>
                            <div className="tiny-slide"><Image src='/images/shop/items/b2.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/></div>
                        </TinySlider>   
                    </div>
                </div>

                <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="section-title ms-md-4">
                        <h4 className="title">Branded Hoodie</h4>
                        <h5 className="text-muted">$21.00 <del className="text-danger ms-2">$25.00</del> </h5>
                        <ul className="list-unstyled text-warning h5 mb-0">
                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        </ul>
                        
                        <h5 className="mt-4 py-2">Overview :</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                    
                        <ul className="list-unstyled text-muted">
                            <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Our Talented &amp; Experienced Marketing Agency</li>
                            <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Create your own skin to match your brand</li>
                        </ul>

                        <div className="row mt-4 pt-2">
                            <div className="col-lg-6 col-12">
                                <div className="d-flex shop-list align-items-center">
                                    <h6 className="mb-0">Your Size:</h6>
                                    <ul className="list-unstyled shop-icons mb-0 ms-3">
                                        <li className="list-inline-item"><Link href="3" className="btn btn-icon btn-soft-primary">S</Link></li>
                                        <li className="list-inline-item ms-1"><Link href="3" className="btn btn-icon btn-soft-primary">M</Link></li>
                                        <li className="list-inline-item ms-1"><Link href="3" className="btn btn-icon btn-soft-primary">L</Link></li>
                                        <li className="list-inline-item ms-1"><Link href="3" className="btn btn-icon btn-soft-primary">XL</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                                <div className="d-flex shop-list align-items-center">
                                    <h6 className="mb-0">Quantity:</h6>
                                    <div className="qty-icons ms-3">
                                        <button  onClick={decrementCounter}  className="btn btn-icon btn-primary minus">-</button>
                                        <input min="0" name="quantity"  type="number" placeholder={counter} className="btn btn-icon btn-primary qty-btn quantity mx-1"/>
                                        <button  onClick={incrementCounter} className="btn btn-icon btn-primary plus">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-2">
                            <Link href="#" className="btn btn-primary">Shop Now</Link>
                            <Link href="/shop-cart" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row">
                <h4>Related Products</h4>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <TinySlider settings={settings2}>
                            {productData2.map((item,index)=>{
                                return(
                                <div className="tiny-slide" key={index}>
                                    <Product item={item}/>
                                </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}