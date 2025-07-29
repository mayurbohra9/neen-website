'use client'
import Link from "next/link"

export default function Service(){
    return (
        <> 

        <section className="service-style service-style-three">
            <div className="outer-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 big-column">
                        <div className="big-content sec-title-animation animation-style2">
                            <h2 className="title-animation">Our Solution & <span>Services.</span></h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="single-item" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className="btn-box mb_200"><Link href="/contact" className="theme-btn-three">Let’s Talk <span></span><span></span><span></span><span></span></Link></div>
                                    <div className="service-block-two">
                                        <div className="inner-box">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-56.png)" }}></div>
                                            <span className="count-text">01</span>
                                            <h3><Link href="/custom-research-&-consulting-service">Custom Research & Consulting.</Link></h3>
                                            <p>Market Study & Intelligence</p>
                                            <div className="link"><Link href="/custom-research-&-consulting-service"><i className="icon-1"></i></Link></div>
                                            
                                        </div>

                                        <div className="inner-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-57.png)" }}></div>
                                <span className="count-text">02</span>
                                <h3><Link href="/data-driven-strategy-&-reports-service">Data-driven Strategy & Reports.</Link></h3>
                                <p>Feasibility, M&A, Tech Profiling</p>
                                <div className="link"><Link href="/data-driven-strategy-&-reports-service"><i className="icon-1"></i></Link></div>
                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div className="service-block-two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                                    <div className="inner-box">
                                        <span className="count-text">03</span>
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-58.png)" }}></div>
                                        <h3><Link href="/academic-&-writing-services-service">Academic & Writing Services.</Link></h3>
                                        <p>Thesis, Dissertation, Research Writing</p>
                                        <div className="link"><Link href="/academic-&-writing-services-service"><i className="icon-1"></i></Link></div>
                                        <figure className="vector-image"><img src="assets/images/resource/vector-1.png" alt=""/></figure>
                                        <figure className="vector-image-2"><img src="assets/images/resource/vector-2.png" alt=""/></figure>
                                    </div>

                                    <div className="inner-box">
                                <span className="count-text">04</span>
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-58.png)" }}></div>
                                <h3><Link href="/marketing-insights-&-evaluation-service">Marketing Insights & Evaluation.</Link></h3>
                                <p>Competitor Analysis & Landscape</p>
                                <div className="link"><Link href="/marketing-insights-&-evaluation-service"><i className="icon-1"></i></Link></div>
                                
                            </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 small-column">
                        <div className="service-block-two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="inner-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-57.png)" }}></div>
                                <span className="count-text">05</span>
                                <h3><Link href="/ui-ux-&-visual-content-service">UI/UX & Visual Content.</Link></h3>
                                <p>Sketch Noting, Visual Reports</p>
                                <div className="link"><Link href="/ui-ux-&-visual-content-service"><i className="icon-1"></i></Link></div>
                            </div>
                        </div>
                        <div className="service-block-two" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700">
                            <div className="inner-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-58.png)" }}></div>
                                <span className="count-text">06</span>
                                <h3><Link href="/patent-&-ip-solutions-service">Patent & IP Solutions.</Link></h3>
                                <p>Prior Art & Patent Analysis</p>
                                <div className="link"><Link href="/patent-&-ip-solutions-service"><i className="icon-1"></i></Link></div>
                                
                            </div>
                            <div className="inner-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-56.png)" }}></div>
                                <span className="count-text">07</span>
                                <h3><Link href="/website-&-app-development-service">Website & App Development.</Link></h3>
                                <p>Intuitive, Attractive, Engaging</p>
                                <div className="link"><Link href="/website-&-app-development-service"><i className="icon-1"></i></Link></div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        </>
    )
}
