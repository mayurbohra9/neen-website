'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import React from 'react'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"

export default function About() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={5} footerStyle={5}>
            
            <section className="about-style about-style-four alternat-2">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.jpg)" }}></div>
                <div className="pattern-layer-2" style={{ backgroundImage: "url(assets/images/shape/shape-2.jpg)" }}></div>
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-12 col-sm-12 text-column">
                            <div className="text-box mr_100">
                                <h2>We're help you <span>build</span>, manage & <span>make</span> you grow</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div className="content-box ml_90">
                                <p>Neen Innovations excels in research, insights, and strategic solutions. With an integrated approach, they merge data-driven research, innovative analysis, and expert market knowledge.</p>
                                <div className="link-box">
                                    <h2>Let’s <span>Discuss & Start</span></h2>
                                    <Link href="/contact"><i className="icon-18"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-box pt_120">
                        <figure className="image"><img src="assets/images/resource/about-8.jpg" alt=""/></figure>
                    </div>
                    <div className="funfact-inner mt_110">
                        <div className="single-item">
                            <div className="count-outer count-box">
                                <span><CounterUp end={100} />+</span>
                            </div>
                            <p>Total Clients</p>
                        </div>
                        <div className="single-item">
                            <div className="count-outer count-box">
                                <CounterUp end={50} /><span>+</span>
                            </div>
                            <p>Website Build</p>
                        </div>
                        <div className="single-item">
                            <div className="count-outer count-box">
                                <CounterUp end={7} />
                            </div>
                            <p>Total Clients</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="service-style alternat-2">
                <div className="outer-container">
                    <div className="title-box mb_90 sec-title-animation animation-style2">
                        <h2 className="title-animation">Our Solution & Services.</h2>
                        <Link href="/contact" className="theme-btn">Let’s Talk</Link>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-56.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/custom-research-&-consulting-service">Custom Research & Consulting.</Link></h3>
                                    <p>Market Study & Intelligence</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-58.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/academic-&-writing-services-service">Academic & Writing Services.</Link></h3>
                                    <p>Thesis, Dissertation, Research</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-57.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/academic-&-writing-services-service">Data-driven Strategy & Reports.</Link></h3>
                                    <p>Feasibility, M&A, Tech Profiling</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-57.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/marketing-insights-&-evaluation-service">Marketing Insights & Evaluation.</Link></h3>
                                    <p>Competitor Analysis & Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-56.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/ui-ux-&-visual-ontent-service">UI/UX & Visual Content.</Link></h3>
                                    <p>Sketch Noting, Visual Reports</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-58.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/patent-&-ip-solutions-service">Patent & IP Solutions.</Link></h3>
                                    <p>Prior Art & Patent Analysis</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="service-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-58.png)" }}></div>
                                    <div className="icon-box"><i className="icon-18"></i></div>
                                    <h3><Link href="/website-&-app-development-service">Website & App Development.</Link></h3>
                                    <p>Intuitive, Attractive, Engaging</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="chooseus-section sec-title-animation animation-style2">
                <div className="shape float-bob-y" style={{ backgroundImage: "url(assets/images/shape/shape-149.png)" }}></div>
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                            <div className="title-box">
                                <span className="upper-text title-animation">Why Choose us</span>
                                <h2 className="title-animation">Driving your <span>research</span> Towards to insight.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                            <div className="inner-box ml_130">
                                <div className="single-item">
                                    <span className="count-text">1</span>
                                    <h3 className="title-animation">Expert Consultant</h3>
                                    <p className="title-animation">Get clarity by engaging expert researchers to decode your market.</p>
                                </div>
                                <div className="single-item">
                                    <span className="count-text">2</span>
                                    <h3 className="title-animation">All Digital Service</h3>
                                    <p className="title-animation">Access actionable insights through real-time dashboards and tools.</p>
                                </div>
                                <div className="single-item">
                                    <span className="count-text">3</span>
                                    <h3 className="title-animation">Quick Support</h3>
                                    <p className="title-animation">Rapid responses for urgent analysis, surveys, and deep dives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="testimonial-style-five pb_150">
                <div className="pattern-layer float-bob-y" style={{ backgroundImage: "url(assets/images/shape/shape-65.png)" }}></div>
                <div className="outer-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div className="left-content mr_40">
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <figure className="clients-logo-text">FreshBite Organics Pvt. Ltd.</figure>
                                        {/* <figure className="clients-logo"><img src="assets/images/clients/clients-16.png" alt=""/></figure> */}
                                        <p>“Neen Innovations unlocked key insights, growing FreshBite Organics’ customer reach”</p>
                                        <div className="lower-content">
                                            <h3>4.7 Excellent</h3>
                                            <ul className="rating">
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-21"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <figure className="clients-logo-text">UrbanEdge Retail Solutions</figure>
                                        {/* <figure className="clients-logo"><img src="assets/images/clients/clients-17.png" alt=""/></figure> */}
                                        <p>“Thanks to Neen Innovations, UrbanEdge Retail found new growth markets.”</p>
                                        <div className="lower-content">
                                            <h3>4.8 Excellent</h3>
                                            <ul className="rating">
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-block-three">
                                    <div className="inner-box">
                                        <figure className="clients-logo-text">SwiftLogix Logistics Pvt. Ltd.</figure>
                                        {/* <figure className="clients-logo"><img src="assets/images/clients/clients-18.png" alt=""/></figure> */}
                                        <p>“Neen Innovations’ research guided SwiftLogix Logistics towards smarter expansion decisions.”</p>
                                        <div className="lower-content">
                                            <h3>5.0 Excellent</h3>
                                            <ul className="rating">
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                                <li><i className="icon-15"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div className="right-content ml_100 sec-title-animation animation-style2">
                                <span className="upper-text title-animation">Testimonials</span>
                                <h2 className="title-animation">We’ve been <span>helping</span> Customer grow</h2>
                                <p className="title-animation">So how does it work? Let’s explore how Neen Innovations helps you get started with powerful insights.</p>
                                <Link href="/contact" className="theme-btn">Let's Talk</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <section className="clients-style-three">
                <span className="title-text">Some of Our Clients</span>
                <div className="outer-container">
                    <div className="dark-logo">
                        <ul className="clients-logo">
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-19.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-20.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-21.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-22.png" alt=""/></Link></li>
                        </ul>
                        <ul className="clients-logo pl_200 pr_200">
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-23.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-24.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-25.png" alt=""/></Link></li>
                        </ul>
                    </div>
                    <div className="light-logo">
                        <ul className="clients-logo">
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-26.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-27.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-28.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-29.png" alt=""/></Link></li>
                        </ul>
                        <ul className="clients-logo pl_200 pr_200">
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-30.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-31.png" alt=""/></Link></li>
                            <li><Link href="/index-5"><img src="assets/images/clients/clients-32.png" alt=""/></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
             */}
            <section className="discuss-section centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-67.png)" }}></div>
                <div className="dark-pattern" style={{ backgroundImage: "url(assets/images/shape/shape-68.png)" }}></div>
                <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-69.png)" }}></div>
                <div className="pattern-2-light rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-70.png)" }}></div>
                <div className="pattern-3 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-71.png)" }}></div>
                <div className="pattern-3-light rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-72.png)" }}></div>
                <div className="auto-container">
                    <div className="content-box sec-title-animation animation-style2">
                        <h1 className="title-animation">So, you want a <br /><span>research.</span> We can take, make it <span>awesome</span></h1>
                        <div className="link-box">
                            <h2>Let’s <span>Discuss &amp; Start</span></h2>
                            <Link href="/contact"><i className="icon-18"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}