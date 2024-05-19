// "use client"
import React from 'react';
import Image from 'next/image';
import "../../assets/css/section-image-banner.css"
import Link from 'next/link';
const HostheroSection = () => {
    return (
        <div>
            <section id="shopify-section-template--14564505059373__1645105916ac439fac" className="shopify-section spaced-section spaced-section--full-width">
                <div id="Banner-template--14564505059373__1645105916ac439fac" className="banner banner--content-align-left banner--content-align-mobile-left banner--medium banner--adapt banner--desktop-transparent">
                    <div className="banner__media media">
                        <Image srcSet="/images/Elephants-mesh4.jpg" sizes="100vw" src="/images/Elephants-mesh4.jpg" loading="lazy" alt="well image" width="2498" height="1150" className="small-hide" />
                        <Image srcSet="/images/Elephants-mesh4.jpg" sizes="100vw" src="/images/Elephants-mesh4.jpg" loading="lazy" alt="" width="419" height="509" className=" medium-hide large-up-hide"/>
                    </div>
                    <div className="banner__content banner__content--top-left page-width">
                        <div className="banner__box color-accent-1">
                            <div className="banner__heading h1">
                                <span></span>
                            </div>
                            <div className="banner__sub_heading h3">
                                <span>Safe and Reliable Bitcoin Mining Equipment Hosting</span>
                            </div>
                            <div className="banner__text body">
                                <p>
                                    ✓ 24/7 Monitoring &amp; Support&nbsp;<br />
                                    ✓ 98% Yearly Uptime&nbsp;<br />
                                    ✓ Secure Location with Video Surveillance<br />
                                    ✓ On-Site Diagnostics &amp; Repairs<br />
                                    ✓ 27 years of IT and Datacenter Experience
                                </p>
                            </div>
                            <div className="banner__buttons banner__buttons--multiple">
                                <Link href="/collections/asics" className="button button--primary">Buy &amp; Host</Link>
                                <Link href="/pages/host-only" className="button button--primary">Host Only</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HostheroSection;

