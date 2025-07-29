'use client'
import Link from "next/link"

export default function OurProcess(){
    return (
        <> 

        <section className="our_process-style-six centred sec-title-animation animation-style2">
            {/* step 1 */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-61.png)" }}></div>
                    <div className="upper-text" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700"><span>Our Process</span><i className="icon-19"></i></div>
                    <h2> Gather Data & <br />Insights</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/laptop-2.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">“We collect real, actionable data to lay a strong<br /> foundation for informed decisions.”</p>
                </div>
            </div>
            {/* Step - 2 */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-63.png)" }}></div>
                    <h2>Research</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/mobile-2.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">“We dig deep into trends, competitors, and customer <br /> behaviors to uncover opportunities.”</p>
                </div>
            </div>
            {/* Step - 3 */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-63.png)" }}></div>
                    <h2>Market Analysis</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/laptop-2.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">“We decode the market landscape to identify  <br />where you can lead and grow.”</p>
                </div>
            </div>
            {/* Step - 4 */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-63.png)" }}></div>
                    <h2>Generate Market Strategy</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/mobile-2.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">“We craft a clear, customized strategy to position you ahead of the curve.”</p>
                </div>
            </div>
            {/* Step - 5 */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-63.png)" }}></div>
                    <h2>Implement</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700"><img src="assets/images/resource/laptop-2.png" alt=""/></figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">“We bring the plan to life, turning strategies into measurable results.”</p>
                </div>
            </div>
        </section>

        </>
    )
}
