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
              Full Stack Developer with 2.5+ years of expertise in building scalable web applications using Node.js, Express.js, Angular and PostgreSQL. Skilled in RESTful API development, database optimization, authentication systems, and responsive UI development. Experienced in Agile Scrum environments, production support, debugging and performance optimization.
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
