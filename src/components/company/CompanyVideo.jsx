import React from 'react'
import "../../assets/css/component-deferred-media.css"
import "../../assets/css/video-section.css"
const CompanyVideo = () => {
  return (
    <>
    <section id="shopify-section-template--14818935111725__f567d277-ebcb-4e77-adf9-0f76d1392f02" className="shopify-section spaced-section spaced-section--full-width">
     
      <div className="video-section page-width">
        <div>
          <h2 className="title">Our New Texas Facility:</h2>
        </div>
        <noscript>
          <div className="video-section__media" style={{ paddingBottom: '66.66666666666666%' }}>
            <a href="https://youtu.be/S13V7qKVHX8?si=NUeOTxphtc9Ch5t-" className="video-section__poster media media--transparent media--landscape">
              <img
                src="//www.revolutionmining.io/cdn/shop/files/NZ9_4117_1920x.jpg?v=1700196945"
                sizes="(min-width: 1200px) 1100px, (min-width: 750px) calc(100vw - 10rem), 100vw"
                alt="Load video: "
                loading="lazy"
                width={3795}
                height={2530}
              />
            </a>
          </div>
        </noscript>
        <div className="video-section__media deferred-media no-js-hidden" data-media-id="S13V7qKVHX8" style={{ paddingBottom: '66.66666666666666%' }}>
          <button id="Deferred-Poster-Modal-S13V7qKVHX8" className="video-section__poster media deferred-media__poster media--landscape" type="button">
            <img
             
              src="//www.revolutionmining.io/cdn/shop/files/NZ9_4117_1920x.jpg?v=1700196945"
              sizes="(min-width: 1200px) 1100px, (min-width: 750px) calc(100vw - 10rem), 100vw"
              alt="Load video: "
              loading="lazy"
              width={3795}
              height={2530}
            />
            <span className="deferred-media__poster-button motion-reduce">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-play" fill="none" viewBox="0 0 10 14">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.48177 0.814643C0.81532 0.448245 0 0.930414 0 1.69094V12.2081C0 12.991 0.858787 13.4702 1.52503 13.0592L10.5398 7.49813C11.1918 7.09588 11.1679 6.13985 10.4965 5.77075L1.48177 0.814643Z" fill="currentColor"></path>
              </svg>
            </span>
          </button>
          <template>
            <iframe src="https://www.youtube.com/embed/S13V7qKVHX8?enablejsapi=1" className="js-youtube" allow="autoplay; encrypted-media" allowFullScreen title="Revolution Mining"></iframe>
          </template>
        </div>
      </div>
    </section>
    </>
  )
}

export default CompanyVideo