"use client";
 import Link from 'next/link';
import React from 'react';

//  import "../../assets/css/section-image-banner.css"
 import Image from 'next/image';
import Newsletter from '@/components/home/Newsletter';
import CompanyVideo from './CompanyVideo';
import CompanyCards from './CompanyCards';
import Contact from './Contact';
const Company = () => {
  return (
   <>

    {/* <section id="shopify-section-template--14818935111725__165164185700aede29" className="shopify-section spaced-section spaced-section--full-width">
      <link
        href="www.revolutionmining.io/cdn/shop/t/1/assets/section-image-banner.css?v=181383485780360605951645209879"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <div
        id="Banner-template--14818935111725__165164185700aede29"
        className="banner banner--content-align-left banner--content-align-mobile-center banner--large banner--desktop-transparent"
      >
      <div class="banner__media media">
      <img srcset="375x.png?v=1653490513 375w,750x.png?v=1653490513 750w,1100x.png?v=1653490513 1100w, 1500w,1780x.png?v=1653490513 1780w,2000x.png?v=1653490513 2000w,3000x.png?v=1653490513 3000w,3840x.png?v=1653490513 3840w,//www.revolutionmining.io/cdn/shop/files/Company-05_1.png?v=1653490513 4000w" sizes="100vw" src="" loading="lazy" alt="" width="4000" height="4289.0" class=""/>
      
    </div>
        <div className="banner__content banner__content--top-left page-width">
          <div className="banner__box color-accent-1">
            <div className="banner__heading h1">
              <span>About Us:</span>
            </div>
            <div className="banner__sub_heading h3">
              <span></span>
            </div>
            <div className="banner__text body">
              <p>Welcome to Revolution Mining, the premier source for Bitcoin mining equipment and reliable ASIC hosting.</p>
              <p>We fully-own and manage our own crypto-mining facility in West Texas, giving us full control over the mining process from purchasing, hosting, and maintenance. We deal directly with the mining community and provide outstanding service, better pricing, and enterprise-quality ASIC hosting services.</p>
              <p>Whether you're looking to establish a highly profitable Bitcoin mining farm or just looking to buy one ASIC, our team is here to help you and provide guidance at every step of your journey. As crypto-miners ourselves, we have field-tested experience giving us proven insight to share with our clients.</p>
              <p>At Revolution Mining, we make crypto-mining easy and enjoyable for everyone. We do this by working closely with you to truly understand your unique needs. By doing so, we're able to create personalized solutions for each person.</p>
              <p>As part of the launch of our new Texas facility, we’re offering a limited-time deal for new clients who purchase and host their ASICS with us. Please check out our offer page or social media platforms for more info and details.</p>
              <p>Thank you for visiting us and please feel free to contact us if you have any questions.</p>
              <p>Sincerely, The Revolution Mining Team</p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section id="" className="shopify-section spaced-section spaced-section--full-width">
      <link
        href="//www.revolutionmining.io/cdn/shop/t/1/assets/section-image-banner.css?v=181383485780360605951645209879"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <div
        id="Banner-template--14818935111725__165164185700aede29"
        className="banner banner--content-align-left banner--content-align-mobile-center banner--large banner--desktop-transparent"
      >
        <div className="banner__media media">
          <img
            src="/images/Company.png"
            sizes="100vw"
            loading="lazy"
            alt=""
            width={4000}
            height={4289}
            className=""
          />
        </div>
        <div className="banner__content banner__content--top-left page-width">
          <div className="banner__box color-accent-1">
            <div className="banner__heading h1">
              <span>About Us:</span>
            </div>
            <div className="banner__sub_heading h3">
              <span></span>
            </div>
            <div className="banner__text body">
              <p>Welcome to Revolution Mining, the premier source for Bitcoin mining equipment and reliable ASIC hosting.</p>
              <p>We fully-own and manage our own crypto-mining facility in West Texas, giving us full control over the mining process from purchasing, hosting, and maintenance. We deal directly with the mining community and provide outstanding service, better pricing, and enterprise-quality ASIC hosting services.</p>
              <p>Whether you're looking to establish a highly profitable Bitcoin mining farm or just looking to buy one ASIC, our team is here to help you and provide guidance at every step of your journey. As crypto-miners ourselves, we have field-tested experience giving us proven insight to share with our clients.</p>
              <p>At Revolution Mining, we make crypto-mining easy and enjoyable for everyone. We do this by working closely with you to truly understand your unique needs. By doing so, we're able to create personalized solutions for each person.</p>
              <p>As part of the launch of our new Texas facility, we’re offering a limited-time deal for new clients who purchase and host their ASICS with us. Please check out our offer page or social media platforms for more info and details.</p>
              <p>Thank you for visiting us and please feel free to contact us if you have any questions.</p>
              <p>Sincerely, The Revolution Mining Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CompanyVideo/>
    <CompanyCards/>
    <br></br> 
    <br></br> 
   <Contact/>
   <br></br> 
   <br></br> 
<Newsletter/>

   </>
  );
};

export default Company;
