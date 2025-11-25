import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks/Libraries',
      skills: ['React', 'Angular', 'Node.js', 'Express.js'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Vercel', 'Visual Studio Code', 'Webpack', 'Postman'],
    },
    {
      title: 'Core Competencies',
      skills: ['API integration', 'Debugging', 'SDLC', 'Agile collaboration'],
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
