import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Sriram R
            </a>
            <p className="footer__description">
              Full Stack Web Developer | Chennai, India
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <nav className="footer__nav">
              <a href="#home" className="footer__link">Home</a>
              <a href="#about" className="footer__link">About</a>
              <a href="#skills" className="footer__link">Skills</a>
              <a href="#projects" className="footer__link">Projects</a>
              <a href="#certifications" className="footer__link">Certifications</a>
            </nav>
          </div>

          <div className="footer__social-section">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__social">
              <a
                href="mailto:srirampvrs@gmail.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href="https://github.com/sriram25062"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rsriram25062"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Sriram R. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed & Built with <span className="footer__heart">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
