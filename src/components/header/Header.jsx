"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Headernav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <div id="shopify-section-header"  style={{backgroundColor:"rgb(9 7 19)"}} className="shopify-section">



                <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
                    <symbol id="icon-search" viewBox="0 0 18 19" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z"
                            fill="currentColor" />
                    </symbol>

                    <symbol id="icon-close" className="icon icon-close" fill="none" viewBox="0 0 18 17">
                        <path
                            d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                            fill="currentColor" />
                    </symbol>
                </svg>
                <sticky-header className="header-wrapper color-background-1 gradient header-wrapper--border-bottom">
                    <header className="header header--middle-left page-width header--has-menu"><header-drawer
                        data-breakpoint="tablet">
                        <details id="Details-menu-drawer-container" className="menu-drawer-container">
                            <summary className="header__icon header__icon--menu header__icon--summary link focus-inset"
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                        role="presentation" className="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
                                        <path
                                            d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                                            fill="currentColor" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                        role="presentation" className="icon icon-close" fill="none" viewBox="0 0 18 17">
                                        <path
                                            d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                                            fill="currentColor" />
                                    </svg>

                                </span>
                            </summary>
                            <div id="menu-drawer" className={` motion-reduce ${isMenuOpen ? 'menu-drawer--open' : ''}`} tabIndex="-1">
                                <div className="menu-drawer__inner-container">
                                    <div className="menu-drawer__navigation-container">
                                        <nav className="menu-drawer__navigation">
                                            <ul className="menu-drawer__menu list-menu" role="list">
                                                <li><a href="/collections/asics"
                                                    className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                                    Equipment
                                                </a></li>
                                                <li><a href="/pages/hosting"
                                                    className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                                    Hosting
                                                </a></li>
                                                <li><a href="/collections/specials"
                                                    className="menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active"
                                                    aria-current="page">
                                                    Specials
                                                </a></li>
                                                <li><a href="/blogs/the-revolution-blog"
                                                    className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                                    Blog
                                                </a></li>
                                                <li><a href="/pages/company"
                                                    className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                                    Company
                                                </a></li>
                                            </ul>
                                            <div className="additional center">

                                                <a href="/account/login" className="button button--primary"
                                                    id="customer_login_link">Log in</a>

                                                <a href="/pages/contact" className="button button--secondary">Contact us</a>
                                            </div>
                                        </nav>
                                        <div className="menu-drawer__utility-links"><a href="/account/login"
                                            className="menu-drawer__account link focus-inset h5">
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                                role="presentation" className="icon icon-account" fill="none"
                                                viewBox="0 0 18 19">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                                                    fill="currentColor" />
                                            </svg>

                                            Log in</a>
                                            <ul className="list list-social list-unstyled" role="list">
                                                <li className="list-social__item">
                                                    <a href="https://twitter.com/RevolMining"
                                                        className="list-social__link link"><svg aria-hidden="true"
                                                            focusable="false" role="presentation" className="icon icon-twitter"
                                                            viewBox="0 0 18 15">
                                                            <path fill="currentColor"
                                                                d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z" />
                                                        </svg>
                                                        <span className="visually-hidden">Twitter</span>
                                                    </a>
                                                </li>
                                                <li className="list-social__item">
                                                    <a href="https://www.facebook.com/RevolMining"
                                                        className="list-social__link link"><svg aria-hidden="true"
                                                            focusable="false" role="presentation" className="icon icon-facebook"
                                                            viewBox="0 0 18 18">
                                                            <path fill="currentColor"
                                                                d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z" />
                                                        </svg>
                                                        <span className="visually-hidden">Facebook</span>
                                                    </a>
                                                </li>
                                                <li className="list-social__item">
                                                    <a href="https://www.instagram.com/revolutionmining"
                                                        className="list-social__link link"><svg aria-hidden="true"
                                                            focusable="false" role="presentation"
                                                            className="icon icon-instagram" viewBox="0 0 18 18">
                                                            <path fill="currentColor"
                                                                d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z" />
                                                            <path fill="currentColor"
                                                                d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z" />
                                                        </svg>
                                                        <span className="visually-hidden">Instagram</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </header-drawer><a href="/" className="header__heading-link link link--text focus-inset"><img
                        srcSet="//www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_190x.png?v=1679084013 1x, //www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_190x@2x.png?v=1679084013 2x"
                        src="//www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_190x.png?v=1679084013"
                        loading="lazy" className="header__heading-logo" width="1005" height="191"
                        alt="Revolution Mining" /></a>
                        <nav className="header__inline-menu">
                            <ul className="list-menu list-menu--inline" role="list">
                                <li><a href="/collections/asics"
                                    className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Equipment</span>
                                </a></li>
                                <li><a href="/pages/hosting"
                                    className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Hosting</span>
                                </a></li>
                                <li><a href="/collections/specials"
                                    className="header__menu-item header__menu-item list-menu__item link link--text focus-inset"
                                    aria-current="page">
                                    <span className="header__active-menu-item">Specials</span>
                                </a></li>
                                <li><a href="/blogs/the-revolution-blog"
                                    className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Blog</span>
                                </a></li>
                                <li><a href="/pages/company"
                                    className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Company</span>
                                </a></li>
                            </ul>
                        </nav>
                        <div className="header__icons">


                            <a href="/cart" className="header__icon header__icon--cart link focus-inset" id="cart-icon-bubble"><svg
                                className="icon icon-cart-empty" aria-hidden="true" focusable="false" role="presentation"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M551.991 64H129.28l-8.329-44.423C118.822 8.226 108.911 0 97.362 0H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h78.72l69.927 372.946C150.305 416.314 144 431.42 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-17.993-7.435-34.24-19.388-45.868C506.022 391.891 496.76 384 485.328 384H189.28l-12-64h331.381c11.368 0 21.177-7.976 23.496-19.105l43.331-208C578.592 77.991 567.215 64 551.991 64zM240 448c0 17.645-14.355 32-32 32s-32-14.355-32-32 14.355-32 32-32 32 14.355 32 32zm224 32c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm38.156-192H171.28l-36-192h406.876l-40 192z">
                                </path>
                            </svg><span className="visually-hidden">Cart</span></a>
                            <div className="header__right medium-hide small-hide">


                                <a href="/account/login" className="button button--primary" id="customer_login_link">Log in</a>


                                <a href="/pages/contact" className="button button--secondary">Contact us</a>

                            </div>
                        </div>
                    </header>
                </sticky-header>
            </div>
        </div>
    );
}

export default Headernav;
