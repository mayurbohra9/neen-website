'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"

export default function Contact() {


    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={17} footerStyle={9}>
            
            <section className="contact-style-five">
                <div className="large-container">
                    <div className="title-text centred mb_100 sec-title-animation animation-style2">
                        <h2 className="title-animation">Anything in Mind? <br />Let's Talk</h2>
                        <p className="title-animation">Contact our team for informative responses to your inquiries.</p>
                    </div>
                    <div className="form-inner">
                        <form method="post" action="sendemail.php" id="contact-form" className="default-form" novalidate="novalidate"> 
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label>Name*</label>
                                    <input type="text" name="username" placeholder="Your Full Name" required="" aria-required="true"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label>Email*</label>
                                    <input type="email" name="email" placeholder="Your Email Address" required="" aria-required="true"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label>Phone*</label>
                                    <input type="text" name="phone" required="" placeholder="Phone Number" aria-required="true"/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <label>Subject*</label>
                                    <input type="text" name="subject" required="" placeholder="Subject" aria-required="true"/>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Message*"></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button className="theme-btn-three" type="submit" name="submit-form">SEND MESSAGE<span></span><span></span><span></span> <span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}