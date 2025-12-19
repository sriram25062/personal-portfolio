import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content animate-fadeInUp">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Sriram R</h1>
          <h2 className="hero__title">Full Stack Web Developer</h2>
          <p className="hero__description">
            Entry-Level Software Engineer | Full Stack Web Developer | React/Angular, Node.js, PostgreSQL & MongoDB
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#about" className="btn btn-secondary">
              About Me
            </a>
            <a href="/resume.pdf" className="btn btn-accent" download>
              Download Resume
            </a>
          </div>
          <div className="hero__social">
            <a href="mailto:srirampvrs@gmail.com" className="hero__social-link" aria-label="Email" title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="https://github.com/sriram25062" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/rsriram25062" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero__visual animate-fadeIn">
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <span className="hero__scroll-text">Scroll Down</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
