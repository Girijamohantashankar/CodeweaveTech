import React from "react";
import "../../../style/About.css";
import Link from "next/link";

function Page() {
  return (
    <section className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-title">Welcome to CodeweaveTech</h1>
        <p className="about-subtitle">
          Empowering businesses with innovative technology solutions.
        </p>
        {/* <img
          className="about-hero-image"
          src="/assets/7747.jpg"
          alt="About Us"
        /> */}
      </div>

      {/* About Us Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At CodeweaveTech, we are a passionate team of developers, designers,
            and innovators dedicated to creating impactful solutions for our
            clients. From web and app development to digital transformation, we
            thrive on delivering excellence.
          </p>
        </div>
        <img className="about-image" src="/assets/2672335.jpg" alt="Our Team" />
      </div>

      {/* Vision Section */}
      <div className="about-vision">
        <h2>Our Vision</h2>
        <div className="vision-content">
          <p>
            We aim to revolutionize the IT industry with groundbreaking ideas
            and customer-focused services. Innovation, quality, and
            collaboration are at the heart of what we do.
          </p>
          <img
            className="about-vision-image"
            src="/assets/6671.jpg"
            alt="Vision"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="about-contact">
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind? Let's bring your vision to life. Contact us
          today to discuss your requirements and start building the future!
        </p>
        <Link href={"/ContactUs"}>
          <button className="about-contact-btn">Get in Touch</button>
        </Link>
      </div>
    </section>
  );
}

export default Page;
