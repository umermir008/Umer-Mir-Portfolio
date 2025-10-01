import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProfileCard from './ProfileCard';

const About = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f6ff" />
              <stop offset="100%" stopColor="#b366ff" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,200 Q250,100 500,200 T1000,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            d="M0,400 Q250,300 500,400 T1000,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            d="M0,600 Q250,500 500,600 T1000,600"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-12 items-center"
        >
          {/* Profile Card */}
          <ProfileCard size="xl" className="mx-auto" />

          {/* About Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl font-poppins font-bold gradient-text"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4 text-lg text-gray-300 font-inter leading-relaxed"
            >
              <p>
                I'm <span className="text-primary-blue font-semibold">Umer Mir</span>, a passionate Web Developer who thrives at the intersection of creativity and code.
              </p>
              
              <p>
                With hands-on experience building futuristic dashboards, AI-powered apps, and media production projects, I bring smooth designs, clean code, and next-level performance into every project.
              </p>
              
              <p>
                My work blends aesthetic finesse with powerful functionality, creating digital experiences that not only look stunning but also deliver exceptional user experiences.
              </p>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React.js', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git', 'GitHub'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-primary-blue border border-primary-blue border-opacity-30 hover:bg-primary-blue hover:bg-opacity-10 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 246, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-primary-blue opacity-20 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 right-10 w-3 h-3 bg-primary-purple opacity-20 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-blue opacity-30 rounded-full blur-sm"
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
