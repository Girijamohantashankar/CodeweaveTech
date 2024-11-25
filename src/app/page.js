import Image from "next/image";
import "../../style/Home.css";
import ContactUs from "./ContactUs/page"

export default function Home() {
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

      {/* <section class="tech-stack">
        <div class="tech-content">
          <h2 class="tech-title">Our Technology Stack</h2>
          <p class="tech-description">
            We utilize the latest and most reliable technologies to provide exceptional services.
          </p>
          <div class="tech-tools">
            <div class="tool-item">
              <img src="path_to_icon/nextjs-icon.png" alt="Next.js" class="tool-icon" />
              <h3>Next.js</h3>
              <p>Next.js is a powerful React framework that enables fast, scalable, and optimized web applications.</p>
            </div>
            <div class="tool-item">
              <img src="path_to_icon/nodejs-icon.png" alt="Node.js" class="tool-icon" />
              <h3>Node.js</h3>
              <p>Node.js allows us to build scalable backend services using JavaScript for faster and efficient development.</p>
            </div>
            <div class="tool-item">
              <img src="path_to_icon/react-icon.png" alt="React" class="tool-icon" />
              <h3>React</h3>
              <p>React is a JavaScript library for building interactive user interfaces, making development faster and more efficient.</p>
            </div>
            <div class="tool-item">
              <img src="path_to_icon/aws-icon.png" alt="AWS" class="tool-icon" />
              <h3>AWS</h3>
              <p>Amazon Web Services (AWS) provide cloud infrastructure to host, manage, and scale applications with ease.</p>
            </div>
            <div class="tool-item">
              <img src="path_to_icon/docker-icon.png" alt="Docker" class="tool-icon" />
              <h3>Docker</h3>
              <p>Docker simplifies the development and deployment of applications by using containerization for portability.</p>
            </div>
            <div class="tool-item">
              <img src="path_to_icon/graphql-icon.png" alt="GraphQL" class="tool-icon" />
              <h3>GraphQL</h3>
              <p>GraphQL is a query language for APIs, allowing us to fetch exactly the data we need in a single request.</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="tech-stack">
        <h2 className="tech-title">Our Technology Stack</h2>
        <p className="tech-description">
          We utilize the latest and most reliable technologies to provide exceptional services.
        </p>
        <div className="container_tech">
          <div className="card-left">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 1" />
            </div>
            <div className="card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Image 2" />
            </div>
            <div className="card-text">
              <p>Quisque cursus, metus vitae pharetra auctor.</p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/35828/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 3" />
            </div>
            <div className="card-text">
              <p>Ut eu diam at pede suscipit sodales.</p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/701855/pexels-photo-701855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 4" />
            </div>
            <div className="card-text">
              <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 5" />
            </div>
            <div className="card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 6" />
            </div>
            <div className="card-text">
              <p>Ut eu diam at pede suscipit sodales.</p>
            </div>
          </div>

          <div className="card-left">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/1603891/pexels-photo-1603891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Image 7" />
            </div>
            <div className="card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/585581/pexels-photo-585581.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 8" />
            </div>
            <div className="card-text">
              <p>Quisque cursus, metus vitae pharetra auctor.</p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/532561/pexels-photo-532561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 9" />
            </div>
            <div className="card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/279376/pexels-photo-279376.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 10" />
            </div>
            <div className="card-text">
              <p>Integer lacinia sollicitudin massa. Cras metus.</p>
            </div>
          </div>

          <div className="card-left">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/701855/pexels-photo-701855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Image 11" />
            </div>
            <div className="card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="card-left">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/262577/pexels-photo-262577.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 12" />
            </div>
            <div className="card-text">
              <p>Ut eu diam at pede suscipit sodales.</p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/978342/pexels-photo-978342.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 13" />
            </div>
            <div className="card-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/305831/pexels-photo-305831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 14" />
            </div>
            <div className="card-text">
              <p>Quisque cursus, metus vitae pharetra auctor.</p>
            </div>
          </div>

          <div className="card-top">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/355728/pexels-photo-355728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 15" />
            </div>
            <div className="card-text">
              <p>Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.</p>
            </div>
          </div>

          <div className="card-right">
            <div className="card-image">
              <img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image 16" />
            </div>
            <div className="card-text">
              <p>Ut eu diam at pede suscipit sodales.</p>
            </div>
          </div>
        </div>
      </section>






    </>
  );
}
