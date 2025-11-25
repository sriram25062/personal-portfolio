import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MERN Stack Development',
      provider: 'FITA Academy, Velachery',
      date: 'July - Oct 2025',
      duration: '3 Months',
      certificate: 'Certificate No: 33306',
      description: 'Received hands-on training in MongoDB, Express.js, React.js, and Node.js with real-time project development and deployment practices.',
      link: 'https://drive.google.com/file/d/1TNeHyLkLEQlQvNT3-DFKsEEcg0KOBZKn/view?usp=sharing',
      featured: true,
    },
    {
      id: 2,
      title: 'PostgreSQL: Advanced Queries',
      provider: 'LinkedIn',
      date: 'Mar 2025',
      link: 'https://www.linkedin.com/learning/certificates/3a17cb442756deedc076058af26c23022722d166289161534e99e4ea2c73966a',
    },
    {
      id: 3,
      title: 'Angular Essential Training',
      provider: 'LinkedIn',
      date: 'Mar 2025',
      link: 'https://www.linkedin.com/learning/certificates/a9ef2c71b2eeaeb15a117de1f8882f557eb6ef10ca272cfb91b1ce591d9dfd52',
    },
    {
      id: 4,
      title: 'JavaScript Essential Training',
      provider: 'LinkedIn',
      date: 'Feb 2025',
      link: 'https://www.linkedin.com/learning/certificates/bacbfd5cc0cfce4ada4393d447037b256760598a9ee8d87ad258f91c5d65066a',
    },
    {
      id: 5,
      title: 'Building RESTful APIs with Node.js and Express',
      provider: 'LinkedIn',
      date: 'Feb 2025',
      link: 'https://www.linkedin.com/learning/certificates/de3448fa3ddf301332b16fcdd4b61ca81909ce169a94a1e1d6d61e3f6f3f9260',
    },
    {
      id: 6,
      title: 'Build a Faster, More Structured Express API with Node.js and TypeScript',
      provider: 'LinkedIn',
      date: 'Feb 2025',
      link: 'https://www.linkedin.com/learning/certificates/aa7c65e2f05f5262d60c4dbddabef304583b49df28f8eaaf6544176c21b35f7a',
    },
    {
      id: 7,
      title: 'Node.js Essential Training',
      provider: 'LinkedIn',
      date: 'Jan 2025',
      link: 'https://www.linkedin.com/learning/certificates/ad421b8465415fa904002d9e7c6d31e23265ef235e261b4c0d87fdc0f82f44e7',
    },
    {
      id: 8,
      title: 'Oracle Java Certification – Pass the Associate 1Z0-808 Exam',
      provider: 'Udemy',
      date: 'Jan 2023',
      link: 'https://www.udemy.com/certificate/UC-25b4de8d-fb0d-497b-b884-92d4c9650cea/',
    },
    {
      id: 9,
      title: 'Learn Spring Boot in 100 Steps – No 1 Java Framework',
      provider: 'Udemy',
      date: 'Jun 2022',
      link: 'https://www.udemy.com/certificate/UC-1741aaa8-ad7e-43bd-8039-c5f8dbd0874c/',
    },
  ];

  const featuredCert = certifications.find(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Courses & Certifications</h2>
        <p className="section-subtitle">
          Continuous learning through professional certifications and courses
        </p>

        {featuredCert && (
          <div className="certifications__featured">
            <div className="certifications__featured-badge">Featured</div>
            <div className="certifications__featured-content">
              <div className="certifications__featured-header">
                <div>
                  <h3 className="certifications__featured-title">{featuredCert.title}</h3>
                  <div className="certifications__featured-provider">{featuredCert.provider}</div>
                </div>
                <div className="certifications__featured-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
              </div>
              <p className="certifications__featured-description">{featuredCert.description}</p>
              <div className="certifications__featured-meta">
                <span className="certifications__featured-date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {featuredCert.date}
                </span>
                <span className="certifications__featured-duration">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {featuredCert.duration}
                </span>
                <span className="certifications__featured-certificate">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  {featuredCert.certificate}
                </span>
              </div>
              {featuredCert.link && (
                <a 
                  href={featuredCert.link} 
                  className="certifications__featured-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        <div className="certifications__grid">
          {otherCerts.map((cert) => (
            <div key={cert.id} className="certifications__card">
              <div className="certifications__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="certifications__card-content">
                <h3 className="certifications__card-title">{cert.title}</h3>
                <div className="certifications__card-meta">
                  <span className="certifications__card-provider">{cert.provider}</span>
                  <span className="certifications__card-separator">•</span>
                  <span className="certifications__card-date">{cert.date}</span>
                </div>
              </div>
              {cert.link && (
                <a 
                  href={cert.link} 
                  className="certifications__card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View certificate"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
