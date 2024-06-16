"use client"
import Link from 'next/link';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
const Sidebar = () => {
const router=useRouter();
const path=usePathname();
  return (
    <div>
          <nav className="nav-account">
          <ul>
            <li>
              <Link href="/profile/order" className={`${path==="/profile/order"?"active":""}`} >
                <svg
                  id="Raggruppa_1383"
                  data-name="Raggruppa 1383"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="17.462"
                  viewBox="0 0 20 17.462"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rettangolo_68" data-name="Rettangolo 68" width="20" height="17.462" fill="#fff"></rect>
                    </clipPath>
                  </defs>
                  <g id="Raggruppa_1382" data-name="Raggruppa 1382" clipPath="url(#clip-path)">
                    <path
                      id="Tracciato_11627"
                      data-name="Tracciato 11627"
                      d="M6.006,17.3,4.848,15.064h0A8.734,8.734,0,0,0,0,22.56l2.511.057a6.187,6.187,0,0,1,3.5-5.316Z"
                      transform="translate(0 -14.163)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Tracciato_11628"
                      data-name="Tracciato 11628"
                      d="M120.33,8.731A8.735,8.735,0,0,0,111.6,0a8.518,8.518,0,0,0-2.176.274l.693,2.41h0A6.227,6.227,0,0,1,116,13.134l1.771,1.768,4.214-3.808a2.7,2.7,0,0,0,.891-2.007V9.032a.7.7,0,0,0-.858-.685Z"
                      transform="translate(-102.881 0)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Tracciato_11629"
                      data-name="Tracciato 11629"
                      d="M74.544,239.015a8.64,8.64,0,0,0,4.262,1.108v-2.5a6.18,6.18,0,0,1-3.043-.8Z"
                      transform="translate(-70.088 -222.661)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Tracciato_11630"
                      data-name="Tracciato 11630"
                      d="M4.267,162.283l-2.471.435a8.7,8.7,0,0,0,2.929,5.223l1.627-1.918h0a6.148,6.148,0,0,1-2.086-3.74Z"
                      transform="translate(-1.689 -152.581)"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
                Order Status
              </Link>
            </li>
            <li>
              <Link href="/profile/invoices" className={`${path==="/profile/invoices"?"active":""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="16.13"
                  height="20"
                  viewBox="0 0 16.13 20"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rettangolo_66"
                        data-name="Rettangolo 66"
                        width="16.13"
                        height="20"
                        transform="translate(0 0)"
                        fill="#fff"
                      ></rect>
                    </clipPath>
                  </defs>
                  <g id="Raggruppa_1379" data-name="Raggruppa 1379" transform="translate(0 0.001)">
                    <g id="Raggruppa_1378" data-name="Raggruppa 1378" transform="translate(0 -0.001)" clipPath="url(#clip-path)">
                      <path
                        id="Tracciato_11625"
                        data-name="Tracciato 11625"
                        d="M.671,0C.387,0,0,.231,0,.515v17.29a2.869,2.869,0,0,0,.284.439L1.5,19.793A.539.539,0,0,0,1.91,20a.539.539,0,0,0,.413-.206l.826-1.032.826,1.032a.516.516,0,0,0,.826,0l.826-1.032.826,1.032a.51.51,0,0,0,.8,0l.826-1.032L8.9,19.793a.51.51,0,0,0,.8,0l.826-1.032.826,1.032a.516.516,0,0,0,.826,0l.826-1.032.826,1.032a.51.51,0,0,0,.8,0l1.213-1.548a3.286,3.286,0,0,0,.284-.7V.515c0-.284-.387-.516-.671-.516Zm3.2,3.613h7.742a.54.54,0,0,1,.516.542.518.518,0,0,1-.516.516H3.871a.518.518,0,0,1-.516-.516.54.54,0,0,1,.516-.542m7.742,10.581H3.871a.564.564,0,0,1-.516-.568.518.518,0,0,1,.516-.516h7.742a.518.518,0,0,1,.516.516.564.564,0,0,1-.516.568m0-3.355H3.871a.564.564,0,0,1-.516-.568.518.518,0,0,1,.516-.516h7.742a.518.518,0,0,1,.516.516.564.564,0,0,1-.516.568m.516-3.613a.507.507,0,0,1-.516.516H3.871a.516.516,0,0,1,0-1.032h7.742a.518.518,0,0,1,.516.516Z"
                        transform="translate(0 0.001)"
                        fill="#fff"
                      ></path>
                    </g>
                  </g>
                </svg>
                Invoices
              </Link>
            </li>
            {/* <li>
              <Link href="/account?view=miningpool">
                <svg
                  id="Raggruppa_1385"
                  data-name="Raggruppa 1385"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="17.85"
                  viewBox="0 0 20 17.85"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rettangolo_69" data-name="Rettangolo 69" width="20" height="17.85" fill="#fff"></rect>
                    </clipPath>
                  </defs>
                  <g id="Raggruppa_1384" data-name="Raggruppa 1384" clipPath="url(#clip-path)">
                    <path
                      id="Tracciato_11631"
                      data-name="Tracciato 11631"
                      d="M86.892,329.274a1.91,1.91,0,1,1-1.908-1.908,1.911,1.911,0,0,1,1.908,1.908"
                      transform="translate(-79.512 -313.336)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Tracciato_11632"
                      data-name="Tracciato 11632"
                      d="M298.293,329.274a1.912,1.912,0,1,1-1.912-1.908,1.914,1.914,0,0,1,1.912,1.908"
                      transform="translate(-281.849 -313.336)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Tracciato_11633"
                      data-name="Tracciato 11633"
                      d="M58.577,4a.4.4,0,0,0-.212-.528l-.784-.332.184-1.012a.386.386,0,0,0-.068-.3.38.38,0,0,0-.26-.164l-2.52-.444L53,.058a.406.406,0,0,0-.388-.016l-2,1.02L48.853.054a.4.4,0,0,0-.4,0l-1.544.9L43.245.334a.41.41,0,0,0-.3.072.4.4,0,0,0-.16.268l-.26,1.832L41.105,4.2a.427.427,0,0,0-.08.152l-.052.2h17.36Z"
                      transform="translate(-39.217 0)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Tracciato_11634"
                      data-name="Tracciato 11634"
                      d="M20,125.33v2a.4.4,0,0,1-.4.4H18.5l-.844,6.324a.4.4,0,0,1-.4.348H17a2.71,2.71,0,0,0-4.944,0H7.94a2.707,2.707,0,0,0-4.94,0H2.74a.4.4,0,0,1-.4-.348l-.84-6.324H.4a.4.4,0,0,1-.4-.4v-2a.4.4,0,0,1,.4-.4H19.6a.4.4,0,0,1,.4.4Z"
                      transform="translate(0 -119.576)"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
                Mining Pool
              </Link>
            </li> */}
            <li>
              <Link href="/profile" className={`${path==="/profile"?"active":""}`} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-account"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                    fill="currentColor"
                  />
                </svg>
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <svg
                  id="Raggruppa_1386"
                  data-name="Raggruppa 1386"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="19.507"
                  viewBox="0 0 20 19.507"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rettangolo_45" data-name="Rettangolo 45" width="20" height="19.507" fill="#fff"></rect>
                    </clipPath>
                  </defs>
                  <g id="Raggruppa_1365" data-name="Raggruppa 1365" clipPath="url(#clip-path)">
                    <path
                      id="Tracciato_11617"
                      data-name="Tracciato 11617"
                      d="M16.09,0H3.909A3.91,3.91,0,0,0,0,3.91v8.116a3.91,3.91,0,0,0,3.909,3.91h.354v2.927a.642.642,0,0,0,1,.53l5.044-3.457H16.09A3.91,3.91,0,0,0,20,12.027V3.91A3.91,3.91,0,0,0,16.09,0M5.563,9.982A1.514,1.514,0,1,1,7.077,8.468,1.514,1.514,0,0,1,5.563,9.982m4.437,0a1.514,1.514,0,1,1,1.514-1.514A1.514,1.514,0,0,1,10,9.982m4.437,0a1.514,1.514,0,1,1,1.514-1.514,1.514,1.514,0,0,1-1.514,1.514"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
                Contact Support
              </Link>
            </li>
            <li>
              <Link href="/collections/asics">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="16"
                  height="22.218"
                  viewBox="0 0 16 22.218"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rettangolo_75"
                        data-name="Rettangolo 75"
                        width="16"
                        height="22.218"
                        fill="none"
                      ></rect>
                    </clipPath>
                  </defs>
                  <g id="Raggruppa_1400" data-name="Raggruppa 1400" transform="translate(0 0)">
                    <g id="Raggruppa_1399" data-name="Raggruppa 1399" transform="translate(0 0)" clipPath="url(#clip-path)">
                      <path
                        id="Tracciato_11637"
                        data-name="Tracciato 11637"
                        d="M22.554,34.778a2.5,2.5,0,0,0-2.761,0l1.381,1.38Z"
                        transform="translate(-13.174 -22.87)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11638"
                        data-name="Tracciato 11638"
                        d="M22.554,45.358l-1.38-1.38-1.381,1.38a2.5,2.5,0,0,0,2.761,0"
                        transform="translate(-13.174 -29.271)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11639"
                        data-name="Tracciato 11639"
                        d="M27.84,39.108a2.489,2.489,0,0,0-.417-1.38l-1.38,1.38,1.38,1.38a2.489,2.489,0,0,0,.417-1.38"
                        transform="translate(-17.334 -25.111)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11640"
                        data-name="Tracciato 11640"
                        d="M16.427,39.108a2.489,2.489,0,0,0,.417,1.38l1.38-1.38-1.38-1.38a2.489,2.489,0,0,0-.417,1.38"
                        transform="translate(-10.934 -25.111)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11641"
                        data-name="Tracciato 11641"
                        d="M32.316,33.463a3.483,3.483,0,0,1,0,4.2l1.065,1.065a4.989,4.989,0,0,0,0-6.326Z"
                        transform="translate(-21.509 -21.564)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11642"
                        data-name="Tracciato 11642"
                        d="M17.627,28.389a3.487,3.487,0,0,1,2.1.7l1.065-1.065a4.989,4.989,0,0,0-6.326,0l1.065,1.065a3.487,3.487,0,0,1,2.1-.7"
                        transform="translate(-9.627 -17.902)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11643"
                        data-name="Tracciato 11643"
                        d="M14.323,0H1.677A1.677,1.677,0,0,0,0,1.677V20.541a1.677,1.677,0,0,0,1.677,1.677H14.323A1.677,1.677,0,0,0,16,20.541V1.677A1.677,1.677,0,0,0,14.323,0M2.275,4.006a.378.378,0,0,1,.378-.378H13.347a.378.378,0,0,1,.378.378v.823a.378.378,0,0,1-.378.378H2.653a.378.378,0,0,1-.378-.378ZM14.006,14a5.976,5.976,0,0,1-1.423,3.874l1.276,1.276a.5.5,0,0,1-.71.71L11.873,18.58a5.983,5.983,0,0,1-7.747,0L2.85,19.856a.5.5,0,0,1-.709-.71l1.276-1.276a5.983,5.983,0,0,1,0-7.747L2.141,8.848a.5.5,0,0,1,.709-.71L4.126,9.414a5.983,5.983,0,0,1,7.747,0l1.276-1.276a.5.5,0,1,1,.71.71l-1.276,1.276A5.976,5.976,0,0,1,14.006,14"
                        transform="translate(0 0)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11644"
                        data-name="Tracciato 11644"
                        d="M17.627,50.953a3.487,3.487,0,0,1-2.1-.7l-1.065,1.065a4.989,4.989,0,0,0,6.326,0L19.725,50.25a3.487,3.487,0,0,1-2.1.7"
                        transform="translate(-9.627 -33.446)"
                        fill="#fff"
                      ></path>
                      <path
                        id="Tracciato_11645"
                        data-name="Tracciato 11645"
                        d="M10.455,35.561a3.487,3.487,0,0,1,.7-2.1L10.093,32.4a4.989,4.989,0,0,0,0,6.326l1.065-1.065a3.487,3.487,0,0,1-.7-2.1"
                        transform="translate(-5.965 -21.564)"
                        fill="#fff"
                      ></path>
                    </g>
                  </g>
                </svg>
                Buy Miners
              </Link>
            </li>
            <li>
              <span className='mx-5 flex cursor-pointer' onClick={()=>{localStorage.removeItem('userprofile')
              // localStorage.removeItem("userdata")
              router.push('/authentication')
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-account"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                    fill="currentColor"
                  />
                </svg>
                Log out
              </span>
            </li>
          </ul>
        </nav>
    </div>
    
  );
}

export default Sidebar;
