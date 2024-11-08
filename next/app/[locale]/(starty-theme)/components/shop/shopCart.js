'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"
import {LiaTimesSolid} from "../../assets/icons/vander"

export default function Cart(){
    let [counter, setCounter] = useState(7);
    let [counter1, setCounter1] = useState(1);
    let [counter2, setCounter2] = useState(2);
    return(
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive bg-white shadow rounded">
                        <table className="table mb-0 table-center">
                            <thead>
                                <tr>
                                    <th className="border-bottom fw-medium py-3" style={{minWidth:'20px'}}></th>
                                    <th className="border-bottom fw-medium text-start py-3" style={{minWidth:'300px'}}>Product</th>
                                    <th className="border-bottom fw-medium text-center py-3" style={{minWidth:'160px'}}>Price</th>
                                    <th className="border-bottom fw-medium text-center py-3" style={{minWidth:'160px'}}>Qty</th>
                                    <th className="border-bottom fw-medium text-end py-3 pe-4" style={{minWidth:'160px'}}>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="shop-list">
                                    <td className="h6 text-center"><Link href="#" className="text-danger"><LiaTimesSolid/></Link></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Image src='/images/shop/items/f1.png' width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                            <h6 className="mb-0 ms-3">T-Shirt</h6>
                                        </div>
                                    </td>
                                    <td className="text-center">$ 255.00</td>
                                    <td className="text-center qty-icons">
                                        <button onClick={() => setCounter(counter - 1)} className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" name="quantity" placeholder={counter}  type="number" className="mx-1 btn btn-pills btn-icon btn-primary qty-btn quantity"/>
                                        <button onClick={() => setCounter(counter + 1)} className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </td>
                                    <td className="text-end fw-medium pe-4">$ {255.00 * counter}</td>
                                </tr>

                                <tr className="shop-list">
                                    <td className="h6 text-center"><Link href="#" className="text-danger"><LiaTimesSolid/></Link></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Image src="/images/shop/items/f3.png" width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                            <h6 className="mb-0 ms-3">Cap</h6>
                                        </div>
                                    </td>
                                    <td className="text-center">$ 520.00</td>
                                    <td className="text-center qty-icons">
                                        <button onClick={() => setCounter1(counter1 - 1)} className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" name="quantity" placeholder={counter1}  type="number" className="mx-1 btn btn-pills btn-icon btn-primary qty-btn quantity"/>
                                        <button onClick={() => setCounter1(counter1 + 1)} className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </td>
                                    <td className="text-end fw-medium pe-4">${220.00 * counter1}</td>
                                </tr>

                                <tr className="shop-list">
                                    <td className="h6 text-center"><Link href="#" className="text-danger"><LiaTimesSolid/></Link></td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <Image src="/images/shop/items/f6.png" width={65} height={65} className="img-fluid avatar avatar-small rounded shadow" style={{height:'auto'}} alt=""/>
                                            <h6 className="mb-0 ms-3">T-Shirt</h6>
                                        </div>
                                    </td>
                                    <td className="text-center">$ 160.00</td>
                                    <td className="text-center qty-icons">
                                        <button onClick={() => setCounter2(counter2 - 1)} className="btn btn-pills btn-icon btn-primary minus">-</button>
                                        <input min="0" name="quantity" placeholder={counter2}  type="number" className="mx-1 btn btn-pills btn-icon btn-primary qty-btn quantity"/>
                                        <button onClick={() => setCounter2(counter2 + 1)} className="btn btn-pills btn-icon btn-primary plus">+</button>
                                    </td>
                                    <td className="text-end fw-medium pe-4">${160.00 * counter2}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-6 mt-4 pt-2">
                    <Link href="#" className="btn btn-primary">Shop More</Link>
                    <Link href="#" className="btn btn-soft-primary ms-2">Update Cart</Link>
                </div>
                <div className="col-lg-4 col-md-6 ms-auto mt-4 pt-2">
                    <div className="table-responsive bg-white rounded shadow">
                        <table className="table table-center table-padding mb-0">
                            <tbody>
                                <tr>
                                    <td className="h6 ps-4 py-3">Subtotal</td>
                                    <td className="text-end fw-medium pe-4">$ 2190</td>
                                </tr>
                                <tr>
                                    <td className="h6 ps-4 py-3">Taxes</td>
                                    <td className="text-end fw-medium pe-4">$ 219</td>
                                </tr>
                                <tr className="bg-light">
                                    <td className="h6 fw-semibold ps-4 py-3">Total</td>
                                    <td className="text-end fw-semibold pe-4">$ 2409</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 pt-2 text-end">
                        <Link href="/shop-checkout" className="btn btn-primary">Proceed to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}