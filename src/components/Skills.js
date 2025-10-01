import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const skills = [
    {
      name: 'HTML',
      level: 95,
      icon: '🌐',
      description: 'Semantic HTML5, accessibility standards, and modern markup practices.',
      color: '#e34f26'
    },
    {
      name: 'CSS',
      level: 90,
      icon: '🎨',
      description: 'Advanced CSS3, Flexbox, Grid, animations, and responsive design.',
      color: '#1572b6'
    },
    {
      name: 'JavaScript',
      level: 88,
      icon: '⚡',
      description: 'ES6+, async programming, DOM manipulation, and modern JS features.',
      color: '#f7df1e'
    },
    {
      name: 'React.js',
      level: 85,
      icon: '⚛️',
      description: 'Hooks, Context API, state management, and component architecture.',
      color: '#61dafb'
    },
    {
      name: 'Node.js',
      level: 80,
      icon: '🟢',
      description: 'Server-side development, APIs, Express.js, and backend architecture.',
      color: '#339933'
    },
    {
      name: 'Tailwind CSS',
      level: 92,
      icon: '💨',
      description: 'Utility-first CSS framework, responsive design, and component styling.',
      color: '#06b6d4'
    },
    {
      name: 'Git',
      level: 85,
      icon: '📝',
      description: 'Version control, branching strategies, and collaborative development.',
      color: '#f05032'
    },
    {
      name: 'GitHub',
      level: 90,
      icon: '🐙',
      description: 'Repository management, CI/CD, and open-source collaboration.',
      color: '#181717'
    }
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative group cursor-pointer"
    >
      <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-opacity-70 group-hover:shadow-xl"
           style={{ 
             borderColor: `${skill.color}40`,
             background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`,
             boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1)`
           }}>
        
        {/* Skill Icon and Name */}
        <div className="flex items-center space-x-3 mb-4">
          <motion.div 
            className="text-3xl transition-all duration-300"
            style={{ 
              filter: `drop-shadow(0 0 8px ${skill.color}50)`,
              transform: 'translateZ(0)' // Prevent flickering
            }}
            whileHover={{ 
              scale: 1.1,
              filter: `drop-shadow(0 0 12px ${skill.color}80)`
            }}
          >
            {skill.icon}
          </motion.div>
          <h3 className="text-xl font-poppins font-semibold text-white transition-all duration-300 group-hover:text-opacity-100"
              style={{ color: `${skill.color}` }}>
            {skill.name}
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white font-medium">
              Proficiency
            </span>
            <motion.span 
              className="text-sm font-bold transition-all duration-300"
              style={{ color: skill.color }}
              whileHover={{ scale: 1.05 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden transition-all duration-300 group-hover:h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
              className="h-full rounded-full relative transition-all duration-300"
              style={{ 
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                boxShadow: `0 0 10px ${skill.color}50`
              }}
              whileHover={{
                boxShadow: `0 0 15px ${skill.color}70`
              }}
            >
              <motion.div
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.1 + 1 
                }}
                className="absolute inset-0 bg-white opacity-30 rounded-full"
                style={{ width: '30%' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Description - Always Visible with Smooth Hover Enhancement */}
        <div className="text-sm text-gray-300 transition-all duration-300 group-hover:text-white leading-relaxed">
          <p className="opacity-100 transition-opacity duration-300 group-hover:opacity-100">
            {skill.description}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, transparent)`
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-purple rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-blue rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Webpack', 'Babel', 'ESLint', 'Prettier',
              'Figma', 'Adobe XD', 'Photoshop', 'Illustrator',
              'MongoDB', 'Firebase', 'AWS', 'Vercel',
              'Jest', 'Cypress', 'Docker', 'Linux'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-semibold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 mb-6">
              I believe in staying updated with the latest technologies and continuously improving my skills. 
              Currently exploring advanced React patterns, WebAssembly, and AI integration in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'TypeScript', 'GraphQL', 'WebAssembly', 'AI/ML', 'Blockchain'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-purple bg-opacity-20 text-primary-blue border border-primary-blue border-opacity-30 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
