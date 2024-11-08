import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../components/navbar/navbarTwo";
import MobileApp from "../components/mobileApp";
import FooterFive from "../components/footer/footerFive";
import ScrollTop from "../components/scrollTop";

import { cryptoPricing } from "../data/data";
import { aboutData } from "../data/crypto";

import { FiArrowRight, AiOutlineCheckCircle} from "../assets/icons/vander"

export default function IndexCrypto(){
    return(
        <>
         <div className="tagline bg-light shadow">
            <div className="container-fluid">                
                <div className="row">
                    <div className="col-12">
                        <div className="text-slider">
                            <ul className="list-inline mb-0 move-text">
                                <li className="list-inline-item small px-2 mb-0">EOG $ 55.88 <span className="text-success">+$ 4.62 ( +9.01% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">CHKP $ 120.03 <span className="text-danger">-$ 14.07 ( -10.49% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">FANG $ 63.58 <span className="text-success">+$ 5.17 ( +8.84% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">M $ 14.75 <span className="text-success">+$ 1.05 ( +7.66% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">PKI $ 139.72 <span className="text-danger">-$ 11.41 ( -7.55% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">ABMD $ 326.23 <span className="text-danger">-$ 21.61 ( -6.21% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">BITCOIN $ 37,471.47 <span className="text-danger">+$ 492.60 ( +1.33% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">XRP <span> $ 0.39</span><span className="text-muted"> UNCH</span></li>
                                <li className="list-inline-item small px-2 mb-0">LITECOIN <span> $ 148.67</span><span className="text-danger">-$ 5.58 ( -3.62% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">BITCOIN CASH <span> $ 427.37</span><span className="text-danger">-$ 15.98 ( -3.60% )</span></li>
                                <li className="list-inline-item small px-2 mb-0">ETHEREUM $ 1,647.87 <span className="text-danger">+$ 14.51 ( +0.89% )</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavbarTwo navClass="defaultscroll tagline-height sticky" manuClass="navigation-menu nav-light nav-right"/>

        <section className="bg-half-260 d-table w-100" style={{backgroundImage:"url('/images/bg/crypto.png')"}}>
            <div className="bg-overlay bg-gradient-primary opacity-8"></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading mt-4">
                            <h4 className="display-4 fw-bold text-white title-dark mb-4">Your gateway to <br/> Cryptocurrency & beyond</h4>
                            <p className="text-white-50 para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            
                            <div className="mt-4 pt-2">
                                <Link href="#" className="btn btn-primary">Register now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">The most trusted cryptocurrency platform</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {aboutData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card features feature-primary features-classic p-4 text-center rounded-md shadow border-0">
                                <div className="fea-icon bg-soft rounded-md mx-auto">
                                    <Icon className="icon"/>
                                </div>

                                <div className="content mt-4">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="text-muted">{item.desc}</p>
                                    <Link href="/page-single-service" className="title text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-lg-center align-items-end">
                    <div className="col-md-6">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Free your money and <br/> invest with confidence</h4>
                            <p className="text-muted para-desc mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                            <ul className="list-unstyled mb-0">
                                <li className="d-flex mt-4">
                                   <AiOutlineCheckCircle className="h4 text-primary"/>
                                    <div className="flex-1 ms-3">
                                        <h6 className="mb-0">Buy, sell, and trade on the go</h6>
                                        <p className="text-muted mt-2 mb-0">Manage your holdings from your mobile device</p>
                                    </div>
                                </li>

                                <li className="d-flex mt-4">
                                    <AiOutlineCheckCircle className="h4 text-primary"/>
                                    <div className="flex-1 ms-3">
                                        <h6 className="mb-0">Take control of your wealth</h6>
                                        <p className="text-muted mt-2 mb-0">Rest assured you (and only you) have access to your funds</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-4">
                                <Link href="#" className="btn btn-primary">Download Wallet</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="">
                            <Image src='/images/crypto/hand-with-mobile.png' className="img-fluid" width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-light" style={{backgroundImage:"url('/images/crypto/wallet.png')"}}>
            <div className="container">
                <div className="row align-items-end mb-4 pb-2">
                    <div className="col-md-8">
                        <div className="section-title">
                            <h4 className="title mb-3">Buy crypto at true cost</h4>
                            <p className="text-muted para-desc mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>

                    <div className="col-md-4 d-none d-md-block">
                        <div className="text-end">
                            <Link href="/market-price" className="text-primary">See Marketplace<FiArrowRight/></Link>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 mt-4 pt-2">
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <thead>
                                    <tr>
                                        <th scope="col" className="fw-semibold border-bottom p-3" style={{minWidth:'250px'}}>Name</th>
                                        <th scope="col" className="fw-semibold border-bottom p-3" style={{width:'150px'}}>Price</th>
                                        <th scope="col" className="fw-semibold border-bottom p-3" style={{width:'150px'}}>Change(%)</th>
                                        <th scope="col" className="fw-semibold border-bottom p-3" style={{width:'150px'}}>Change($)</th>
                                        <th scope="col" className="fw-semibold border-bottom p-3" style={{width:'150px'}}>Marketcap</th>
                                        <th scope="col" className="fw-semibold border-bottom p-3 text-end" style={{width:'100px'}}>Trade</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cryptoPricing.map((item,index) =>{
                                        return(
                                        <tr key={index}>
                                            <th className="p-3">
                                                <div className="align-items-center">
                                                    <Image src={item.image} className="me-3" width={32} height={32} alt=""/>
                                                    <p className="mb-0 d-inline fw-normal h6">{item.title1} <span className="text-muted">{item.title2}</span> </p>
                                                </div>
                                            </th>
                                            <td className="p-3">{item.price}</td>
                                            <td className={item.profit === true ? "text-success p-3" :"text-danger p-3"}>{item.change1}</td>
                                            <td className={item.profit === true ? "text-success p-3" :"text-danger p-3"}>{item.change2}</td>
                                            <td className="text-muted p-3">{item.marketcap}</td>
                                            <td className="p-3 text-end"><Link href="#" className="btn btn-sm btn-soft-primary">Trade</Link></td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="d-md-flex align-items-center text-center justify-content-between">
                            <span className="text-muted me-3">Showing 1 - 10 out of 300</span>
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
            </div>
        </section>
        <section className="section">
            <div className="container">
                <MobileApp/>
            </div>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}