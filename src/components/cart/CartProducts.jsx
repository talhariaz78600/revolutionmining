"use client"
import React from 'react';
import "../../assets/css/component-price.css"
import "../../assets/css/component-totals.css"
import "../../assets/css/component-discount.css"
import "../../assets/css/component-totals.css"
import "../../assets/css/component-cart.css"
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import Link from 'next/link';
const CartProducts = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userProfile = localStorage.getItem('userprofile');
            const data = JSON.parse(userProfile)
            console.log(data);
            if (data && data.sessionExpiration > new Date()) {
                setUser(data);
            } else {
                localStorage.removeItem('userprofile')
                setUser(null);
                // localStorage.removeItem("userdata")
            }
        }
    }, []);
    const router = useRouter();
    const data = usePathname()
    const searchParams = useSearchParams();

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'))

        console.log(savedCart)
        if (savedCart) {
            const newTotal = savedCart.reduce((acc, item) => {
                return acc + (item.price + item.hostingfee + item.deposit + item.monthlysupport + item.installation) * item.totalitem;
            }, 0);

            setTotal(newTotal);
        }
        setCart(savedCart);
    }, [searchParams]);


    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item._id !== product._id);
        setCart(updatedCart);
        setTimeout(() => {
            router.push(`/cart?productremove=${updatedCart.length}`);
        }, 1000);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    const changeitem=(item)=>{
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        let datapro = savedCart.find((product) => product._id === item._id);
        if (datapro && datapro.totalitem<Number(datapro.machines)) {
          let index=savedCart.findIndex((product) => product._id === item._id);
          datapro.totalitem=datapro.totalitem+1;
          console.log(datapro);
          savedCart[index]=datapro;
          localStorage.setItem('cart', JSON.stringify(savedCart));
          const total=savedCart.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.totalitem;
        }, 0);
          router.push(`${data}?itemadd=${total}`);
        } 
    }

    const changeitem1=(item)=>{
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        let datapro = savedCart.find((product) => product._id === item._id);
        if (datapro  && datapro.totalitem>1) {
          let index=savedCart.findIndex((product) => product._id === item._id);
          datapro.totalitem=datapro.totalitem-1;
          console.log(datapro);
          savedCart[index]=datapro;
          localStorage.setItem('cart', JSON.stringify(savedCart));
          const total=savedCart.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.totalitem;
        }, 0);
          router.push(`${data}?itemremove=${total}`);
        } 
    }


    return (
        <div>

            {cart && cart.length > 0 ? <div className="page-width"><div className="grid">
                <div id="shopify-section-template--14480007331885__1645454626d58461e3" className="shopify-section side-cart-items">
                    <cart-items className="side-cart">
                        <div className="title-wrapper-with-link hidden">
                            <h1 className="title title--primary">Your cart</h1>
                        </div>
                        <form action="/cart" className="cart__contents critical-hidden" method="post" id="cart">
                            <div className="cart__items" id="main-cart-items" data-id="template--14480007331885__1645454626d58461e3">
                                <div className="js-contents"><div className="cart-items">
                                    <h3 className="title">Equipment Purchase</h3>
                                    {cart.map((item, index) => {
                                        return <div key={item._id} className="cart-item mydiv" id="CartItem-1">
                                            <div className="cart-item-wrapper">
                                                <div className="cart-item__media">


                                                    <a href="/products/bitcoin-mining-equipment-antminer-ka3-166-th?variant=41484463046701" className="cart-item__link" aria-hidden="true" tabindex="-1"> </a>
                                                    <img className="cart-item__image" src={item.imageUrl} loading="lazy" width="150" height="127" />

                                                </div>

                                                <div className="cart-item__details"><a href="/products/bitcoin-mining-equipment-antminer-ka3-166-th?variant=41484463046701" className="cart-item__name h4 break">{item.title}</a>


                                                    <dl><div className="product-option"><b>
                                                        {item.power}</b>

                                                    </div><br />
                                                        <div className="product-option">
                                                            <dt>$0.069/kWh hosting rate: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>${item.hostingfee}/month hosting fee: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>12 month hosting plan: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>{item.date} online date: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>Revolution Texas Facility: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>Security and Surveillance: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>24/7 Monitoring &amp; Support: </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><div className="product-option">
                                                            <dt>In-House Diag &amp; Repair : </dt>
                                                            <dd>✓
                                                            </dd>
                                                        </div><br />
                                                    </dl>

                                                    <p className="product-option"></p><ul className="discounts list-unstyled" role="list" aria-label="Discount"></ul>
                                                </div>

                                                <div className="cart-item__quantity ">
                                                    <div className="">
                                                    {/* <label className="visually-hidden" for="Quantity-1">
                                               Quantity
                                           </label> */}
                                                    <div className="flex mb-10">
                                                        <button onClick={()=>{changeitem(item)}} className="text-white border border-white  px-4 py-0" name="minus" type="button">
                                                            <span className="visually-hidden">Decrease quantity for Antminer KA3 166 TH</span>
                                                          
                                                                    +
                                                        </button>
                                                        <p className=' p-4'>{item.totalitem}</p>
                                                        <button onClick={()=>{changeitem1(item)}} className="text-white border border-white  px-4 py-0" name="plus" type="button">
                                                            <span className="visually-hidden">Increase quantity for Antminer KA3 166 TH</span>
                                                       
                                                            -
                                                        </button>

                                                    </div>

                                                    <cart-remove-button >
                                                        <button className="button button--tertiary" onClick={() => { removeFromCart(item) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" className="icon icon-remove">
                                                                <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                                                <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                                                            </svg>

                                                        </button>
                                                    </cart-remove-button>
                                                     </div>
                                                    <div className="cart-item__error" id="Line-item-error-1" role="alert">
                                                        <small className="cart-item__error-text"></small>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="cart-item__totals right">
                                                <div className="loading-overlay hidden">
                                                    <div className="loading-overlay__spinner">
                                                        <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                                            <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="continue-shopping">
                                                </div>

                                                <div className="cart-item__price-wrapper">
                                                    <span>Total cost</span><span className="price price--end"><span className="Bold-theme-hook-DO-NOT-DELETE bold_cart_total" ></span>
                                                        ${(item.price + item.hostingfee + item.deposit + item.monthlysupport + item.installation) * item.totalitem}
                                                    </span></div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                                </div>
                            </div>
                            <p className="visually-hidden" id="cart-live-region-text" aria-live="polite" role="status" aria-hidden="true">New subtotal: $5,377.00 USD
                            </p>
                            <p className="visually-hidden" id="shopping-cart-line-item-status" aria-live="polite" aria-hidden="true" role="status">Loading...</p>
                            <input name="checkout" type="hidden" value="" /></form>
                    </cart-items>


                </div><div id="shopify-section-template--14480007331885__cart-footer" className="shopify-section cart__footer-wrapper">


                    <div className="page-width" id="main-cart-footer" data-id="template--14480007331885__cart-footer">
                        <div>
                            <div className="cart__footer">
                                <h3 className="title">Order Summary</h3><div className="cart__blocks">

                                    {cart.map((item, index) => {
                                        return <div className="js-contents" key={index}>
                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"><span className="main-price"> {item.totalitem} </span> x {item.title}</div>
                                                <div className="js-itemprice">${item.price * item.totalitem}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle">  {item.totalitem} x Monthly Hosting</div>
                                                <div className="js-itemprice">${item.hostingfee * item.totalitem}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"> {item.totalitem} x Monthly Support</div>
                                                <div className="js-itemprice">${item.monthlysupport * item.totalitem}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"> {item.totalitem} x Setup &amp; Installation</div>
                                                <div className="js-itemprice">${item.installation * item.totalitem}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle">  {item.totalitem} x Deposit</div>
                                                <div className="js-itemprice">$ {item.deposit * item.totalitem}</div>
                                            </div>

                                        </div>
                                    })}
                                    <div className="js-contents">
                                        <div className="totals">
                                            <h3 className="totals__subtotal">Total Due Today:</h3>
                                            <p className="totals__subtotal-value"><span className="Bold-theme-hook-DO-NOT-DELETE bold_cart_total"></span><span>${total}</span></p>
                                        </div>

                                        <div></div>

                                    </div>
                                    <div className="buttons-wrapper">

                                        <div className="cart__ctas">
                                            <button type="button" id="btn_place_order" className="cart__checkout-button button--order button" onClick={() => {
                                                if (user) {

                                                    router.push("/payment")
                                                } else {
                                                    router.push("/authentication")
                                                }
                                            }} name="checkout" form="cart" value="Place Order">Place Order</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> : <cart-items className="mt-5">
                <div className=" md:mx-40 mx-4">
                    <h1 className=" mt-20 ">Your cart is empty</h1>
                    <Link href="/collections/asics" className="my-10 button">
                        Continue shopping
                    </Link><h2 className="">Have an account?</h2>
                    <p className="">
                        <Link href="/authentication" className="link underlined-link mt-5">Log in</Link> to check out faster.
                    </p></div>

            </cart-items>}


        </div>


    );
}

export default CartProducts;
