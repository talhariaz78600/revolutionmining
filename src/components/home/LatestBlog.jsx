import React from 'react';
import "../../assets/css/component-article-card.css"
import "../../assets/css/section-featured-blog.css"
import "../../assets/css/component-slider.css"
import Link from 'next/link';
const LatestBlog = async () => {
    const maxContentLength = 405;
    const blogdata = async () => {

        const response = await fetch(`https://revolutionbackend.vercel.app/api/blog/getblogdata?page=${1}&limit=${6}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store"
        })
        const res = await response.json();
        return res.finddata;



    }
    const data = await blogdata();


    return (
        <div>
            <section id="shopify-section-template--14480007561261__1644260525107253b5" className="shopify-section spaced-section spaced-section--full-width">
                <div className="blog featured-blog-wrapper mt-12" style={{ backgroundImage: "url(/images/Purple_Mesh.png)" }}>
                    <div className="page-width-desktop">
                        <div className="title-wrapper-without-link title-wrapper--self-padded-tablet-down">
                            <h3 className="blog__title center my-5">The Latest from Revolution</h3>
                        </div><slider-component className="slider-mobile-gutter">
                            <ul id="Slider-template--14480007561261__1644260525107253b5" className="blog__posts articles-wrapper grid grid--peek grid--2-col-tablet grid--4-col-desktop slider slider--tablet" role="list">
                                {data[0] ? <li id="Slide-template--14480007561261__1644260525107253b5-1" className="blog__post grid__item article slider__slide slider__slide--full-width">


                                    <article className="article-card" aria-labelledby="Article-558988197933">
                                        <Link href={`/blogs/the-revolution-blog/detail/${data[0]._id}?pageno=1`} className="article-content motion-reduce"><div className="article-card__image-wrapper">
                                            <div className="article-card__image media media--landscape">
                                                <img srcSet={data[0].imageUrl} width="1600" height="900" loading="lazy" className="motion-reduce" />
                                            </div>
                                        </div><div className="article-card__info">
                                                <header className="article-card__header"><span className="circle-divider caption-with-letter-spacing">{new Date(data[0].data).toLocaleDateString()}</span><h2 className="article-card__title" id="Article-558988197933">
                                                    {data[0].title}
                                                </h2>
                                                </header><div className="article-card__excerpt rte-width text-4xl" dangerouslySetInnerHTML={{ __html: data[0].description.length > maxContentLength ? `${data[0].description.substring(0, maxContentLength)}....` : data[0].description }}></div>
                                                <div className="article-card__footer"></div>
                                            </div>
                                        </Link>
                                    </article>

                                </li> : ""}
                                {data[1] ? <li id="Slide-template--14480007561261__1644260525107253b5-1" className="blog__post grid__item article slider__slide slider__slide--full-width">


                                    <article className="article-card" aria-labelledby="Article-558988197933">
                                        <Link href={`/blogs/the-revolution-blog/detail/${data[1]._id}?pageno=1`} className="article-content motion-reduce"><div className="article-card__image-wrapper">
                                            <div className="article-card__image media media--landscape">
                                                <img srcSet={data[1].imageUrl} width="1600" height="900" loading="lazy" className="motion-reduce" />
                                            </div>
                                        </div><div className="article-card__info">
                                                <header className="article-card__header"><span className="circle-divider caption-with-letter-spacing">{new Date(data[1].data).toLocaleDateString()}</span><h2 className="article-card__title" id="Article-558988197933">
                                                    {data[1].title}
                                                </h2>
                                                </header><div className="article-card__excerpt rte-width text-4xl" dangerouslySetInnerHTML={{ __html: data[1].description.length > maxContentLength ? `${data[1].description.substring(0, maxContentLength)}....` : data[1].description }}></div>
                                                <div className="article-card__footer"></div>
                                            </div>
                                        </Link>
                                    </article>

                                </li> : ""}

                                {data[2] ? <li id="Slide-template--14480007561261__1644260525107253b5-1" className="blog__post grid__item article slider__slide slider__slide--full-width">


                                    <article className="article-card" aria-labelledby="Article-558988197933">
                                        <Link href={`/blogs/the-revolution-blog/detail/${data[2]._id}?pageno=1`} className="article-content motion-reduce"><div className="article-card__image-wrapper">
                                            <div className="article-card__image media media--landscape">
                                                <img srcSet={data[2].imageUrl} width="1600" height="900" loading="lazy" className="motion-reduce" />
                                            </div>
                                        </div><div className="article-card__info">
                                                <header className="article-card__header"><span className="circle-divider caption-with-letter-spacing">{new Date(data[2].data).toLocaleDateString()}</span><h2 className="article-card__title" id="Article-558988197933">
                                                    {data[2].title}
                                                </h2>
                                                </header><div className="article-card__excerpt rte-width text-4xl" dangerouslySetInnerHTML={{ __html: data[2].description.length > maxContentLength ? `${data[2].description.substring(0, maxContentLength)}....` : data[2].description }}></div>
                                                <div className="article-card__footer"></div>
                                            </div>
                                        </Link>
                                    </article>

                                </li> : ""}
                            </ul><div className="slider-buttons no-js-hidden">
                                <button type="button" className="slider-button slider-button--prev" name="previous" aria-label="Slide left" disabled="disabled"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                    </path></svg>
                                </button>
                                <div className="slider-counter caption">
                                    <span className="slider-counter--current">1</span>
                                    <span aria-hidden="true"> / </span>
                                    <span className="visually-hidden">of</span>
                                    <span className="slider-counter--total">0</span>
                                </div>
                                <button type="button" className="slider-button slider-button--next" name="next" aria-label="Slide right" disabled="disabled"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                    </path></svg>
                                </button>
                            </div></slider-component><div className="blog__view-all center">
                            <Link href="/blogs/the-revolution-blog/1" className="blog__button">
                                See all news &#11000;
                            </Link>
                        </div></div>
                </div>


            </section>
        </div>
    );
}

export default LatestBlog;
