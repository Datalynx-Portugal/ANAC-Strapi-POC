import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarTwo from "../components/navbar/navbarTwo";

import {FiArrowRight,LuSearch} from "../assets/icons/vander"
import { productData } from "../data/data";
import Product from "../components/product";
import ShopFooter from "../components/footer/shopFooter";
import ScrollTop from "../components/scrollTop";

export default function ShopGrid(){
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
         <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">All Products with Sidebar</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Products</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                            <li className="breadcrumb-item"><Link href="/index-fashion">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="row">
                            {productData.map((item,index)=>{
                                return(
                                <div className="col-md-6 col-12 mb-4 pb-2" key={index}>
                                    <Product item={item}/>
                                </div>
                                )
                            })}
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mt-4 mt-sm-0 pt-sm-0">
                        <div className="card border-0 shadow sidebar sticky-bar">
                            <div className="card-body">
                                <div className="widget">
                                    <form role="search" method="get">
                                        <div className="input-group mb-3 border rounded">
                                            <input type="text" id="s" name="s" className="form-control border-0" placeholder="Search Keywords..."/>
                                            <button type="submit" className="input-group-text bg-white border-0" id="searchsubmit"><LuSearch className="title-dark"/></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="widget mt-4 pt-2">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul className="list-unstyled mt-4 mb-0 blog-categories">
                                        <li><Link href="#" className="text-dark"><FiArrowRight/> Men</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Women</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Electronics</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Jewellery</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Shoes</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Kid’s Wear</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Sports</Link></li>
                                        <li className="mt-2"><Link href="#" className="text-dark"><FiArrowRight/> Toys</Link></li>
                                    </ul>
                                </div>
                                <div className="widget mt-4 pt-2">
                                    <h5 className="widget-title">Color</h5>
                                    <ul className="list-unstyled mt-4 mb-0">
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-primary"><span className="d-none">.</span></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-danger"><span className="d-none">.</span></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-success"><span className="d-none">.</span></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-info"><span className="d-none">.</span></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-secondary"><span className="d-none">.</span></Link></li>
                                        <li className="list-inline-item"><Link href="#" className="btn btn-sm btn-icon btn-pills btn-warning"><span className="d-none">.</span></Link></li>
                                    </ul>
                                </div>
                                <div className="widget mt-4 pt-2">
                                    <h5 className="widget-title">Top Products</h5>
                                    <ul className="list-unstyled mt-4 mb-0">
                                        <li className="d-flex align-items-center">
                                            <Link href="#">
                                                <Image src='/images/shop/items/f3.png' width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                            </Link>
                                            <div className="flex-1 content ms-3">
                                                <Link href="#" className="text-dark h6">T-Shirt</Link>
                                                <h6 className="text-dark small fst-italic mb-0 mt-1">$18.00 <del className="text-danger ms-2">$22.00</del> </h6>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center mt-3">
                                            <Link href="#">
                                                <Image src='/images/shop/items/f4.png' width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                            </Link>
                                            <div className="flex-1 content ms-3">
                                                <Link href="#" className="text-dark h6">Watch</Link>
                                                <h6 className="text-dark small fst-italic mb-0 mt-1">$18.00 <del className="text-danger ms-2">$22.00</del> </h6>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center mt-3">
                                            <Link href="#">
                                                <Image src='/images/shop/items/f5.png' width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                            </Link>
                                            <div className="flex-1 content ms-3">
                                                <Link href="#" className="text-dark h6">Coffee Cup</Link>
                                                <h6 className="text-dark small fst-italic mb-0 mt-1">$18.00 <del className="text-danger ms-2">$22.00</del> </h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ShopFooter/>
        <ScrollTop/>
        </>
    )
}