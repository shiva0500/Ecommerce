import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import "./Contact.css";



import Commonnav from "../../components/Navbar/Commonnav";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending the data to a server.
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Commonnav />
      <div className="contact">
        <div className="contact-page">
          <h1>Get In Touch</h1>
          <p>
            Sit vulputate faucibus eget eget scelerisque faucibus malesuada
            nullam mollis ut montes, dui scelerisque ornare.
          </p>
          <div className="address">
            <div className="c_icon">
            <i class="fas fa-map-pin" style={{ color: "#45DCAA", fontSize: "1.5rem" }}></i>

              
            </div>
            <div className="info">
              <p>VISIT US</p>
              <span>123 Demo St, San Francisco, CA 45678, United States</span>
            </div>
          </div>
          <div className="address">
            <div className="c_icon">
            <i class="fas fa-phone" style={{ color: "#45DCAA", fontSize: "1.5rem" }}></i>
            </div>
            <div className="info">
              <p>CALL US</p>
              <span>+1 123-456-7890</span>
            </div>
          </div>
          <div className="address">
            <div className="c_icon">
            <i class="fas fa-envelope" style={{ color: "#45DCAA", fontSize: "1.5rem" }}></i>
            </div>
            <div className="info">
              <p>EMAIL US</p>
              <span>mail@example.com</span>
            </div>
          </div>
          <h4>FOLLOW US</h4>
          <div className="social_links">

  <i class="ri-instagram-fill" style={{fontSize: "32px"}}></i>

  <i class="ri-linkedin-fill"  style={{fontSize: "32px"}}></i>

  <i class="ri-facebook-fill" style={{fontSize: "32px"}}></i>

  <i class="ri-pinterest-fill"  style={{fontSize: "32px"}}></i>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Drop us a line or two</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Your message"
              id="message"
              name="message"
              cols="15"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0450819579573!2d78.47208957503413!3d17.361563583521168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sCharminar!5e0!3m2!1sen!2sin!4v1699376167870!5m2!1sen!2sin"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <Footer />
    </>
  );
}

export default Contact;
