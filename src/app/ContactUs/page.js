import React from 'react';
import "../../../style/ContactUs.css";

function ContactPage() {
  return (
    <section className="Contact_container">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          We’d love to hear from you! Reach out to us for any queries, feedback, or collaboration opportunities.
        </p>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-input" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-textarea" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="form-submit-button">Send Message</button>
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
