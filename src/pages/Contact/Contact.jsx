import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
      <Navbar />
      <div className="contact">
        <div className="contact-page">
          <h1>Get In Touch</h1>
          <p>
            Sit vulputate faucibus eget eget scelerisque faucibus malesuada
            nullam mollis ut montes, dui scelerisque ornare.
          </p>
          <div className="address">
            <div className="c_icon">
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{ color: "#45DCAA", fontSize: "1.5rem" }}
              />
            </div>
            <div className="info">
              <p>VISIT US</p>
              <span>123 Demo St, San Francisco, CA 45678, United States</span>
            </div>
          </div>
          <div className="address">
            <div className="c_icon">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#45DCAA", fontSize: "1.5rem" }}
              />
            </div>
            <div className="info">
              <p>CALL US</p>
              <span>+1 123-456-7890</span>
            </div>
          </div>
          <div className="address">
            <div className="c_icon">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#45DCAA", fontSize: "1.5rem" }}
              />
            </div>
            <div className="info">
              <p>EMAIL US</p>
              <span>mail@example.com</span>
            </div>
          </div>
          <h4>FOLLOW US</h4>
          <div className="social_links">
            <AiFillInstagram size={32} />
            <AiFillLinkedin size={32} />
            <AiFillFacebook size={32} />
            <BsPinterest size={32} />
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0450819579573!2d78.47208957503413!3d17.361563583521168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sCharminar!5e0!3m2!1sen!2sin!4v1699376167870!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </>
  );
}

export default Contact;
