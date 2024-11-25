"use client"
import { useState } from "react";
import Image from "next/image";
import "../../style/Home.css";
import ContactUs from "./ContactUs/page";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle FAQ on click
  };
  return (
    <>
      {/* Header Section */}
      <div className="container">
        <div className="heading-title">
          <span>Unique Solutions </span>
          <span>for Website Building</span>
          <p className="heading-description">
            At <strong>CodeweaveTech</strong>, we create innovative,
            user-friendly websites tailored to your needs. Combining creativity
            and technology, we deliver solutions that make your digital presence
            stand out.
          </p>
        </div>
      </div>
      {/* Services Section */}
      <div className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <main className="page-content">
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Web Development</h2>
              <p className="data-content">
                Build robust, dynamic, and scalable websites tailored to meet
                your business needs.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Mobile App Development</h2>
              <p className="data-content">
                Create innovative and user-friendly mobile applications for iOS
                and Android platforms.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">SEO</h2>
              <p className="data-content">
                Optimize your website to improve search engine rankings and
                drive organic traffic.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Responsive Web Design</h2>
              <p className="data-content">
                Design websites that provide an optimal viewing experience
                across all devices and screen sizes.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Logo Design</h2>
              <p className="data-content">
                Craft unique and memorable logos that represent your brand
                identity.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Banner Design</h2>
              <p className="data-content">
                Design eye-catching banners to effectively communicate your
                brand message.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">Web Design</h2>
              <p className="data-content">
                Combine creativity and usability to design visually appealing
                and functional websites.
              </p>
            </div>
          </div>
          <div className="d_card">
            <div className="content">
              <h2 className="heading">API Development and Integration</h2>
              <p className="data-content">
                Develop and integrate APIs to ensure seamless connectivity
                between applications and services.
              </p>
            </div>
          </div>
        </main>
      </div>
      {/* about-us */}
      <section className="about-us">
        <div className="about_container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                At <strong>CodeweaveTech</strong>, we empower businesses by
                blending cutting-edge technology with creativity. With expertise
                in web development, mobile apps, and digital solutions, we
                deliver impactful innovations tailored to your success.
              </p>
              <p>
                Our mission is to simplify complex technologies and transform
                ideas into reality. Guided by our vision to lead global digital
                transformation, we collaborate closely with startups and
                enterprises to unlock their potential.
              </p>
              <p>
                <strong>Mission:</strong> Deliver seamless IT solutions that
                inspire growth and transformation.
              </p>
              <p>
                <strong>Vision:</strong> To be a global leader in IT,
                revolutionizing businesses with future-ready solutions.
              </p>
              <a href="#contact" className="btn">
                Contact Us
              </a>
            </div>
            <div className="about-image">
              <img src="assets/image2.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section className="portfolio">
        <div className="portfolio_container">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img
                src="/assets/Screenshot 2024-11-24 114248.png"
                alt="Project 1"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">JS Master</h3>
                <p className="portfolio-description">
                  JS Masters is an interactive platform designed to enhance
                  JavaScript skills. It features tutorials, hands-on challenges,
                  and a sleek user interface built with Next.js. This project
                  showcases dynamic content, responsive design, and seamless
                  deployment on Vercel.
                </p>

                <a
                  href="https://js-masters.vercel.app/"
                  target="_blank"
                  className="portfolio-link"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                src="/assets/jobupdate360.png"
                alt="Project 2"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">jobupdate360</h3>
                <p className="portfolio-description">
                  Job Update 360 is a job portal offering real-time updates on
                  job openings. Built with React, Node.js, and MongoDB, it
                  features job search, filters, and a responsive design.
                </p>

                <a
                  href="https://jobupdate360.in"
                  target="_blank"
                  className="portfolio-link"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <img
                src="/assets/adventure.png"
                alt="Project 3"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">Adventure Trip</h3>
                <p className="portfolio-description">
                  An interactive platform for exploring and booking adventure
                  trips, featuring a responsive design and seamless user
                  experience.
                </p>
                <a
                  href="https://adventuretrip.onrender.com"
                  target="_blank"
                  className="portfolio-link"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                src="/assets/chitchat.png"
                alt="Chitchat App"
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">Chitchat App</h3>
                <p className="portfolio-description">
                  A real-time chat app with individual chats, media sharing, and
                  friend request features for a seamless user experience.
                </p>
                <a
                  href="https://chitchat-drab-ten.vercel.app"
                  target="_blank"
                  className="portfolio-link"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials  */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "CodeweaveTech transformed our online presence with a stunning
              website and seamless functionality. Highly recommend their
              services!"
            </p>
            <h4 className="testimonial-author">- Nikhil</h4>
            <p className="testimonial-position">CEO, jobupdate360</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The mobile app they developed for us was innovative and
              user-friendly. The team is highly skilled and professional."
            </p>
            <h4 className="testimonial-author">- Ajit Kumar</h4>
            <p className="testimonial-position">Founder, Zoro.Pc</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Their attention to detail and commitment to quality exceeded our
              expectations. Great job, CodeweaveTech!"
            </p>
            <h4 className="testimonial-author">- Mr. Girija</h4>
            <p className="testimonial-position">Manager, JS Master</p>
          </div>
        </div>
      </section>

      {/* why-choose-us  */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-description">
          At CodeweaveTech, we are dedicated to delivering top-notch services
          tailored to your needs. Here’s what sets us apart:
        </p>
        <div className="cards-container">
          <div className="card">
            <div className="icon-container">
              <i className="fas fa-check-circle" aria-hidden="true"></i>
            </div>
            <h3 className="card-title">Quality Assurance</h3>
            <p className="card-text">
              We prioritize quality in every project, ensuring exceptional
              results that exceed expectations.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <i className="fas fa-users" aria-hidden="true"></i>
            </div>
            <h3 className="card-title">Expert Team</h3>
            <p className="card-text">
              Our skilled professionals bring a wealth of experience and
              expertise to every project.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <i className="fas fa-rocket" aria-hidden="true"></i>
            </div>
            <h3 className="card-title">Innovative Solutions</h3>
            <p className="card-text">
              We embrace creativity and innovation to deliver cutting-edge
              solutions for your business.
            </p>
          </div>
          <div className="card">
            <div className="icon-container">
              <i className="fas fa-handshake" aria-hidden="true"></i>
            </div>
            <h3 className="card-title">Client-Centric Approach</h3>
            <p className="card-text">
              Your satisfaction is our priority. We work closely with you to
              understand and meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/*  Contact Us Section */}

      <ContactUs />

      {/* Our Technology Stack */}
      <section className="tech-stack">
        <h2 className="tech-title">Our Technology Stack</h2>
        <p className="tech-description1">
          We utilize the latest and most reliable technologies to provide
          exceptional services.
        </p>
        <div className="container_tech">
          <div className="card-left">
            <div className="card-image">
              <img src="/assets/nextjs.png" alt="Image 1" />
            </div>
            <div className="card-text">
              <p>
                Next.js is a powerful React framework that enables fast,
                scalable, and optimized web applications.
              </p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="/assets/nodejs.jpg" alt="Image 2" />
            </div>
            <div className="card-text">
              <p>
                Node.js allows us to build scalable backend services using
                JavaScript for faster and efficient development.
              </p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="/assets/React.png" alt="Image 3" />
            </div>
            <div className="card-text">
              <p>
                React is a JavaScript library for building interactive user
                interfaces, making development faster and more efficient.
              </p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="/assets/channels4_profile.jpg" alt="Image 4" />
            </div>
            <div className="card-text">
              <p>
                Amazon Web Services (AWS) provide cloud infrastructure to host,
                manage, and scale applications with ease.
              </p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="/assets/1_KGlC33spupgkBPomn1aT3A.jpg" alt="Image 5" />
            </div>
            <div className="card-text">
              <p>
                Docker simplifies the development and deployment of applications
                by using containerization for portability.
              </p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-image">
              <img
                src="https://i0.wp.com/everyday.codes/wp-content/uploads/2019/12/og_image.png?fit=1200%2C630&ssl=1"
                alt="Image 6"
              />
            </div>
            <div className="card-text">
              <p>
                GraphQL is a query language for APIs, allowing us to fetch
                exactly the data we need in a single request.
              </p>
            </div>
          </div>

          <div className="card-left">
            <div className="card-image">
              <img src="/assets/1_cGDDA2mfYkjiIhGaN8gDoA.png" alt="Image 7" />
            </div>
            <div className="card-text">
              <p>
                AngularJS is a JavaScript-based framework for building dynamic
                web applications.
              </p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-image">
              <img
                src="/assets/kuzt9r42or1fxvlq2-Meta_Generic.png"
                alt="Image 8"
              />
            </div>
            <div className="card-text">
              <p>
                MongoDB is a NoSQL database that stores data in a flexible,
                JSON-like format.
              </p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn9djlMmqMEnNhETDtAZUaVMxhO5jvldqqA&s"
                alt="Image 9"
              />
            </div>
            <div className="card-text">
              <p>
                MySQL is a popular open-source relational database management
                system (RDBMS).
              </p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="/assets/introduction.webp" alt="Image 10" />
            </div>
            <div className="card-text">
              <p>
                Vue.js is a progressive JavaScript framework for building user
                interfaces.
              </p>
            </div>
          </div>

          <div className="card-left">
            <div className="card-image">
              <img
                src="/assets/How-to-Build-a-Mobile-App-With-React-Native.jpg"
                alt="Image 11"
              />
            </div>
            <div className="card-text">
              <p>
                React Native is a framework for building mobile applications
                using JavaScript and React.
              </p>
            </div>
          </div>

          <div className="card-left">
            <div className="card-image">
              <img
                src="https://t3.ftcdn.net/jpg/04/06/98/90/360_F_406989000_erQ5cdOAtXKDc7Fx2De2AfF9RpHrw2xQ.jpg"
                alt="Image 12"
              />
            </div>
            <div className="card-text">
              <p>
                HTML (HyperText Markup Language) is the standard language for
                creating and structuring web pages.
              </p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="/assets/css3-logo.webp" alt="Image 13" />
            </div>
            <div className="card-text">
              <p>
                CSS (Cascading Style Sheets) is a stylesheet language used for
                designing the visual appearance of a webpage.
              </p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-image">
              <img
                src="/assets/Firebase-blog-feature-image-1.jpg"
                alt="Image 14"
              />
            </div>
            <div className="card-text">
              <p>
                Firebase is a platform by Google that provides backend services
                such as real-time databases, authentication, cloud storage, and
                hosting for web mobile.
              </p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img
                src="/assets/b51b78ecc9e5711274931774e433b5e6.png"
                alt="Image 15"
              />
            </div>
            <div className="card-text">
              <p>
                GitHub is a web-based platform for version control and
                collaboration. It allows developers to host, review, and manage
                code repositories etc.
              </p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="/assets/gitlabr-feature.png" alt="Image 16" />
            </div>
            <div className="card-text">
              <p>
                GitLab is a DevOps platform offering a suite of tools for
                managing code repositories, CI/CD pipelines, and project
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* pricing-plans */}
      <div className="main-container">
        <section class="pricing-plans">
          <div class="pricing-card basic">
            <div class="heading">
              <h4>BASIC</h4>
              <p>For startups and small businesses</p>
            </div>
            <p class="price">
              ₹5,000
              <sub>/month</sub>
            </p>
            <ul class="features">
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Responsive Website</strong> (up to 5 pages)
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Basic SEO</strong> setup
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Monthly Reports</strong>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Email</strong> support
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>2 Years Maintenance</strong> free
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Free Small Changes</strong>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Additional Features</strong> (small charges may apply)
              </li>
            </ul>
            <Link href="/ContactUs">
              <button class="contact_b">Contact Us</button>
            </Link>
          </div>

          <div class="pricing-card standard">
            <div class="heading">
              <h4>STANDARD</h4>
              <p>For growing businesses</p>
            </div>
            <p class="price">
              ₹15,000
              <sub>/month</sub>
            </p>
            <ul class="features">
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Dynamic Website</strong> (up to 15 pages)
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Advanced SEO</strong> & analytics
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Weekly Reports</strong>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Priority</strong> support
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>2 Years Maintenance</strong> free
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Free Small Changes</strong>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Additional Features</strong> (small charges may apply)
              </li>
            </ul>
            <Link href="/ContactUs">
              <button class="contact_b">Contact Us</button>
            </Link>
          </div>

          <div class="pricing-card premium">
            <div class="heading">
              <h4>PREMIUM</h4>
              <p>For enterprises and large businesses</p>
            </div>
            <p class="price">
              ₹30,000
              <sub>/month</sub>
            </p>
            <ul class="features">
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Custom Web Application</strong> development
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Full Stack</strong> solutions
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>24/7</strong> priority support
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Comprehensive Security</strong> solutions
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>2 Years Maintenance</strong> free
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Free Small Changes</strong>
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                <strong>Additional Features</strong> (small charges may apply)
              </li>
            </ul>
            <Link href="/ContactUs">
              <button class="contact_b">Contact Us</button>
            </Link>
          </div>
        </section>
      </div>
{/* FAQ  */}
<section className="faq_container">
      <h2 className="faq_heading">Frequently Asked Questions</h2>
      <div className="faq_list">
        <div className="faq_item">
          <h3 className="faq_question" onClick={() => toggleFAQ(0)}>
            What is included in the free maintenance?
            <span className={`faq_icon ${openFAQ === 0 ? "open" : ""}`}>
              {openFAQ === 0 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          {openFAQ === 0 && (
            <p className="faq_answer">
              Free maintenance includes fixing bugs, ensuring website uptime, and making minor content updates as per your request.
            </p>
          )}
        </div>

        <div className="faq_item">
          <h3 className="faq_question" onClick={() => toggleFAQ(1)}>
            Are there any hidden charges?
            <span className={`faq_icon ${openFAQ === 1 ? "open" : ""}`}>
              {openFAQ === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          {openFAQ === 1 && (
            <p className="faq_answer">
              No hidden charges. However, additional features or significant changes outside the agreed scope may incur minimal charges.
            </p>
          )}
        </div>

        <div className="faq_item">
          <h3 className="faq_question" onClick={() => toggleFAQ(2)}>
            Can I upgrade my plan later?
            <span className={`faq_icon ${openFAQ === 2 ? "open" : ""}`}>
              {openFAQ === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          {openFAQ === 2 && (
            <p className="faq_answer">
              Yes, you can upgrade your plan anytime. Simply contact our support team, and we'll assist you with the process.
            </p>
          )}
        </div>

        <div className="faq_item">
          <h3 className="faq_question" onClick={() => toggleFAQ(3)}>
            What happens after the 2 years of free maintenance?
            <span className={`faq_icon ${openFAQ === 3 ? "open" : ""}`}>
              {openFAQ === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          {openFAQ === 3 && (
            <p className="faq_answer">
              After the 2-year free maintenance period, you can choose to extend the maintenance service for an affordable fee.
            </p>
          )}
        </div>

        <div className="faq_item">
          <h3 className="faq_question" onClick={() => toggleFAQ(4)}>
            How do I request changes to my website?
            <span className={`faq_icon ${openFAQ === 4 ? "open" : ""}`}>
              {openFAQ === 4 ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h3>
          {openFAQ === 4 && (
            <p className="faq_answer">
              You can request changes via email or our support portal. For small updates, it’s completely free as per our policy.
            </p>
          )}
        </div>
      </div>
    </section>


    </>
  );
}
