import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Container, SectionTitle } from '../common';
import { portfolioData } from '../data/portfolio';

const Contact = () => {

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactInfo = [
    {
      icon: MdOutlineEmail,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: MdPhone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: MdLocationOn,
      label: 'Location',
      value: portfolioData.personal.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"
      />

      <Container className="relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your project, ideas, or any collaboration opportunities"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-dark-800 border border-dark-700 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-dark-700">
              <p className="text-gray-400 mb-4">Follow my work:</p>
              <div className="flex gap-3">
                {[
                  { name: 'GitHub', url: 'https://github.com/sriram25062' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rsriram25062' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="px-6 py-2 rounded-lg bg-dark-800 border border-dark-700 hover:border-cyan-500 text-white hover:text-cyan-400 transition-all"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
