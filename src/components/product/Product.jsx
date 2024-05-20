import React from 'react';
import ProductCard from './ProductCard';
const Product = ({ title, description, data, filter }) => {
    return (
        <div>
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">

                <section id="shopify-section-template--14480007495725__rich_text_fAnEnD"
                    className="shopify-section spaced-section spaced-section--full-width">
                    <div className="page-width">
                        <div className="rich-text color-background-1 gradient">
                            <div className="rich-text__blocks">
                                <h1 className="h1">{title}</h1>
                                <div className="rich-text__text rte">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {filter && <facet-filters-form className="facets small-hide">
                            <form id="FacetFiltersForm" className="facets__form">
                                <div className="facet-filters sorting caption">
                                    <div className="facet-filters__field">
                                        <h2 className="facet-filters__label caption-large text-body">
                                            <label htmlFor="SortBy">Sort by:</label>
                                        </h2>
                                        <div className="select"><select name="sort_by" className="facet-filters__sort select__select caption-large" id="SortBy" aria-describedby="a11y-refresh-page-message"><option value="manual">Featured</option><option value="best-selling">Best selling</option><option value="title-ascending">Alphabetically, A-Z</option><option value="title-descending">Alphabetically, Z-A</option><option value="price-ascending">Price, low to high</option><option value="price-descending">Price, high to low</option><option value="created-ascending">Date, old to new</option><option value="created-descending">Date, new to old</option></select>
                                            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                                </path></svg>
                                        </div>
                                    </div>
                                    <noscript>
                                        <button type="submit" className="facets__button-no-js button button--tertiary">Sort</button>
                                    </noscript>
                                </div><div className="product-count light" role="status">
                                    <h2 className="product-count__text text-body well-changing">
                                        <span id="ProductCountDesktop">{data.length} products
                                        </span>
                                    </h2>
                                    <div className="loading-overlay__spinner">
                                        <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="path" fill="none" strokeWidth="6" cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </form>
                        </facet-filters-form>}
                    </div>
                </section>
                <ProductCard data={data} />

            </main>
        </div>
    );
}

export default Product;
