import React from "react";
import "./Contactus.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactUs = () => {
  return (
    <div className="contact-container">
      
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact BrightSpark Electricals</h1>
        <p>Your Trusted Partner for Quality Electrical Solutions ⚡</p>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <p>+1 234 567 890</p>
        </div>

        <div className="info-card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>support@brightspark.com</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Visit Us</h3>
          <p>123 Power Street, New York, NY</p>
        </div>

        <div className="info-card">
          <FaClock className="icon" />
          <h3>Working Hours</h3>
          <p>Mon - Sat: 9AM - 8PM</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <input type="text" placeholder="Subject" required />

            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message ⚡</button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            title="shop-location"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p>© 2026 BrightSpark Electricals | Powering Your World ⚡</p>
      </div>
    </div>
  );
};

export default contactus;
