import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary-purple rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Loader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Circular Gradient Loader */}
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-10"></div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-t-transparent"
              style={{
                borderImage: 'linear-gradient(45deg, #00f6ff, #b366ff) 1'
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 1.2 }}
            />
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary-blue to-primary-purple opacity-10 blur-sm"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-3"
          >
            Loading delightful experience...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-300 mb-8"
          >
            The page you are looking for isn't available. Let's take you back home.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoHome}
            className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
