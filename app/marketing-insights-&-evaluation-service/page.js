'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Service_Details_one() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }


    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={5} footerStyle={5}>
            
            <section className="service-details">
                <div className="shape">
                    <div className="shape-1 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-55.png)" }}></div>
                    <div className="shape-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-72.png)" }}></div>
                    <div className="shape-3 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-69.png)" }}></div>
                    <div className="shape-4 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-70.png)" }}></div>
                    <div className="shape-5" style={{ backgroundImage: "url(assets/images/shape/shape-4.jpg)" }}></div>
                    <div className="shape-6" style={{ backgroundImage: "url(assets/images/shape/shape-5.jpg)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                            <div className="service-details-content mr_130">
                                <div className="content-one mb_70">
                                    <div className="upper-text mb_40">
                                        <h2>Marketing Insights & Evaluation</h2>
                                        <p>Competitor Analysis & Landscape</p>
                                    </div>
                                    {/* <figure className="image-box mb_50"><img src="assets/images/service/marketing-insights-&-evaluation-service.jpg" alt=""/></figure> */}
                                    <div className="text-box mb_50">
                                        <p>Stay ahead of the curve by understanding your market, competitors, and consumer behavior better than anyone else. We offer deep-dive marketing evaluations that go beyond basic metrics to give you the full picture. From SWOT analysis to market share tracking, pricing studies, and trend monitoring, our insights help optimize campaigns and brand positioning. We gather real-time and historical data from trusted sources to build a solid competitive landscape. Whether launching a product or rebranding, our marketing evaluations are your strategic advantage. We translate numbers into narratives that guide promotional tactics, budget allocation, and audience targeting.</p>
                                    </div>
                                    <h3>Our Goal</h3>
                                    <ul className="list-style-one clearfix">
                                        <li>Empower your brand through competitor intelligence</li>
                                        <li>Identify gaps and opportunities in your market</li>
                                        <li>Support optimized marketing decision-making</li>
                                    </ul>
                                </div>
                                <div className="content-two mb_70">
                                    <div className="text-box mb_40">
                                        <h2>Work Process</h2>
                                        <p>Designed to help brands decode market trends, competitor performance, and audience behavior with clarity.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-44"></i></div>
                                                <h3>Collect Doc</h3>
                                                <p>Define target markets, competitors, and objectives.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-45"></i></div>
                                                <h3>Check & Finalize</h3>
                                                <p>Analyze trends, segments, and strategic gaps.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-46"></i></div>
                                                <h3>Completed</h3>
                                                <p>Provide actionable marketing report and advisory.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-three">
                                    <h2>Any Questions Find here.</h2>
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"><i className="icon-29"></i></div>
                                                <h3>Do you analyze social media presence as part of competitor analysis?</h3>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <p>Yes, we evaluate digital footprint, engagement, and campaign effectiveness.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"><i className="icon-29"></i></div>
                                                <h3>Can you evaluate offline and online strategies together?</h3>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <p>Absolutely. We offer hybrid channel analysis.</p>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar">
                                <div className="service-category">
                                    <div className="sidebar-shape" style={{ backgroundImage: "url(assets/images/shape/shape-168.png)" }}></div>
                                    <h3>Services</h3>
                                    <ul className="category-list clearfix">
                                        <li><Link href="/custom-research-&-consulting-service">Custom Research & Consulting</Link></li>
                        <li><Link href="/academic-&-writing-services-service">Academic & Writing Services</Link></li>
                        <li><Link href="/academic-&-writing-services-service">Data-driven Strategy & Reports</Link></li>
                        <li><Link href="/marketing-insights-&-evaluation-service">Marketing Insights & Evaluation</Link></li>
                        <li><Link href="/ui-ux-&-visual-ontent-service">UI/UX & Visual Content</Link></li>
                        <li><Link href="/patent-&-ip-solutions-service">Patent & IP Solutions</Link></li>
                        <li><Link href="/website-&-app-development-service">Website & App Development</Link></li>
                                    </ul>
                                </div>
                                <div className="contact-widget">
                                    <div className="sidebar-shape" style={{ backgroundImage: "url(assets/images/shape/shape-169.png)" }}></div>
                                    <h3>Any Questions? Let’s talk</h3>
                                    <Link href="/contact">Let’s Talk</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="discuss-section centred">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.jpg)" }}></div>
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
                            <Link href="/index-5"><i className="icon-18"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}