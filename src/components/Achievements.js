import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Achievements = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2024",
      description: "Comprehensive certification covering React fundamentals, hooks, and advanced patterns.",
      icon: "⚛️",
      color: "#61dafb"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Certification in JavaScript programming, algorithms, and data structures.",
      icon: "🏆",
      color: "#f7df1e"
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Mastery of HTML, CSS, and responsive design principles.",
      icon: "🎨",
      color: "#1572b6"
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Understanding of AWS cloud concepts, services, and best practices.",
      icon: "☁️",
      color: "#ff9900"
    },
    {
      id: 5,
      title: "Git and GitHub Certification",
      issuer: "GitHub",
      date: "2023",
      description: "Version control mastery and collaborative development practices.",
      icon: "📝",
      color: "#181717"
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      issuer: "The App Brewery",
      date: "2023",
      description: "Intensive full-stack web development program covering modern technologies.",
      icon: "🚀",
      color: "#00f6ff"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best UI/UX Design",
      event: "Hackathon 2024",
      date: "March 2024",
      description: "Awarded for innovative futuristic dashboard design",
      icon: "🥇"
    },
    {
      id: 2,
      title: "Innovation Award",
      event: "Tech Conference 2023",
      date: "November 2023",
      description: "Recognition for creative use of glassmorphism in web design",
      icon: "💡"
    },
    {
      id: 3,
      title: "Rising Developer",
      event: "Developer Community",
      date: "September 2023",
      description: "Acknowledgment for rapid skill development and community contribution",
      icon: "⭐"
    }
  ];

  const AchievementCard = ({ achievement, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 10px 30px ${achievement.color}30`
      }}
      className="glass rounded-xl p-6 h-full transition-all duration-500 hover:border-opacity-50"
      style={{ borderColor: achievement.color + '30' }}
    >
      <div className="flex items-start space-x-4">
        <div 
          className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl"
          style={{ backgroundColor: achievement.color + '20' }}
        >
          {achievement.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-poppins font-semibold text-white mb-2">
            {achievement.title}
          </h3>
          <div className="text-primary-blue font-medium mb-2">
            {achievement.issuer}
          </div>
          <div className="text-sm text-gray-400 mb-3">
            {achievement.date}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const AwardCard = ({ award, index }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="glass rounded-xl p-6 transition-all duration-500 hover:border-primary-purple hover:border-opacity-50"
    >
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{award.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-poppins font-semibold text-white mb-1">
            {award.title}
          </h3>
          <div className="text-primary-purple font-medium mb-1">
            {award.event}
          </div>
          <div className="text-sm text-gray-400 mb-2">
            {award.date}
          </div>
          <p className="text-gray-300 text-sm">
            {award.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-purple rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-4"
          >
            Achievements & Certifications
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional certifications and recognition for excellence in web development and design.
          </motion.p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <AwardCard key={award.id} award={award} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-8">
            Achievement Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">6</div>
              <div className="text-gray-300">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-300">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-300">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-gray-300">Years Active</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
