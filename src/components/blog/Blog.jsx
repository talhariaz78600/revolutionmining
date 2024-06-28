import React from 'react';
import "../../assets/css/section-main-blog.css"
import "../../assets/css/component-pagination.css"
import Link from 'next/link';
import FooterPagination from '../pagination/FooterPagination';
const Blog = ({ title, data, pageno }) => {
    const maxContentLength = 205;

    return (
        <div>
            <main id="MainContent" className="content-for-layout focus-none" role="main" tabIndex="-1">

            {data?<section id="shopify-section-template--14480007594029__main" className="shopify-section spaced-section"><link href="//www.revolutionmining.io/cdn/shop/t/1/assets/component-article-card.css?v=28263552231511277471644328998" rel="stylesheet" type="text/css" media="all" />
                    <div className="main-blog page-width">
                        <h1 className="title--primary">The Revolution Blogs</h1>
                        <div   className="blog-articles ">
                       {data.data.map((item,index)=>{
                            return  <div className="blog-articles__article article">

                              <article key={index} className="article-card" aria-labelledby="Article-558988197933">
                                  <Link href={`/blogs/the-revolution-blog/detail/${item._id}?pageno=${pageno}`} className="article-content motion-reduce"><div className="article-card__image-wrapper">
                                      <div className="article-card__image media article-card__image--medium">
                                          <img src={item.imageUrl} sizes="(min-width: 1200px) 550px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="Revolution Mining Featured on Rabid Mining" width="1600" height="900" loading="lazy" className="motion-reduce" />
                                      </div>
                                  </div><div className="article-card__info">
                                          <header className="article-card__header"><span className="circle-divider caption-with-letter-spacing">{new Date(item.data).toLocaleDateString()}</span><h2 className="article-card__title" id="Article-558988197933">
                                              {item.title}
                                          </h2>
                                          </header><div className="paragraph" dangerouslySetInnerHTML={{ __html: item.description.length > maxContentLength ? `${item.description.substring(0, maxContentLength)}....` : item.description }}></div><div className="article-card__footer"></div>
                                      </div>
                                  </Link>
                              </article>
                          </div>
                       }) 
                    }
                    </div>
                        <div className="pagination-wrapper">
                            {/* <nav className="pagination" role="navigation" aria-label="Pagination">
                                <ul className="pagination__list list-unstyled" role="list"><li><span className="pagination__item pagination__item--current" aria-current="page" aria-label="Page 1">1</span></li><li><Link href="/blogs/the-revolution-blog?page=2" className="pagination__item link" aria-label="Page 2">2</Link></li><li><Link href="/blogs/the-revolution-blog?page=3" className="pagination__item link" aria-label="Page 3">3</Link></li><li><span className="pagination__item">…</span></li><li><Link href="/blogs/the-revolution-blog?page=6" className="pagination__item link" aria-label="Page 6">6</Link></li><li>
                                    <Link href="/blogs/the-revolution-blog?page=2" className="pagination__item pagination__item--prev pagination__item-arrow link motion-reduce" aria-label="Next page"><svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                        </path></svg>
                                    </Link>
                                </li></ul>
                            </nav> */}

                           {data.search==="no" && <FooterPagination stoped={data.total} pagelength={5} pageno={pageno} pagename={title} />}
                        </div></div>
                </section>:<div className='text-center'>No blog found</div>}

            </main>
        </div>
    );
}

export default Blog;
