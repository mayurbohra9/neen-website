'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Blog() {


    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={17} footerStyle={9}>
            
            <section className="news-section blog-one">
                <div className="outer-container">
                    <div className="title-text mb_100 centred">
                        <h2>BLOG</h2>
                    </div>
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details-1"><img src="assets/images/resource/blog-1.2.png" alt=""/></Link></figure>
                                        <div className="lower-content">
                                            <ul className="post-info mb_14">
                                                <li>01 Jul 2025</li>
                                                {/* <li>3 Comments</li> */}
                                            </ul>
                                            <h3><Link href="/blog-details-1">Why Market Research is the Cornerstone of Smart Business Decisions.</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details-2"><img src="assets/images/resource/blog-2.2.jpg" alt=""/></Link></figure>
                                        <div className="lower-content">
                                            <ul className="post-info mb_14">
                                                <li>20 Feb 2025</li>
                                                {/* <li>0 Comments</li> */}
                                            </ul>
                                            <h3><Link href="/blog-details-2">Building Digital Foundations: The Art of Website & App Development.</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details-3"><img src="assets/images/resource/blog-3.2.jpeg" alt=""/></Link></figure>
                                        <div className="lower-content">
                                            <ul className="post-info mb_14">
                                                <li>10 May 2025</li>
                                                {/* <li>4 Comments</li> */}
                                            </ul>
                                            <h3><Link href="/blog-details-3">Design That Speaks: The Role of UI/UX & Visual Content in Digital Success.</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-8.jpg" alt=""/></Link></figure>
                                        <div className="lower-content">
                                            <ul className="post-info mb_14">
                                                <li>15 Jul 2018</li>
                                                <li>3 Comments</li>
                                            </ul>
                                            <h3><Link href="/blog-details">Designer’s Checklist for Every UX Project.</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-9.jpg" alt=""/></Link></figure>
                                        <div className="lower-content">
                                            <ul className="post-info mb_14">
                                                <li>14 Jul 2018</li>
                                                <li>6 Comments</li>
                                            </ul>
                                            <h3><Link href="/blog-details">Spending Habits, 13 Tips for grow Your Money.</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div className="news-block-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-10.jpg" alt=""/></Link></figure>
                                        <div className="lower-content">
                                            <ul className="post-info mb_14">
                                                <li>13 Jul 2018</li>
                                                <li>2 Comments</li>
                                            </ul>
                                            <h3><Link href="/blog-details">Speaking remotely at WordCamp US.</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="blog-pagination mt_20 centred">
                        <ul className="pagination-list clearfix">
                            <li><Link href="/blog">1</Link></li>
                            <li><Link href="/blog">2</Link></li>
                            <li><Link href="/blog">3</Link></li>
                            <li><Link href="/blog"><i className="icon-43"></i></Link></li>
                        </ul>
                    </div> */}
                </div>
            </section>

            </Layout>
        </div>
    )
}