'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {FiHeart, FiEye,FiShoppingCart} from "../assets/icons/vander"

export default function Product({item}){
    let [counter, setCounter] = useState(0);

    let incrementCounter = () => {
        setCounter(counter + 1);
    };

    let decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    return(
        <div className="card shop-list border-0">
            <ul className="label list-unstyled mb-0">
                {item?.tag ? <li><Link href="#" className={`${item.tagClass} badge rounded-lg`}>{item.tag}</Link></li> :''}
                
            </ul>
            <div className="shop-image position-relative overflow-hidden rounded shadow">
                <Link href={`/shop-product-detail/${item.id}`}><Image width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} src={item.image1} className="img-fluid product-image" alt=""/></Link>
                <Link href={`/shop-product-detail/${item.id}`} className="overlay-work">
                    <Image src={item.image2} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                </Link>

                <ul className="list-unstyled shop-icons">
                    <li><Link href="#" className="btn btn-icon btn-pills btn-danger"><FiHeart className="icons"/></Link></li>
                    <li className="mt-1"><Link href="#" className="btn btn-icon btn-pills btn-primary"><FiEye className="icons"/></Link></li>
                    <li className="mt-1"><Link href="#" className="btn btn-icon btn-pills btn-warning"><FiShoppingCart className="icons"/></Link></li>
                </ul>                                

                <div className="qty-icons">
                    <button onClick={decrementCounter} className="btn btn-pills btn-icon btn-primary minus">-</button>
                    <input min="0" name="quantity"  placeholder={counter}  type="number" className="btn btn-pills btn-icon btn-primary qty-btn quantity mx-1"/>
                    <button  onClick={incrementCounter} className="btn btn-pills btn-icon btn-primary plus">+</button>
                </div>
            </div>
            <div className="card-body content pt-4 p-2">
                <Link href={`/shop-product-detail/${item.id}`} className="text-dark product-name h6">{item.product}</Link>
                <div className="d-flex justify-content-between mt-1">
                    <h6 className="text-muted small font-italic mb-0 mt-1">{item.amount} </h6>
                    <ul className="list-unstyled text-warning mb-0">
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
