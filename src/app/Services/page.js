import React from "react";
import "../../../style/Services.css";

function Page() {
  return (
    <section className="services-container">
      {/* Header Section */}
      <div className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Creative solutions to elevate your business to the next level.
        </p>
      </div>

      {/* Services List */}
      <div className="services-list">
        {/* Web Development */}
        <div className="service-card">
          <img
            src="/assets/is_web_development_good_career.avif"
            alt="Web Development"
            className="service-image"
          />
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            Build robust, dynamic, and scalable websites tailored to your
            business needs.
          </p>
        </div>

        {/* Mobile App Development */}
        <div className="service-card">
          <img
            src="/assets/App-Development-1.png"
            alt="Mobile App Development"
            className="service-image"
          />
          <h2 className="service-title">Mobile App Development</h2>
          <p className="service-description">
            Create user-friendly mobile applications to enhance your brand
            presence on the go.
          </p>
        </div>

        {/* Web Design */}
        <div className="service-card">
          <img
            src="/assets/1708422990591.png"
            alt="Web Design"
            className="service-image"
          />
          <h2 className="service-title">Web Design</h2>
          <p className="service-description">
            Craft stunning and intuitive website designs that captivate your
            audience.
          </p>
        </div>

        {/* Logo Design */}
        <div className="service-card">
          <img
            src="/assets/logo1.png"
            alt="Logo Design"
            className="service-image"
          />
          <h2 className="service-title">Logo Design</h2>
          <p className="service-description">
            Design unique and memorable logos that represent your brand
            identity.
          </p>
        </div>

        {/* Banner Design */}
        <div className="service-card">
          <img
            src="/assets/Free-Creative-Simple-Banner-Design-Template-1180x664.jpg"
            alt="Banner Design"
            className="service-image"
          />
          <h2 className="service-title">Banner Design</h2>
          <p className="service-description">
            Create eye-catching banners to promote your brand effectively across
            all platforms.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <h2>Let’s Build Something Great Together</h2>
        <p>
          Partner with us for creative and innovative solutions tailored to your
          needs.
        </p>
        <button className="services-btn">Contact Us</button>
      </div>
    </section>
  );
}

export default Page;
