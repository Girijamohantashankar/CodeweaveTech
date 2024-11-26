'use client'
import React, { useState } from "react";
import "../../../style/ContactUs.css";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value || "" })); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="Contact_container">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          We’d love to hear from you! Reach out to us for any queries, feedback, or collaboration opportunities.
        </p>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-button">
              Send Message
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
          
          <div className="contact-animation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="contact-svg"
              fill="#FF5722"
            >
              <path d="M502.3 190.8L320 64c-6.7-4.8-14.8-7.4-23.3-7.4H32C14.3 56.6 0 70.9 0 88.6V424c0 17.7 14.3 32 32 32h464c17.7 0 32-14.3 32-32V214.2c0-11.8-6.5-22.8-16.7-29.4zM480 432H32V88.6L248 208l216-119.4V432zm0-271.5L248 278.3 32 160.5V120l216 118.3L480 120v40.5z" />
            </svg>
            <p className="animation-text">Your message is safe with us!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
