import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Button, Container } from '../common';
import { portfolioData } from '../data/portfolio';
import profileImage from '../assets/profile.jpg'; 

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  // Typing Effect
  useEffect(() => {
    const roles = ['Full Stack Developer', 'Node.js Engineer', 'Angular Specialist', 'PostgreSQL Expert'];
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const role = roles[currentRole];
      
      if (!isDeleting && currentIndex < role.length) {
        setDisplayedText(role.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(type, 50);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText(role.slice(0, currentIndex - 1));
        currentIndex--;
        timeout = setTimeout(type, 30);
      } else if (currentIndex === role.length) {
        isDeleting = true;
        timeout = setTimeout(type, 2000);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(type, 500);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [currentRole]);

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <div className="bg-cyan-500 bg-opacity-10 border border-cyan-500 border-opacity-50 rounded-full px-6 py-2 backdrop-blur-xl inline-flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-sm font-medium">Welcome to my portfolio</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">Greetings✨, I'm </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
            </motion.div>

            {/* Typing Role */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-xl md:text-2xl text-gray-300">
                I am a{' '}
                <span className="font-semibold text-cyan-400 min-w-max inline-block">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    |
                  </motion.span>
                </span>
              </p>
              <p className="text-lg text-gray-400 max-w-md">
                  Crafting scalable web applications with modern architectures, secure APIs, and seamless digital experiences.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a href="#projects" whileHover={{ scale: 1.05 }}>
                <Button variant="primary" size="lg" className="gap-2">
                  Explore My Work <HiArrowRight className="w-5 h-5" />
                </Button>
              </motion.a>
              <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }}>
                <Button variant="secondary" size="lg" className="gap-2">
                  <HiDownload className="w-5 h-5" /> Resume
                </Button>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <span className="text-gray-500 text-sm">Follow me:</span>
              <div className="flex gap-4">
                {portfolioData.socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:bg-opacity-20 hover:text-cyan-300 transition-all duration-300 border border-dark-600 hover:border-cyan-500"
                  >
                    {social.name === 'Email' && <MdOutlineEmail className="w-5 h-5" />}
                    {social.name === 'GitHub' && <FaGithub className="w-5 h-5" />}
                    {social.name === 'LinkedIn' && <FaLinkedinIn className="w-5 h-5" />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Avatar/Image */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:flex items-center justify-center"
          >
            {/* Glowing Circle Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 rounded-full border-2 border-cyan-500 border-opacity-30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-96 h-96 rounded-full border-2 border-purple-500 border-opacity-20"
            />

            {/* Profile Image Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-64 h-64 rounded-2xl overflow-hidden border-2 border-cyan-500 border-opacity-50 bg-gradient-to-br from-cyan-500 to-blue-500 p-1"
            > 
              <img
                src={profileImage}
                alt="Sriram"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                SR
              </div> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [2, 8, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
