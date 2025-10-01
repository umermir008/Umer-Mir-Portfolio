import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
// Resume section removed from main flow; using a dedicated page instead
import ResumePage from './pages/ResumePage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';
import NotFound from './components/NotFound';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--bg-primary', '#0a0f1e');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-primary', '#0a0f1e');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <div className="loading mb-4"></div>
          <h2 className="text-2xl font-poppins font-semibold gradient-text">
            Loading Portfolio...
          </h2>
        </div>
      </div>
    );
  }

  const PortfolioContent = () => (
    <>
      <Navbar isDarkMode={isDarkMode} />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <WorkExperience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Achievements isDarkMode={isDarkMode} />
        <Testimonials isDarkMode={isDarkMode} />
        <Blog isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      
      <Footer isDarkMode={isDarkMode} />
      <BackToTop />
    </>
  );

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-primary-dark' : 'bg-gray-100'
      }`}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<PortfolioContent />} />
              <Route path="/resume" element={<ResumePage isDarkMode={isDarkMode} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
