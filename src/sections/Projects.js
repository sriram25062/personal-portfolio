import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { SectionTitle, Container, Badge } from '../components/common';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my recent work and technical achievements"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              {hoveredId === project.id && (
                <motion.div
                  layoutId="project-glow"
                  className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"
                />
              )}

              {/* Main Card */}
              <motion.div
                className="relative bg-dark-800 border border-dark-700 group-hover:border-cyan-500 rounded-xl overflow-hidden transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <motion.div
                    className="relative h-64 md:h-80 overflow-hidden bg-dark-900"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white hover:bg-cyan-600 transition-colors"
                      >
                        <HiExternalLink className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                      {project.githubUrl2 && (
                        <motion.a
                          href={project.githubUrl2}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                          title="Server Code"
                        >
                          <FaGithub className="w-6 h-6" />
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between">
                    {/* Header */}
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      {/* Features */}
                      {project.features && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-2 py-4"
                        >
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                              <span className="text-cyan-400">✓</span>
                              {feature}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2 pt-4 border-t border-dark-700"
                    >
                      {project.tags.map((tag, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        >
                          <Badge variant="secondary">{tag}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-12 border-t border-dark-700 text-center"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/sriram25062"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-300"
          >
            Visit My GitHub <HiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
