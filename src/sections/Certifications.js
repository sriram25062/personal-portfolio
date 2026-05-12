import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { MdSchool } from 'react-icons/md';
import { SectionTitle, Container, Badge } from '../components/common';
import { portfolioData } from '../data/portfolio';

const Certifications = () => {
  const certifications = portfolioData.certifications;
  const [expandedId, setExpandedId] = React.useState(null);

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

  const certVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const groupedByProvider = certifications.reduce((acc, cert) => {
    if (!acc[cert.provider]) {
      acc[cert.provider] = [];
    }
    acc[cert.provider].push(cert);
    return acc;
  }, {});

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"
      />

      <Container className="relative z-10">
        <SectionTitle
          title="Certifications & Learning"
          subtitle="Continuous professional development and skill enhancement"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {Object.entries(groupedByProvider).map(([provider, certs], providerIndex) => (
            <motion.div key={provider} className="space-y-4">
              {/* Provider Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: providerIndex * 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <MdSchool className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{provider}</h3>
                <Badge variant="secondary">{certs.length} Certification{certs.length > 1 ? 's' : ''}</Badge>
              </motion.div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert, certIndex) => (
                  <motion.div
                    key={cert.id}
                    variants={certVariants}
                    custom={certIndex}
                    whileHover={{ y: -4 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity"
                    />

                    {/* Card */}
                    <motion.div
                      onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                      className="relative bg-dark-800 border border-dark-700 group-hover:border-cyan-500 rounded-lg p-6 transition-all duration-300 cursor-pointer h-full backdrop-blur-xl"
                    >
                      <div className="space-y-4">
                        {/* Icon */}
                        <motion.div
                          animate={expandedId === cert.id ? { rotate: 360 } : {}}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white"
                        >
                          <MdSchool className="w-6 h-6" />
                        </motion.div>

                        {/* Title */}
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                            {cert.title}
                          </h4>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">{cert.date}</span>
                          {cert.link && (
                            <motion.a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <HiExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Expand Indicator */}
                      <motion.div
                        className="absolute top-2 right-2 w-1 h-1 rounded-full bg-cyan-400"
                        animate={expandedId === cert.id ? { scale: 2, opacity: 0 } : { scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-12 border-t border-dark-700"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-10 border border-cyan-500 border-opacity-30 rounded-lg p-8 backdrop-blur-xl">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Committed to Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in staying updated with the latest technologies and industry best practices. I regularly pursue certifications and take courses to enhance my skills and stay ahead of the curve in web development.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certifications;
