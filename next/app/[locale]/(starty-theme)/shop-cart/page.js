import React from "react";
import Link from "next/link";
import NavbarTwo from "../components/navbar/navbarTwo";
import Cart from "../components/shop/shopCart";
import ShopFooter from "../components/footer/shopFooter";
import ScrollTop from "../components/scrollTop";

export default function ShopCart(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Your Buying Products </small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Shop Carts</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item"><Link href="/index-fashion">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Carts</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <Cart/>
        <ShopFooter/>
        <ScrollTop/>
        </>
    )
}