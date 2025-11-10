import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="page">
      <section className="center-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>We offer a comprehensive range of web development and digital services to help your business succeed online.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Custom websites built with modern technologies like React, 
                TypeScript, and Node.js for optimal performance and scalability.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Responsive Design</h3>
              <p>
                Mobile-first designs that look great and work perfectly on all 
                devices, from smartphones to desktop computers.
              </p>
            </div>
            
            <div className="service-card">
              <h3>E-commerce Solutions</h3>
              <p>
                Complete online store solutions with secure payment processing, 
                inventory management, and user-friendly shopping experiences.
              </p>
            </div>
            
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                Beautiful and intuitive user interfaces designed to provide 
                exceptional user experiences and drive conversions.
              </p>
            </div>
            
            <div className="service-card">
              <h3>SEO Optimization</h3>
              <p>
                Search engine optimization to improve your website's visibility 
                and ranking in search results.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Maintenance & Support</h3>
              <p>
                Ongoing maintenance, updates, and technical support to keep 
                your website running smoothly and securely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;