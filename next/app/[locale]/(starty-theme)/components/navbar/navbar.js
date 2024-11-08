'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from 'react-scroll';

export default function Navbar(){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setScroll(window.scrollY > 50)
          }
          if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
            window.scrollTo(0, 0);
          }
          return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
      }, []);

      const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="px-lg-5 mx-lg-5">
                            <Link className="logo" href="/">
                                <Image src='/images/logo-dark.png' width={102} height={28} alt=""/>
                            </Link>

                            <div className="menu-extras">
                                <div className="menu-item">
                                    <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                        <div className="lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <ul className="buy-button list-inline mb-0">                    
                                <li className="list-inline-item ps-1 mb-0">
                                    <Link href="https://1.envato.market/starty-next" target="_blank">
                                        <div className="btn btn-primary">Download</div>
                                    </Link>
                                </li>
                            </ul>
                    
                            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                                <ul className="navigation-menu nav-right" id="navmenu-nav">
                                    <li className="has-submenu">
                                        <Link1 to="home" activeClass="active" spy={true} smooth={true} duration={500}>Home</Link1>
                                    </li>
                                    <li className="has-submenu">
                                        <Link1 to="demos" activeClass="active" spy={true} smooth={true} duration={500}>Demos</Link1>
                                    </li>
                                    <li className="has-submenu">
                                        <Link1 to="service" activeClass="active" spy={true} smooth={true} duration={500}>Features</Link1>
                                    </li>
                                    <li className="has-submenu">
                                        <Link1 to="inner" activeClass="active" spy={true} smooth={true} duration={500}>Inner pages</Link1>
                                    </li>
                                    <li className="has-submenu">
                                        <Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank">Hire us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}