import React from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  const sectionStyle = {
    padding: "80px 16px",
    backgroundColor: "#f7f7f7",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "60px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
  };

  const infoRow = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "24px",
  };

  const iconBox = {
    backgroundColor: "#fff4b3",
    padding: "12px",
    borderRadius: "50%",
    marginRight: "16px",
    color: "#facc15",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    marginBottom: "16px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#ffec1f",
    color: "#061523",
    fontWeight: "bold",
    padding: "16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Heading */}
        <div style={headingStyle}>
          <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#061523" }}>
            Get In <span style={{ color: "#ffec1f" }}>Touch</span>
          </h2>
          <p style={{ color: "#555", marginTop: "10px" }}>
            Have questions? Visit our store or contact us directly.
          </p>
        </div>

        {/* Grid */}
        <div style={gridStyle}>
          {/* Contact Info */}
          <div style={cardStyle}>
            <h3 style={{ marginBottom: "30px", fontSize: "22px" }}>
              Contact Information
            </h3>

            <div style={infoRow}>
              <div style={iconBox}>
                <MapPin size={20} />
              </div>
              <div>
                <strong>Our Location</strong>
                <p>Kottawa road,Colombo, Sri Lanka</p>
              </div>
            </div>

            <div style={infoRow}>
              <div style={iconBox}>
                <Phone size={20} />
              </div>
              <div>
                <strong>Phone</strong>
                <p>+94 11 234 5678</p>
              </div>
            </div>

            <div style={infoRow}>
              <div style={iconBox}>
                <MessageCircle size={20} />
              </div>
              <div>
                <strong>WhatsApp</strong>
                <p>+94 77 123 4567</p>
              </div>
            </div>

            <div style={infoRow}>
              <div style={iconBox}>
                <Mail size={20} />
              </div>
              <div>
                <strong>Email</strong>
                <p>info@nettecelectronic.lk</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={cardStyle}>
            <h3 style={{ marginBottom: "30px", fontSize: "22px" }}>
              Send us a Message
            </h3>

            <input type="text" placeholder="Full Name" style={inputStyle} />
            <input type="tel" placeholder="Phone Number" style={inputStyle} />
            <input type="email" placeholder="Email Address" style={inputStyle} />
            <textarea
              rows="4"
              placeholder="Your Message"
              style={inputStyle}
            ></textarea>

            <button style={buttonStyle}>
              Send Message
              <Send size={18} style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
