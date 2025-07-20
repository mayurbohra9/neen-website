'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"

export default function About(){
    return (
        <> 

        <section className="about-style about-style-four">
            <div className="outer-container">
                <div className="row clearfix">
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="funfact-inner mb_120 clearfix">
                                <div className="single-item" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">
                                    <div className="count-outer count-box">
                                        <span></span><CounterUp end={100} /><span>+</span>
                                    </div>
                                    <p>Total Clients</p>
                                </div>
                                <div className="single-item" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">
                                    <div className="count-outer count-box">
                                        <CounterUp end={500} /><span>+</span>
                                    </div>
                                    <p>Reports Delivered</p>
                                </div>
                            </div>
                            <div className="link-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                <h2>Let’s <span>Discuss & Start</span></h2>
                                <Link href="/contact"><i className="icon-18"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 text-column">
                        <div className="text-box ml_100 sec-title-animation animation-style2">
                            <h2 className="title-animation">We help you <span>build,</span> manage & <span>protect</span> your wealth</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
