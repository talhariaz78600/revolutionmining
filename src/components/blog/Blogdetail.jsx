// "use client"
import Image from 'next/image';
import Link from 'next/link';
import Comment from '../comment/Comment';


const BlogDetail = ({data,id,pageno}) => {
    return (
        <div>
            <section id="shopify-section-template--14480007462957__main" className="shopify-section">
                <article className="article-template" itemScope itemType="http://schema.org/BlogPosting">
                    <div className="article-template__hero-container">
                        <div 
                            className="article-template__hero-adapt media" 
                            itemProp="image" 
                            style={{ paddingBottom: '56.18729096989967%' }}
                        >
                            <Image 
                                src={data.imageUrl}
                                alt="Revolution Mining on SimplyBitcoinTV"
                                layout="fill"
                                objectFit="cover"
                                sizes="(min-width: 1200px) 1100px, (min-width: 750px) calc(100vw - 10rem), 100vw"
                                priority
                            />
                        </div>
                    </div>
                    <header className="page-width page-width--narrow">
                        <h1 className="article-template__title" itemProp="headline">{data.title}</h1>
                        <span className="circle-divider caption-with-letter-spacing" itemProp="dateCreated pubdate datePublished">
                            <time dateTime="2023-12-21T02:49:23Z">{new Date(data.data).toLocaleDateString()}</time>
                        </span>
                    </header>
         
                    <div className="article-template__content page-width page-width--narrow rte mt-5" itemProp="articleBody">
                    <div className="paragraph" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </div>
                    <div className="element-margin center">
                        <Link href={`/blogs/the-revolution-blog/${pageno}`} className="article-template__link link animate-arrow">
                           
                                <span className="icon-wrap text-3xl flex">
                                    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                                    </svg>
                                 <span className='mx-4'>Back to blog</span>
                                </span>
                           
                        </Link>
                    </div>
        
                <Comment id={id}/>
                </article>
            </section>
        </div>
    );
}

export default BlogDetail;

