'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner(){
    return (
        <> 
        <section className="banner-style-five">
            <Swiper {...swiperOptions} className='banner-carousel'>
                <SwiperSlide>
                    <div className="slide-item">
                        <span className="count-text">01.</span>
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}></div>
                        <div className="dark-pattern" style={{ backgroundImage: "url(assets/images/shape/shape-52.png)" }}></div>
                        <div className="large-container">
                            <div className="content-box">
                                <div className="text-box">
                                    <h2>We help you research, analyze & grow.</h2>
                                    <p>One-stop solution for market & academic research.</p>
                                    <div className="btn-box p_relative">
                                        <Link href="/contact" className="theme-btn"><span>Let’s Talk</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <span className="count-text">02.</span>
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}></div>
                        <div className="dark-pattern" style={{ backgroundImage: "url(assets/images/shape/shape-52.png)" }}></div>
                        <div className="large-container">
                            <div className="content-box">
                                <div className="text-box">
                                    <h2>Research. Insight. Strategy.</h2>
                                    <p>One-stop solution for market & academic research.</p>
                                    <div className="btn-box p_relative">
                                        <Link href="/contact" className="theme-btn"><span>Let’s Talk</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <span className="count-text">03.</span>
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}></div>
                        <div className="dark-pattern" style={{ backgroundImage: "url(assets/images/shape/shape-52.png)" }}></div>
                        <div className="large-container">
                            <div className="content-box">
                                <div className="text-box">
                                    <h2>We deliver expert, data-driven, tailored insights.</h2>
                                    <p>One-stop solution for market & academic research.</p>
                                    <div className="btn-box p_relative">
                                        <Link href="/contact" className="theme-btn"><span>Let’s Talk</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <ul className="social-links">
                <li><span>Follow - &nbsp;</span></li>
                <li><Link href="https://www.linkedin.com/company/neen-innovations/" target="_blank">LinkedIn</Link></li>
                {/* <li>/</li>
                <li><Link href="#">Twitter</Link></li>*/}
                <li> &nbsp; / &nbsp;</li>
                <li><Link href="https://www.instagram.com/neeninnovations/" target='_blank'>Instagram</Link></li>
            </ul>
            <span className="big-text">Agency</span>
        </section>

        </>
    )
}
