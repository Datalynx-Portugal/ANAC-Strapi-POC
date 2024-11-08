import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSidebar({search}){
    let recentPost =[
        {
            image:'/images/blog/01.jpg',
            title:'Consultant Business',
            date:'13th March 2023'
        },
        {
            image:'/images/blog/02.jpg',
            title:'Grow Your Business',
            date:'5th May 2023'
        },
        {
            image:'/images/blog/03.jpg',
            title:'Look On The Glorious Balance',
            date:'19th June 2023'
        },
    ]
    
return(
    <div className="sidebar sticky-bar">
        {search === true ? 
            <div className="widget">
                <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Search</h6>
                <div id="search2" className="widget-search mt-4 mb-0">
                    <form role="search" method="get" id="searchform" className="searchform">
                        <div>
                            <input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..."/>
                            <input type="submit" id="searchsubmit" value="Search"/>
                        </div>
                    </form>
                </div>
            </div> :
                <div className="widget">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Author</h6>
                    
                    <div className="mt-4 text-center">
                        <Image src='/images/client/05.jpg' width={0} height={0} sizes="100vw" style={{width:'85px', height:'auto'}} className="avatar avatar-medium rounded-circle mx-auto d-block" alt=""/>

                        <div className="mt-3">
                            <Link href="/blog-author" className="text-dark h5">Maria Brown</Link>
                            <p className="text-muted mb-0">Journalist / Photographer</p>
                        </div>
                    </div>
                </div>
            }
      
        <div className="widget mt-4 pt-2">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Catagories</h6>
            <ul className="list-unstyled mt-4 mb-0 catagories">
                <li className="d-flex justify-content-between"><Link href="#" className="title text-dark">Finance</Link> <span>13</span></li>
                <li className="d-flex justify-content-between mt-2"><Link href="#" className="title text-dark">Business</Link> <span>09</span></li>
                <li className="d-flex justify-content-between mt-2"><Link href="#" className="title text-dark">Blog</Link> <span>18</span></li>
                <li className="d-flex justify-content-between mt-2"><Link href="#" className="title text-dark">Corporate</Link> <span>20</span></li>
                <li className="d-flex justify-content-between mt-2"><Link href="#" className="title text-dark">Investment</Link> <span>22</span></li>
            </ul>
        </div>
        <div className="widget mt-4 pt-2">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
            <div className="mt-4">
                {recentPost.map((item,index)=>{
                    return(
                        <div className="d-flex align-items-center mt-3" key={index}>
                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'auto', height:'65px'}} className="avatar avatar-small rounded" alt=""/>
                            <div className="flex-1 ms-3">
                                <Link href="#" className="d-block title text-dark">{item.title}</Link>
                                <span className="text-muted">{item.date}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="widget mt-4 pt-2 text-center">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
            <div className="tagcloud mt-4">
                <Link href="#" className="rounded text-dark">Business</Link>
                <Link href="#" className="rounded text-dark">Finance</Link>
                <Link href="#" className="rounded text-dark">Marketing</Link>
                <Link href="#" className="rounded text-dark">Fashion</Link>
                <Link href="#" className="rounded text-dark">Bride</Link>
                <Link href="#" className="rounded text-dark">Lifestyle</Link>
                <Link href="#" className="rounded text-dark">Travel</Link>
                <Link href="#" className="rounded text-dark">Beauty</Link>
                <Link href="#" className="rounded text-dark">Video</Link>
                <Link href="#" className="rounded text-dark">Audio</Link>
            </div>
        </div>
    </div>
    )
}