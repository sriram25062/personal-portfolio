import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API Development', 'JWT Authentication', 'Middleware Integration'],
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive Web Design'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL(SQL Queries, Database Optimization, Joins & Indexing)', 'MongoDB'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Vercel', 'Visual Studio Code', 'Webpack', 'Postman', 'Node Cron'],
    },
    {
      title: 'Core Competencies',
      skills: ['API integration', 'Full Stack Web Development', 'CRUD Operations', 'Authentication & Authorization', 'Debugging & Production Support', 'Performance Optimization', 'Agile Scrum Methodology', 'Unit Testing'],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skills__badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
