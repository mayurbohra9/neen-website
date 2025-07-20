'use client'
import Link from "next/link"


// not in use yet

export default function Portfolio(){
    return (
        <> 

        <section className="portfolio-style-six centred sec-title-animation animation-style2">
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-61.png)" }}></div>
                    <div className="upper-text" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700"><span>Our Work</span><i className="icon-19"></i></div>
                    <h2>Product & <br />Branding Design</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/laptop-1.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <ul className="category-list pb_65 clearfix title-animation">
                        <li><Link href="/index-5">Great Interface</Link></li>
                        <li><Link href="/index-5">Mobile App</Link></li>
                        <li><Link href="/index-5">Marketing</Link></li>
                        <li><Link href="/index-5">UI/UX Design</Link></li>
                        <li><Link href="/index-5">UI/UX</Link></li>
                    </ul>
                    <p className="title-animation">“One of my recent works for ThemeForest is about a job <br />directory website. Hope you guys like it.”</p>
                    <div className="link"><Link href="/index-5">Read More<i className="icon-20"></i></Link></div>
                </div>
            </div>
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-63.png)" }}></div>
                    <h2>Mobile App <br />Developloment</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/mobile-1.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <ul className="category-list pb_65 clearfix title-animation">
                        <li><Link href="/index-5">Great Interface</Link></li>
                        <li><Link href="/index-5">Mobile App</Link></li>
                        <li><Link href="/index-5">Marketing</Link></li>
                        <li><Link href="/index-5">UI/UX Design</Link></li>
                        <li><Link href="/index-5">UI/UX</Link></li>
                    </ul>
                    <p className="title-animation">“One of my recent works for ThemeForest is about a job <br />directory website. Hope you guys like it.”</p>
                    <div className="link"><Link href="/index-5">Read More<i className="icon-20"></i></Link></div>
                </div>
            </div>
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-61.png)" }}></div>
                    <h2>Design <br />Landing Page</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/tab-1.png" alt=""/></figure>
                </div>
                <div className="block-two pb_200">
                    <ul className="category-list pb_65 clearfix title-animation">
                        <li><Link href="/index-5">Great Interface</Link></li>
                        <li><Link href="/index-5">Mobile App</Link></li>
                        <li><Link href="/index-5">Marketing</Link></li>
                        <li><Link href="/index-5">UI/UX Design</Link></li>
                        <li><Link href="/index-5">UI/UX</Link></li>
                    </ul>
                    <p className="title-animation">“One of my recent works for ThemeForest is about a job <br />directory website. Hope you guys like it.”</p>
                    <div className="link"><Link href="/index-5">Read More<i className="icon-20"></i></Link></div>
                </div>
            </div>
        </section>

        </>
    )
}
