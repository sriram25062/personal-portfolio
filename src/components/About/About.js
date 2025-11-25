import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about me and my journey in tech
        </p>

        <div className="about__content">
          <div className="about__text">
            <h3 className="about__heading">
              A passionate developer dedicated to building impactful solutions
            </h3>
            <p className="about__description">
              Entry-level Software Engineer with hands-on experience in designing and developing full-stack web applications using React, Angular, Node.js, PostgreSQL, and MongoDB. Skilled in building frontend and backend components, API integration, code debugging, and modeling relational and non-relational databases. Completed a 3-month MERN Stack certification from FITA Academy. Actively expanding knowledge through real-world projects and formal certifications in web technologies.
            </p>

            <div className="about__stats" style={{ display: 'none' }}>
              <div className="about__stat">
                <span className="about__stat-number">5+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">50+</span>
                <span className="about__stat-label">Projects Completed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">30+</span>
                <span className="about__stat-label">Happy Clients</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
