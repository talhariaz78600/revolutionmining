"use client"
import React, { useState, useEffect } from 'react';
import "../../assets/css/component-price.css";
import "../../assets/css/component-totals.css";
import "../../assets/css/component-discount.css";
import "../../assets/css/component-cart.css";
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const CartProducts = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userProfile = localStorage.getItem('userprofile');
            const data = JSON.parse(userProfile);
            if (data && new Date(data.sessionExpiration) > new Date()) {
                setUser(data);
            } else {
                localStorage.removeItem('userprofile');
                setUser(null);
            }
        }
    }, []);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setCart(savedCart);
            const newTotal = savedCart.reduce((acc, item) => acc + item.price + item.hostingfee + item.installation + item.deposit + item.monthlysupport, 0);
            setTotal(newTotal);
        }
    }, []);

    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item._id !== product._id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);

        const newTotal = updatedCart.reduce((acc, item) => acc + item.price + item.hostingfee + item.installation + item.deposit + item.monthlysupport, 0);
        setTotal(newTotal);

        const params = new URLSearchParams(searchParams.toString());
        params.set('deleteitem', String(cart.length - 1));
        router.replace(`?${params.toString()}`, undefined, { shallow: true });
    };


    return (
        <div>
            {cart && cart.length>0? <div className="page-width"><div className="grid">
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
                                        return <div key={index} className="cart-item mydiv" id="CartItem-1">
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
                                                            <dt>July 2024 online date: </dt>
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

                                                <div className="cart-item__quantity "><div className="cart-item__quantity-wrapper">
                                                    {/* <label className="visually-hidden" for="Quantity-1">
                                               Quantity
                                           </label> */}
                                                    {/* <quantity-input className="flex">
                                               <button className="quantity__button w-2 no-js-hidden" name="minus" type="button">
                                                   <span className="visually-hidden">Decrease quantity for Antminer KA3 166 TH</span>
                                                   <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-minus" fill="none" viewBox="0 0 10 2">
                                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
                                                       </path></svg>

                                               </button>
                                               <p className=''>1</p>
                                               <button className="quantity__button w-2 no-js-hidden" name="plus" type="button">
                                                   <span className="visually-hidden">Increase quantity for Antminer KA3 166 TH</span>
                                                   <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-plus" fill="none" viewBox="0 0 10 10">
                                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
                                                       </path></svg>

                                               </button>

                                           </quantity-input> */}

                                                    <cart-remove-button id="Remove-1" data-index="1">
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
                                                        ${item.price + item.hostingfee + item.deposit + item.monthlysupport + item.installation}
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
                                                <div className="js-itemtitle"><span className="main-price"> 1 </span> x {item.title}</div>
                                                <div className="js-itemprice">${item.price}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"> 1 x Monthly Hosting</div>
                                                <div className="js-itemprice">${item.hostingfee}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"> 1 x Monthly Support</div>
                                                <div className="js-itemprice">${item.monthlysupport}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"> 1 x Setup &amp; Installation</div>
                                                <div className="js-itemprice">${item.installation}</div>
                                            </div>


                                            <div className="js-cartitem">
                                                <div className="js-itemtitle"> 1 x Deposit</div>
                                                <div className="js-itemprice">${item.deposit}</div>
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
                                            <button type="button" id="btn_place_order" className="cart__checkout-button button--order button" onClick={()=>{
                                               if(user){

                                                   router.push("/payment")
                                               }else{
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
