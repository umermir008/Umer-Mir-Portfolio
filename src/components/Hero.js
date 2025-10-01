import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import ProfileCard from './ProfileCard';

const Hero = ({ isDarkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "I'm Umer Mir — Crafting Digital Experiences with Code & Creativity.";
  const subText = "Web Developer | Creative Technologist | Builder of immersive and smooth web solutions.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGitHub = () => {
    window.open('https://github.com/umermir008', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <Particles />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-purple-900 opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Card */}
          <ProfileCard size="lg" className="mx-auto mb-10" />

          {/* Main Heading with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight"
          >
            <span className="gradient-text">
              {currentText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed"
          >
            {subText}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 246, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-lg overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(179, 102, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openGitHub}
              className="group relative px-8 py-4 border-2 border-primary-purple text-primary-purple font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">GitHub Profile</span>
              <div className="absolute inset-0 bg-primary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary-blue rounded-full mt-2"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-blue opacity-20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary-purple opacity-20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-blue opacity-30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
