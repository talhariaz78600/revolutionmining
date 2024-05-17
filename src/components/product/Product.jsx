import React from 'react';
import ProductCard from './ProductCard';
const Product = () => {
    return (
        <div>
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabindex="-1">

                <section id="shopify-section-template--14480007495725__rich_text_fAnEnD"
                    className="shopify-section spaced-section spaced-section--full-width">
                    <div className="page-width">
                        <div className="rich-text color-background-1 gradient">
                            <div className="rich-text__blocks">
                                <h1 className="h1">Specials</h1>
                                <div className="rich-text__text rte">
                                    <p>Discover Exclusive Savings: Limited Quantities Available on our Special Deals and Bundles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                <ProductCard />

            </main>
        </div>
    );
}

export default Product;
