'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

// not in use yet

export default function Portfolio_Four() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={5} footerStyle={5}>
            
            <section className="work-page-four-section">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-1.jpg)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-2.jpg)" }}></div>
                    <div className="pattern-3 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-55.png)" }}></div>
                    <div className="pattern-4 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-59.png)" }}></div>
                </div>
                <div className="outer-container">
                    <div className="title-text centred mb_100">
                        <h2>Our Recent Work <br />& Portfolio</h2>
                    </div>
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 portfolio-block">
                                <div className="portfolio-block-four">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-24.jpg" alt=""/></figure>
                                        <div className="lower-content">
                                            <ul className="category-list">
                                                <li><Link href="/portfolio-4">Logo</Link></li>
                                                <li><Link href="/portfolio-4">DESIGN</Link></li>
                                            </ul>
                                            <h3><Link href="/index-6">Logo & Branding</Link></h3>
                                            <div className="link"><Link href="/index-6"><i className="icon-18"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-block-four">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-25.jpg" alt=""/></figure>
                                        <div className="lower-content">
                                            <ul className="category-list">
                                                <li><Link href="/portfolio-4">Branding</Link></li>
                                                <li><Link href="/portfolio-4">UI/UX</Link></li>
                                            </ul>
                                            <h3><Link href="/index-6">Case Studies & Branding</Link></h3>
                                            <div className="link"><Link href="/index-6"><i className="icon-18"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-block-four">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-26.jpg" alt=""/></figure>
                                        <div className="lower-content">
                                            <ul className="category-list">
                                                <li><Link href="/portfolio-4">BANNER</Link></li>
                                                <li><Link href="/portfolio-4">WEB DESIGN</Link></li>
                                            </ul>
                                            <h3><Link href="/index-6">Analysis Application.</Link></h3>
                                            <div className="link"><Link href="/index-6"><i className="icon-18"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 portfolio-block">
                                <div className="portfolio-block-four">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-27.jpg" alt=""/></figure>
                                        <div className="lower-content">
                                            <ul className="category-list">
                                                <li><Link href="/portfolio-4">Mobile</Link></li>
                                                <li><Link href="/portfolio-4">UI/UX</Link></li>
                                            </ul>
                                            <h3><Link href="/index-6">Data Analysis App</Link></h3>
                                            <div className="link"><Link href="/index-6"><i className="icon-18"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-block-four">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-28.jpg" alt=""/></figure>
                                        <div className="lower-content">
                                            <ul className="category-list">
                                                <li><Link href="/portfolio-4">BANNER</Link></li>
                                                <li><Link href="/portfolio-4">WEB DESIGN</Link></li>
                                            </ul>
                                            <h3><Link href="/index-6">Design Guideline App</Link></h3>
                                            <div className="link"><Link href="/index-6"><i className="icon-18"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-block-four">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/portfolio/portfolio-29.jpg" alt=""/></figure>
                                        <div className="lower-content">
                                            <ul className="category-list">
                                                <li><Link href="/portfolio-4">Mobile</Link></li>
                                                <li><Link href="/portfolio-4">UI/UX</Link></li>
                                            </ul>
                                            <h3><Link href="/index-6">Cycle Shop Application</Link></h3>
                                            <div className="link"><Link href="/index-6"><i className="icon-18"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="discuss-section centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-67.png)" }}></div>
                <div className="dark-pattern" style={{ backgroundImage: "url(assets/images/shape/shape-68.png)" }}></div>
                <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-69.png)" }}></div>
                <div className="pattern-2-light rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-70.png)" }}></div>
                <div className="pattern-3 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-71.png)" }}></div>
                <div className="pattern-3-light rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-72.png)" }}></div>
                <div className="auto-container">
                    <div className="content-box sec-title-animation animation-style2">
                        <h1 className="title-animation">So, you have a <br /><span>project.</span> We can take make it <span>awesome</span></h1>
                        <div className="link-box">
                            <h2>Let’s <span>Discuss &amp; Start</span></h2>
                            <Link href="/index-5"><i className="icon-18"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}