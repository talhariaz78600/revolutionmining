import React from 'react';
import Link from 'next/link';
const Empty = () => {
    return (
        <div>
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">
                <div className="page-width"><div className="grid">
                    <div id="shopify-section-template--14480007331885__1645454626d58461e3" className="shopify-section side-cart-items">
                        <cart-items className="side-cart is-empty">
                            <div className="cart__warnings md:mx-20 mx-4">
                                <h1 className="cart__empty-text mt-20 ">Your cart is empty</h1>
                                <Link  href="/collections/asics" className="my-10 button">
                                    Continue shopping
                                </Link><h2 className="cart__login-title">Have an account?</h2>
                                <p className="cart__login-paragraph">
                                    <Link href="/authentication" className="link underlined-link mt-5">Log in</Link> to check out faster.
                                </p></div>

                        </cart-items>

                        
                    </div>

                </div></div>
            </main>

        </div>
    );
}

export default Empty;
