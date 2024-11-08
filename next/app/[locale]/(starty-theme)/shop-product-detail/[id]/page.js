import React from "react";
import Link from "next/link";

import NavbarTwo from "../../components/navbar/navbarTwo";
import ShopFooter from "../../components/footer/shopFooter";
import ScrollTop from "../../components/scrollTop";
import ProductDetailTwo from "../../components/shop/productDetailTwo";
import { productData } from "../../data/data";

export default function ProductDetail(props){
    let data = productData.find((item)=>item.id === parseInt(props.params.id))
   return(
    <>
    <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
    <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
        <div className="bg-overlay bg-gradient-overlay"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Branded Hoodie</h5>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                        <li className="breadcrumb-item"><Link href="/index-fashion">Fashion</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <ProductDetailTwo data={data}/>
    <ShopFooter/>
    <ScrollTop/>
    </>
   )
}