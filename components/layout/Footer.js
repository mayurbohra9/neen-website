import Link from "next/link"

export default function Footer() {
    return (
        <>          
        <footer className=" footer-style footer-style-four">
            <div className="outer-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                        <div className="footer-widget logo-widget" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="700">
                            <figure className="footer-logo mb_25"><Link href="/"><img src="/assets/images/neen-black.jpeg" alt=""/></Link></figure>
                            <figure className="footer-logo-light mb_25"><Link href="/"><img src="/assets/images/neen-white.jpeg" alt=""/></Link></figure>
                            <h2>Get, quality business research & growth.</h2>
                            <div className="copyright mt_55"><p><span>&copy; {new Date().getFullYear()}</span> All Right Reserved. </p></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                        <div className="footer-widget contact-widget ml_150" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="700">
                            <ul className="footer-menu mb_70">
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/services">Service</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                            <div className="inner-box mb_70">
                                <p>Mumbai, Maharashtra India,<br />
                                +91 85917 50589, <br />neeninnovations@gmail.com
                                </p>
                                <ul className="social-style-one">
                                    {/* <li><Link href="/index-5">Tw</Link></li> */}
                                    {/* <li><Link href="/index-5">Fb</Link></li> */}
                                    <li><Link href="https://www.linkedin.com/company/neen-innovations/" target="_blank">Li</Link></li>
                                    <li><Link href="https://www.instagram.com/neeninnovations/">In</Link></li>
                                </ul>
                            </div>
                            {/* <div className="form-inner">
                                <span>Join our newsletter</span>
                                <form method="post" action="/index-5">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="email@gmail.com" required/>
                                        <button type="submit"><i className="icon-20"></i></button>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
