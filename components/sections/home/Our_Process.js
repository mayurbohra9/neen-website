'use client'
import Link from "next/link"

export default function OurProcess() {
    return (
        <> 
        <section className="our_process-style-six centred sec-title-animation animation-style2">
            
            {/* Step 1: Gather & Research Insights */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-61.png)" }}></div>
                    <div className="upper-text" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700">
                        <span>Our Process</span><i className="icon-19"></i>
                    </div>
                    <h2>Gather & <br />Research Insights</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                        <img src="/assets/images/resource/laptop-2.png" alt="" />
                    </figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">
                        “We begin by collecting actionable data and researching trends, competitors, and customer behavior to lay a strong foundation for strategic growth.”
                    </p>
                </div>
            </div>

            {/* Step 2: Analyze & Strategize */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-63.png)" }}></div>
                    <h2>Analyze & <br />Strategize</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                        <img src="/assets/images/resource/mobile-2.png" alt="" />
                    </figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">
                        “We decode the market landscape and design tailored market strategies that position your business ahead of the competition.”
                    </p>
                </div>
            </div>

            {/* Step 3: Implement & Optimize */}
            <div className="outer-container">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-60.png)" }}></div>
                <div className="block-one">
                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-63.png)" }}></div>
                    <h2>Implement & <br />Optimize</h2>
                    <figure className="image-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                        <img src="/assets/images/resource/laptop-2.png" alt="" />
                    </figure>
                </div>
                <div className="block-two">
                    <p className="title-animation">
                        “We bring strategies to life through actionable execution and continuous optimization for measurable outcomes.”
                    </p>
                </div>
            </div>

        </section>
        </>
    )
}
