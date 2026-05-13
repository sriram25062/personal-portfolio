import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Container, Badge } from '../common';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
      />

      <Container className="relative z-10">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I specialize in to create amazing digital experiences"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioData.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Gradient Background on Hover */}
              {hoveredCategory === index && (
                <motion.div
                  layoutId={`skill-glow-${index}`}
                  className={`absolute inset-0 rounded-xl blur-2xl opacity-30 bg-gradient-to-br ${category.color}`}
                />
              )}

              {/* Card */}
              <motion.div className="relative bg-dark-800 border border-dark-700 group-hover:border-cyan-500 rounded-xl p-8 transition-all duration-300 backdrop-blur-xl h-full">
                {/* Header */}
                <div className="mb-6 pb-4 border-b border-dark-700 group-hover:border-cyan-500 transition-colors duration-300">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group/skill"
                    >
                      <motion.div
                        animate={hoveredCategory === index ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.6 }}
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 transition-transform`}
                      />
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl origin-left bg-gradient-to-r ${category.color}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-12 border-t border-dark-700"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Full Stack Development',
              'REST APIs',
              'Database Design',
              'Performance Optimization',
              'Responsive Design',
              'Testing & Debugging',
              'Agile/Scrum',
              'Clean Code',
              'System Design',
              'Authentication & Security',
              'Version Control',
              'DevOps Basics',
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="primary">
                  {competency}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
