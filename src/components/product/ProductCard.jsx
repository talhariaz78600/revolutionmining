import React from 'react';
import Addtocart from '../button/Addtocart';
import Image from 'next/image';
const ProductCard = ({data}) => {
    return (
        <div>
            <div id="shopify-section-template--14480007495725__product-grid"
                className="shopify-section spaced-section collection-grid-section">

                <div id="ProductGridContainer">
                 <div  className="collection page-width">
                    <div className="loading-overlay gradient"></div>
                    <img src="/images/Elephants_Mesh_Grey.svg"
                        className="bg_collection" />
                    <ul id="product-grid" data-id="template--14480007495725__product-grid"
                        className="grid grid--1-col negative-margin product-grid  grid--3-col-desktop">
                    {data.map((item,index)=>{ return <li key={index} className="grid__item my-4">
                            <div className="card-wrapper h-[610px]">
                                <h3 className="card-information__text h4">
                                    {item.title}
                                </h3>
                                <div className="card-information">
                                    <div className="card-information__wrapper">

                                        <div className="product-form__input product-form__input--dropdown">
                                            <label className="form__label" htmlFor="Option-7748136468525-0">
                                                Hosted in
                                            </label>
                                            <ul className="option"><li className="active-option" data-host="USA"></li></ul>
                                            <div className="select">
                                                <select id="Option-7748136468525-0" className="select__select" name="options[Hosted in]" form="product-form-7748136468525"><option value="USA">
                                                    USA
                                                </option></select>
                                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                                    </path></svg>

                                            </div>
                                        </div>
                                        <span className="caption-large light"></span>
                                        <div className="price ">
                                            <div>
                                                <div className="price__regular">
                                                    <span className="visually-hidden1 visually-hidden--inline">Price:
                                                    </span>
                                                    <span className="price-item price-item--regular">
                                                    ${item.price}
                                                    </span>
                                                </div>
                                                <div className="price__sale">
                                                    <span className="visually-hidden visually-hidden--inline">Sale
                                                        price</span>
                                                    <span className="price-item price-item--sale price-item--last">
                                                       ${item.price}
                                                    </span>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="card-detail">
                                            <p className="py-3" data-mce-fragment="1">• Machines: <strong> {item.machines}</strong>
                                            </p>
                                            <p>• Condition: {item.condition}</p>
                                            {item.power &&<p>• {item.power}</p>}
                                            <p>• Hosting Fee: ${item.hostingfee}/month</p>
                                            <p>• Revolution Texas Facility </p>
                                            <p>• Online Date: June 2024</p>
                                        </div>


                                        <product-form className="product-form">
                                            <div className="product-form__error-message-wrapper" role="alert" hidden>
                                                <svg aria-hidden="true" focusable="false" role="presentation"
                                                    className="icon icon-error" viewBox="0 0 13 13">
                                                    <circle cx="6.5" cy="6.50049" r="5.5" stroke="white"
                                                        strokeWidth="2" />
                                                    <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B"
                                                        strokeWidth="0.7" />
                                                    <path
                                                        d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z"
                                                        fill="white" />
                                                    <path
                                                        d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z"
                                                        fill="white" stroke="#EB001B" strokeWidth="0.7" />
                                                </svg>
                                                <span className="product-form__error-message"></span>
                                            </div>

                                            <Addtocart item={item} />
                                        </product-form>
                                    </div>

                                </div>

                                <div className="card card--product card--outline" tabIndex="-1">
                                    <div className="card__inner">
                                        <div>
                                            <div className="media--transparent media--adapt media--hover-effect"
                                            >
                                                <Image
                                                    src={item.imageUrl}
                                                    alt='productCard'
                                                    className='w-full h-[250px] transition duration-400 ease-in-out hover:scale-110'

                                                    width="540" height="540" />

                                            </div>
                                        </div>
                                        <div className="card__badge"></div>
                                    </div>
                                </div>
                            </div>

                        </li>})  }

                    </ul>
                </div>
                 
                </div>


            </div>
        </div>
    );
}

export default ProductCard;