'use client'
import Link from "next/link"

export default function Discuss(){
    return (
        <> 

        <section className="discuss-section centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-67.png)" }}></div>
            <div className="dark-pattern" style={{ backgroundImage: "url(/assets/images/shape/shape-68.png)" }}></div>
            <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-69.png)" }}></div>
            <div className="pattern-2-light rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-70.png)" }}></div>
            <div className="pattern-3 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-71.png)" }}></div>
            <div className="pattern-3-light rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-72.png)" }}></div>
            <div className="auto-container">
                <div className="content-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                    <h1>So, you want a <br /><span>research.</span> We can take, make it <span>awesome</span></h1>
                    <div className="link-box">
                        <h2>Let’s <span>Discuss &amp; Start</span></h2>
                        <Link href="/contact"><i className="icon-18"></i></Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
