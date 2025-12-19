import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VOX – Micro Blogging Platform',
      description:
        'A full-stack micro blogging platform built with the MERN stack. Features include RESTful APIs for blog CRUD operations, JWT-based authentication, rich-text blog editor, and MongoDB database modeling for users, blogs, and comments. Configured CORS middleware for secure cross-origin communication.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      liveUrl: 'https://vox-client-steel.vercel.app/',
      githubUrl: 'https://github.com/sriram25062/vox-client',
      githubUrl2: 'https://github.com/sriram25062/vox-server',
    },
    {
      id: 2,
      title: 'NETFLIX Clone – Movie Streaming Platform',
      description:
        'A frontend-only movie streaming platform replicating Netflix\'s UI/UX. Features interactive and responsive design with Angular, TMDB API integration for trending movies, modular component-based architecture, Angular routing for seamless navigation, and continuous deployment on Vercel from GitHub.',
      tags: ['Angular', 'TMDB API', 'TypeScript', 'Vercel', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      liveUrl: 'https://netflix-clone-app-lac-ten.vercel.app/',
      githubUrl: 'https://github.com/sriram25062/netflix-clone-app',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of my recent work showcasing my skills and experience
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="projects__card">
              <div className="projects__card-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="projects__card-placeholder">
                    <span>Project Image</span>
                  </div>
                )}
                <div className="projects__card-overlay">
                  <a
                    href={project.liveUrl}
                    className="projects__card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live project"
                    title="View Live Demo"
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="projects__card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                    title="View Source Code"
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
                  {project.githubUrl2 && (
                    <a
                      href={project.githubUrl2}
                      className="projects__card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub server repository"
                      title="View Server Code"
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
                  )}
                </div>
              </div>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="projects__card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
