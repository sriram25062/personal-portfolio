import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Container } from '../common';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="relative overflow-hidden bg-dark-900 border-t border-dark-700">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 border-b border-dark-700"
      >
        <Container className="py-16 md:py-20">
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-opacity-10 border border-cyan-500 border-opacity-30 rounded-2xl p-8 md:p-12 backdrop-blur-xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Let's Build Something Amazing Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </motion.p>
            <motion.a
              href="mailto:r.sriramrajendran@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-glow-lg transition-all duration-300"
            >
              Get In Touch <HiArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </Container>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10"
      >
        <Container className="py-16 md:py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants} className="space-y-4 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Full Stack Developer passionate about creating beautiful, performant web applications and solving complex problems.
              </p>
              <p className="text-sm text-gray-500">
                📍 {portfolioData.personal.location}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/sriram25062' },
                  { icon: FaLinkedinIn, label: 'LinkedIn', url: 'https://www.linkedin.com/in/rsriram25062' },
                  { icon: MdOutlineEmail, label: 'Email', url: 'mailto:r.sriramrajendran@gmail.com' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 hover:border-cyan-500 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-8"
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-400"
          >
            <p>
              © {currentYear} Sriram R. All rights reserved. Built with ❤️.
            </p>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-glow-lg z-50 hover:shadow-glow-lg transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Footer;
