'use client'
import { useState, useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Neen Inovations | One-stop solution for market & academic research";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: [
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }
      ]
    };

    try {
      // 1. Send data to SheetDB
      const sheetDBRes = await fetch('https://sheetdb.io/api/v1/al76nn1iga8xp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // 2. Send data to Email via FormSubmit
      const formSubmitRes = await fetch("https://formsubmit.co/ajax/neeninnovations@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Subject: formData.subject,
          Message: formData.message
        })
      });

      if (sheetDBRes.ok && formSubmitRes.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        console.error("Submission failed in one or both services.");
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

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
              {submitted ? (
                <div className="success-message">Thank you! Your message has been sent.</div>
              ) : (
                <form className="default-form" noValidate onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Name*</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Email*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Phone*</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Subject*</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea
                        name="message"
                        placeholder="Message*"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button className="theme-btn-three" type="submit">
                        SEND MESSAGE
                        <span></span><span></span><span></span><span></span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
