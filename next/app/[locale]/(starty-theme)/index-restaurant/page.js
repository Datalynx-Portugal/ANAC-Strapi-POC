'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import {Link as Link1} from "react-scroll"
import Image from "next/image";
import dynamic from "next/dynamic";

import NavbarTwo from "../components/navbar/navbarTwo";
import RestBlog from "../components/blog/restBlog";
import RestFooter from "../components/footer/restFooter";
import ScrollTop from "../components/scrollTop";

import { manuData } from "../data/data";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Parallax } from 'react-parallax';

const WOW = dynamic(()=>import('wowjs'),{ssr:false})
import "../../../node_modules/wowjs/css/libs/animate.css"

export default function IndexRestaurant(){
    useEffect(()=>{
        document.body.classList.add('restaurant-css');
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            live: true
          });
    },[])

    let [selectedCategory, setSelectedCategory] = useState(null);
    let matchCategory = (category) => {
        setSelectedCategory(category);
    };

    let filteredData = selectedCategory
        ? manuData.filter((item) => item.category === selectedCategory)
        : manuData;

        let serviceData = [
            {
                image:'/images/icon/resto/dish.svg',
                title:'Food Meets Style',
                desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
            },
            {
                image:'/images/icon/resto/fast-food.svg',
                title:'Quality Check',
                desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
            },
            {
                image:'/images/icon/resto/take-away.svg',
                title:'Opens 24/7',
                desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
            },
            {
                image:'/images/icon/resto/tray.svg',
                title:'Home Delivery',
                desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
            },
        ]
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light"/>
         <section className="home-slider position-relative" id="home">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false} showThumbs={false}>
                <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/rest01.jpg')"}}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <h5 className="text-light title-dark animated wow fadeInDownBig animation-delay-1">Welcome to our delicious corner</h5>
                                            <h1 className="display-1 fw-semibold text-uppercase mb-3 text-white text-shadow-dark-lg title-dark animated wow fadeInUpBig animation-delay-3">The Best Dishes</h1>
                                            <p className="para-desc text-white-50 para-dark mx-auto animated wow fadeInUpBig animation-delay-5">We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better and magical.</p>
                                            <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-7">
                                                <Link1 to="menulist" smooth={true} duration={500} className="btn btn-font-sm btn-pills-0 btn-lg btn-light text-uppercase mt-2">View Our Menu</Link1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/rest02.jpg')"}}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">
                                    <div className="title-heading mt-4">
                                        <h5 className="text-light title-dark animated wow fadeInDownBig animation-delay-1">Take a sip of our innovative drinks</h5>
                                        <h1 className="display-1 fw-semibold text-uppercase mb-3 text-white text-shadow-dark-lg title-dark wow animated fadeInUpBig animation-delay-3">The Finest Drinks</h1>
                                        <p className="para-desc text-white-50 para-dark mx-auto animated wow fadeInUpBig animation-delay-5">From the delicious food to wonderful cocktails, Laurent’s offer is guaranteed to satisfy all of your taste buds.</p>
                                        <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-7">
                                            <Link href="#" className="btn btn-font-sm btn-pills-0 btn-lg btn-light text-uppercase mt-2">View more</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active" data-bs-interval="3000">
                    <div className="bg-home d-flex align-items-center" style={{backgroundImage:"url('/images/bg/rest03.jpg')"}}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <h5 className="text-light title-dark animated wow fadeInDownBig animation-delay-1">The most delicious flavor combos</h5>
                                            <h1 className="display-1 fw-semibold text-uppercase mb-3 text-white text-shadow-dark-lg title-dark animated wow fadeInUpBig animation-delay-3">The Food Heaven</h1>
                                            <p className="para-desc text-white-50 para-dark mx-auto animated fadeInUpBig wow animation-delay-5">Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking.</p>
                                            <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-7">
                                                <Link1 to="about" smooth={true} duration={500} className="btn btn-font-sm btn-pills-0 btn-lg btn-light text-uppercase mt-2">View more</Link1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </Carousel>
        </section>

        <section className="section pb-0">
            <div className="container">
                <div className="row justify-content-center" id="about">
                    <div className="col-lg-9 text-center">
                        <div className="section-title mb-4">
                            <h6 className="text-primary">Our Story</h6>
                            <h4 className="title text-uppercase fw-bold mb-4">About Restaurant</h4>
                            <p className="text-muted mx-auto para-desc">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                            <p className="text-muted mx-auto mt-4">At the foot of the mountains overlooking the sea, a stone’s throw from Italian border post, the 1930s-era rotunda building housing the Starty enjoys an idyllic setting. At the Starty, nothing is immutable; everything changes with the seasons, available produce, and the inspiration of the chef. Down a few steps, the orchard garden full of fragrant herbs and citrus is a precious source of inspiration for Mauro Colagreco when dreaming up his dishes.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link href="/page-aboutus" className="btn btn-font-sm btn-pills-0 btn-lg btn-primary text-uppercase mt-2">Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Image src='/images/bg/rest-about.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="position-relative overflow-hidden w-100" id="menulist">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage='/images/bg/rest-menu.jpg'
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="section">
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-0">
                                <h4 className="title text-white title-dark fw-bold text-uppercase mb-4">Restaurant Special</h4>
                                <p className="text-white-50 mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section pt-5 bg-white" style={{backgroundImage:"url('/images/bg/rest-menu.png')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay-white"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                <li className={`${selectedCategory === null ? 'active' : ''} list-inline-item categories text-uppercase position-relative`} onClick={() => matchCategory(null)}>All</li>
                                <li className={`${selectedCategory === "break" ? 'active' : ''} list-inline-item categories text-uppercase position-relative`} onClick={() => matchCategory("break")}>Breakfast</li>
                                <li className={`${selectedCategory === "lunch" ? 'active' : ''} list-inline-item categories text-uppercase position-relative`} onClick={() => matchCategory("lunch")} data-group="lunch">Lunch</li>
                                <li className={`${selectedCategory === "dinner" ? 'active' : ''} list-inline-item categories text-uppercase position-relative`} onClick={() => matchCategory("dinner")} data-group="dinner">Dinner</li>
                                <li className={`${selectedCategory === "tea" ? 'active' : ''} list-inline-item categories text-uppercase position-relative`} onClick={() => matchCategory("tea")} data-group="tea">Tea & Coffee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div id="grid" className="row">
                    {filteredData.map((item,index)=>{
                        return(
                            <div className="col-lg-6 col-md-6 picture-item" key={index}>
                                <div className="portfolio portfolio-primary d-flex align-items-center p-2 pt-3 pb-3">
                                    <Image src={item.image} width={80} height={80} className="img-fluid shadow rounded-pill avatar avatar-md-md shadow-md" alt="img"/>
                                    <div className="flex-1 ms-4">
                                        <div className="d-flex justify-content-between border-bottom pb-2">
                                            <Link href="#" className="text-dark title h6 mb-0 fw-semibold">{item.title}</Link>
                                            <span className="float-end fw-semibold">{item.amount}</span>
                                        </div>
                                        <p className="text-muted mb-0 mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section border-top" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h6 className="text-primary">Services</h6>
                            <h4 className="title text-uppercase fw-bold mb-4">Customers Services</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {serviceData.map((item, index) =>{
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                            <div className="features feature-primary text-center border-0">
                                <Image src={item.image} width={80} height={80} className="avatar avatar-md-md rounded-circle p-4 shadow-md" alt=""/>
    
                                <div className="content mt-4">
                                    <Link href="#" className="title fw-semibold h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    <div className="col-12 text-center mt-5">
                        <p className="text-muted para-desc mx-auto">Dear guests, you are welcomed to dine with us at Foxe restaurant. Have a pleasant dining experience.</p>
                        <Link1 to="book-table" smooth={true} duration={500} className="btn btn-font-sm btn-pills-0 btn-lg btn-primary text-uppercase mt-2">Book a table</Link1>
                    </div>
                </div>
            </div>
        </section>

        <section className="position-relative overflow-hidden w-100">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage='/images/bg/rest-cta.jpg'
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="section">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="bg-white shadow p-lg-5 p-4 ms-lg-5">
                                <div className="section-title mb-5">
                                    <span className="badge rounded-pill bg-soft-primary py-2 px-3 fw-semibold">Reservation</span>
                                    <h4 className="title fw-bold text-uppercase my-3">Book A Table</h4>
                                    <p className="text-muted mx-auto para-desc mb-0">We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <form>
                                    <div className="row gx-2">
                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label text-uppercase">Your Name</label>
                                                <input name="name" id="name" type="text" className="form-control rounded-0" placeholder="First Name :"/>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label text-uppercase">Your Email</label>
                                                <input name="email" id="email" type="email" className="form-control rounded-0" placeholder="Your email :"/>
                                            </div> 
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label text-uppercase">Phone no.</label>
                                                <input name="number" type="number" id="phone-number" className="form-control rounded-0" placeholder="Phone no. :"/>
                                            </div> 
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label text-uppercase">Person</label>
                                                <input type="number" min="0" autoComplete="off" id="adult" className="form-control rounded-0" required="" placeholder="Person :"/>
                                            </div> 
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label text-uppercase">Date</label>
                                                <input name="date" type="text" className="form-control start rounded-0" placeholder="(ex: mm/ dd/ yy)"/>
                                            </div> 
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <label className="form-label text-uppercase">Time</label>
                                                <input name="time" type="text" id="input-time" className="form-control timepicker rounded-0" placeholder="(ex: 8:00 p.m)"/>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-sm-12">
                                            <input type="submit" id="submit" name="send" className="btn btn-font-sm btn-pills-0 btn-primary text-uppercase w-100" value="Book a table"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <RestBlog/>
        <RestFooter/>
        <ScrollTop/>
        </>
    )
}