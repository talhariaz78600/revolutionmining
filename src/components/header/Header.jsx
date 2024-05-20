"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Headernav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate=useRouter();
  const click=(rout)=>{
    navigate.push(`${rout}`)
    useState(false);
  }

  return (
    <nav className={`${menuOpen?"fixed" : ""} bg-black w-full shadow-lg `}>
      <div className="w-full mpx-8 md:px-40 py-5">
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <Link href="/" className="header__heading-link link link--text focus-inset mx-8"><img srcset="//www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_190x.png?v=1679084013 1x, //www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_190x@2x.png?v=1679084013 2x" src="//www.revolutionmining.io/cdn/shop/files/Revolution_Mining_-_white_190x.png?v=1679084013" loading="lazy" className="header__heading-logo" width="1005" height="191" alt="Revolution Mining" /></Link><nav className="header__inline-menu">
              <ul className="list-menu list-menu--inline" role="list"><li><Link href="/collections/asics" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset" aria-current="page">
                <span className="header__active-menu-item">Equipment</span>
              </Link></li><li><Link href="/pages/hosting" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Hosting</span>
              </Link></li><li><Link href="/collections/specials" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Specials</span>
              </Link></li><li><Link href="/blogs/the-revolution-blog" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Blog</span>
              </Link></li><li><Link href="/company" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Company</span>
              </Link></li></ul>
            </nav>
          </div>
          <div className='flex well-changing'>
          
              <Link href="/authentication" className="px-8 py-2 button button--primary" id="customer_login_link">Log in</Link>
              <Link href="/contact" className=" px-8 py-2  button button--secondary">Contact us</Link>
          </div>

          <div className="md:hidden flex items-center ">
            <button className="outline-none menu-button mx-2">
            {menuOpen?<i onClick={() => setMenuOpen(!menuOpen)} className="fa-solid fa-xmark text-5xl text-white"></i>:<i onClick={() => setMenuOpen(!menuOpen)} className="fa-solid fa-bars text-5xl text-white"></i>}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div id="menu-drawer" className="motion-reduce" tabIndex="-1">
          <div className="menu-drawer__inner-container">
            <div className="menu-drawer__navigation-container">
              <nav className="menu-drawer__navigation">
                <ul className="menu-drawer__menu list-menu" role="list"><li><button  onClick={click("/collections/asics")} className="menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active" aria-current="page">
                  Equipment
                </button></li><li><button  onClick={()=>{click("/pages/hosting")}} className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                  Hosting
                </button></li><li><button  onClick={()=>{click("/collections/specials")}} className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                  Specials
                </button></li><li><button  onClick={()=>{click("/blogs/the-revolution-blog")}}   className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                  Blog
                </button></li><li><button  onClick={()=>{click("/company")}} className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                  Company
                </button></li></ul>
                <div className="additional center">

                  <button  onClick={()=>{click("/authentication")}} className="button button--primary" id="customer_login_link">Log in</button >

                  <button  onClick={()=>{click("/contact")}} className="button button--secondary">Contact us</button>
                </div>
              </nav>.
              <div className="menu-drawer__utility-links"><button  onClick={()=>{click("/authentication")}} className="menu-drawer__account link focus-inset h5">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-account" fill="none" viewBox="0 0 18 19">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
                  </path></svg>

                Log in</button><ul className="list list-social list-unstyled" role="list"><li className="list-social__item">
                  <Link href="https://twitter.com/RevolMining" className="list-social__link link"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-twitter" viewBox="0 0 18 15">
                    <path fill="currentColor" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z">
                    </path></svg>
                    <span className="visually-hidden">Twitter</span>
                  </Link>
                </li><li className="list-social__item">
                    <Link href="https://www.facebook.com/RevolMining" className="list-social__link link"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 18 18">
                      <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z">
                      </path></svg>
                      <span className="visually-hidden">Facebook</span>
                    </Link>
                  </li><li className="list-social__item">
                    <Link href="https://www.instagram.com/revolutionmining" className="list-social__link link"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram" viewBox="0 0 18 18">
                      <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                      <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
                      </path></svg>
                      <span className="visually-hidden">Instagram</span>
                    </Link>
                  </li></ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Headernav;
