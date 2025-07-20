'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/neen-white.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/index-5">Home</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/about-4">About</Link></li>
                                {/* <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/portfolio-4">Work</Link></li> */}
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/service-4">Service</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/service-1">Custom Research & Consulting</Link></li>
                                        <li><Link href="/service-2">Academic & Writing Services</Link></li>
                                        <li><Link href="/service-3">Data-driven Strategy & Reports</Link></li>
                                        <li><Link href="/service-4">Marketing Insights & Evaluation</Link></li>
                                        <li><Link href="/service-5">UI/UX & Visual Content</Link></li>
                                        <li><Link href="/service-6">Patent & IP Solutions</Link></li>
                                        <li><Link href="/service-7">Website & App Development</Link></li>
                                         
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/blog">Blog</Link>
                                    {/* <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Mumbai, Maharashtra, India</li>
                            <li><Link href="tel:+91 00000 00000">+91 00000 00000</Link></li>
                            <li><Link href="mailto:example@example.com">example@example.com</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
