import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Container, Button } from '../common';
import { portfolioData } from '../data/portfolio';
import { HiArrowRight } from 'react-icons/hi';

const About = () => {
  const stats = portfolioData.about.stats;

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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />

      <Container className="relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my journey, skills, and passion for building great products"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {portfolioData.about.heading}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              {portfolioData.about.description}
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in building scalable applications with a focus on clean code, performance optimization, and exceptional user experience. With over 2.5 years of professional experience, I've worked on diverse projects spanning shipment management and healthcare claims processing systems.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Button variant="primary" size="lg" className="gap-2">
                View My Work <HiArrowRight className="w-5 h-5" />
              </Button>
            </motion.a>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-dark-800 border border-dark-700 group-hover:border-cyan-500 rounded-xl p-6 text-center transition-all duration-500 backdrop-blur-xl">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
                  >
                    <CounterAnimation target={parseInt(stat.number)} suffix={stat.suffix} />
                  </motion.div>
                  <p className="text-gray-400 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-12 border-t border-dark-700"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Professional Journey</h3>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                <div className="absolute left-1.5 top-8 w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent" />

                <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-cyan-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </Container>
    </section>
  );
};

// Counter Animation Component
const CounterAnimation = ({ target, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const countRef = React.useRef(0);
  const elementRef = React.useRef(null);

  // Intersection Observer to detect when element is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Start counter animation only when visible
  React.useEffect(() => {
    if (!isVisible) return;

    countRef.current = 0;
    setCount(0);
    
    // Much slower for smaller numbers, much faster for larger ones
    const interval = target < 10 ? 300 : 50;
    
    let intervalId = setInterval(() => {
      countRef.current += 1;
      if (countRef.current >= target) {
        setCount(target);
        clearInterval(intervalId);
      } else {
        setCount(countRef.current);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, [isVisible, target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

export default About;
