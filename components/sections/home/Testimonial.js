'use client'
import Link from "next/link"

export default function Testimonial(){
    return (
        <> 

        <section className="testimonial-style-five pb_150">
            <div className="parallax-scene parallax-scene-2 anim-icons">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-65.png)" }}></div>
            </div>
            <div className="outer-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                        <div className="left-content mr_40">
                            <div className="testimonial-block-three" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                <div className="inner-box">
                                    <figure className="clients-logo-text">FreshBite Organics Pvt. Ltd.</figure>
                                    {/* <figure className="clients-logo"><img src="/assets/images/clients/clients-16.png" alt=""/>ddd</figure> */}
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
                            <div className="testimonial-block-three" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                <div className="inner-box">
                                    <figure className="clients-logo-text">UrbanEdge Retail Solutions</figure>
                                    {/* <figure className="clients-logo"><img src="/assets/images/clients/clients-17.png" alt=""/></figure> */}
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
                            <div className="testimonial-block-three" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                <div className="inner-box">
                                    <figure className="clients-logo-text">SwiftLogix Logistics Pvt. Ltd.</figure>
                                    {/* <figure className="clients-logo"><img src="/assets/images/clients/clients-18.png" alt=""/></figure> */}
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
                            <a href="/contact" className="theme-btn-three">Let's Talk<span></span><span></span><span></span><span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
