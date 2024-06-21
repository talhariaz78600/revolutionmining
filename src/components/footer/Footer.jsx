"use client"
import React from 'react';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Footer = () => {
    const [twitterUrl, setTwitterUrl] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [telegramUrl, setTelegramUrl] = useState('');
  const fetchdata=async()=>{
    try {
        const response = await axios.get(`https://revolutionbackend.vercel.app/api/media/getsinglemedia/6675a719b8c9d030b95645ec`);
        if (response && response.status === 200) {
          console.log("success" , response)
          setTwitterUrl(response.data.data.twitterUrl)
          setFacebookUrl(response.data.data.facebookUrl)
          setInstagramUrl(response.data.data.instagramUrl)
          
          setTelegramUrl(response.data.data.telegramUrl)
        }
      } catch (error) {
        
        if (error.response) {
          console.log(error);
          setError(error.response.message)
      
        } else {
          console.log("Failed to login: Invalid credentials");
  
        }
      }
  }

  useEffect(()=>{
    fetchdata();
  },[])
    return (
        <div>
            <div id="shopify-section-footer" className="shopify-section">
                <footer className="footer color-accent-2 gradient">
                    <div className="footer__content-top page-width">
                        <div className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet grid--3-col-tablet">
                            <div className="footer-block grid__item">
                                <div className="footer-block__details-content footer-block-image "><img
                                    srcSet="//www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_200x.png?v=1679084013, //www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_200x@2x.png?v=1679084013 2x"
                                    src="//www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_400x.png?v=1679084013"
                                    alt="" loading="lazy" width="1005" height="191"  style={{ maxWidth: "min(100%, 200px)" }}/>
                                </div>
                            </div>
                            <div className="footer-block grid__item">
                                <div className="footer-block__details-content rte">

                                </div>
                            </div>
                            <div className="footer-block grid__item">
                                <div className="footer-block__details-content rte">

                                </div>
                            </div>
                            <div className="footer-block grid__item">
                                <div className="footer-block__details-content rte">
                                    <p></p>
                                    <p className='my-5'><strong>Call or Text us: </strong>213-534-6525</p>
                                    <p className='my-5'><strong>Email us: </strong>team@revolutionmining.io</p>
                                    <p className='my-5'><strong>Hours:</strong><br />Mon–Fri: 8am-6pm PST<br />Sat-Sun: Closed</p>
                                </div>
                            </div>
                            <div className="footer-block grid__item">
                                <ul className="footer-block__details-content list-unstyled">
                                    <li>
                                        <Link href="/pages/terms-of-service" className="link link--text list-menu__item list-menu__item--link">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/terms-of-service"
                                            className="link link--text list-menu__item list-menu__item--link">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/terms-of-service"
                                            className="link link--text list-menu__item list-menu__item--link">
                                            Hosting Agreement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/terms-of-service"
                                            className="link link--text list-menu__item list-menu__item--link">
                                            Purchase Agreement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/terms-of-service"
                                            className="link link--text list-menu__item list-menu__item--link">
                                            Refund Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-block grid__item">
                                <ul className="footer__list-social list-unstyled list-social" role="list">
                                    <li className="list-social__item">
                                        <Link rel="nofollow" href={twitterUrl}
                                            className="link list-social__link"><svg aria-hidden="true" focusable="false"
                                                role="presentation" className="icon icon-twitter" viewBox="0 0 18 15">
                                                <path fill="currentColor"
                                                    d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z" />
                                            </svg>
                                            <span className="visually-hidden1">Twitter</span>
                                        </Link>
                                    </li>
                                    <li className="list-social__item">
                                        <Link rel="nofollow" href={facebookUrl}
                                            className="link list-social__link"><svg aria-hidden="true" focusable="false"
                                                role="presentation" className="icon icon-facebook" viewBox="0 0 18 18">
                                                <path fill="currentColor"
                                                    d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z" />
                                            </svg>
                                            <span className="visually-hidden1">Facebook</span>
                                        </Link>
                                    </li>
                                    <li className="list-social__item">
                                        <Link rel="nofollow" href={instagramUrl}
                                            className="link list-social__link"><svg aria-hidden="true" focusable="false"
                                                role="presentation" className="icon icon-instagram" viewBox="0 0 18 18">
                                                <path fill="currentColor"
                                                    d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z" />
                                                <path fill="currentColor"
                                                    d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"/>
                                            </svg>
                                            <span className="visually-hidden1">Instagram</span>
                                        </Link>
                                    </li>
                                    <li className="list-social__item">
                                        <Link rel="nofollow" href={telegramUrl}
                                            className="link list-social__link"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow"
                                                viewBox="0 0 12.537 10.562">
                                                <defs>
                                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                                                        gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stopColor="#352de8" />
                                                        <stop offset="1" stopColor="#79defc" />
                                                    </linearGradient>
                                                </defs>
                                                <path id="Tracciato_150" data-name="Tracciato 150"
                                                    d="M96.724,588.765l-11.466,4.468a.418.418,0,0,0,.033.79l2.914.86,1.087,3.45a.5.5,0,0,0,.835.2L91.634,597l2.956,2.17a.617.617,0,0,0,.969-.371l1.958-9.359a.59.59,0,0,0-.792-.67Zm-1.437,2.077-5.326,4.71a.286.286,0,0,0-.095.182l-.2,1.823a.055.055,0,0,1-.108.01l-.844-2.718a.286.286,0,0,1,.123-.328l6.289-3.9a.139.139,0,0,1,.165.222Zm0,0"
                                                    transform="translate(-84.992 -588.724)" fill="url(#linear-gradient)" />
                                            </svg><span className="visually-hidden1">Telegram</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-block--newsletter"></div>
                    </div>
                    <div className="footer__content-bottom">
                        <div className="footer__content-bottom-wrapper page-width">
                            <div className="footer__column footer__localization"></div>
                            <div className="footer__column footer__column--info">
                                <div className="footer__copyright caption">
                                    <small className="copyright__content">

                                        ©Copyright 2024, All Right Reserved
                                    </small>

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <ul hidden>
                <li id="a11y-refresh-page-message">Choosing a selection results in a full page refresh.</li>
            </ul>

        </div>
    );
}

export default Footer;
