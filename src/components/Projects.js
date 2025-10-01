import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Static projects data (fallback)
  const staticProjects = [
    {
      id: 1,
      name: "3D Futuristic Gaming Dashboard",
      description: "An immersive 3D gaming dashboard built with Three.js and GSAP, featuring interactive animations and a futuristic interface.",
      liveUrl: "https://3-d-futuristic-gaming-dashboard.vercel.app/",
      image: "/thumbnails/futuristic-gaming-dashboard-thumbnail.png",
      topics: ["React", "Three.js", "GSAP"],
      category: "frontend",
      featured: true
    },
    {
      id: 2,
      name: "3D Luxury Car Showroom",
      description: "A luxury car showroom website with realistic 3D car models, lighting effects, and interactive navigation for premium automotive experiences.",
      liveUrl: "https://3-d-luxury-car-showroom.vercel.app/",
      image: "/thumbnails/luxury-car-showroom-thumbnail.png",
      topics: ["Three.js", "Lighting", "React"],
      category: "frontend",
      featured: true
    },
    {
      id: 3,
      name: "3D Luxury Furniture Showcase",
      description: "A modern furniture showcase with interactive 3D visualization, allowing users to explore products in detail.",
      liveUrl: "https://3-d-luxury-furniture-showcase.vercel.app/",
      image: "/thumbnails/luxury-furniture-showcase-thumbnail.png",
      topics: ["Three.js", "React", "UX"],
      category: "frontend",
      featured: true
    },
    {
      id: 4,
      name: "3D RGB Keyboard",
      description: "An interactive 3D RGB keyboard with customizable lighting effects and smooth animations for tech enthusiasts.",
      liveUrl: "https://3-d-rgb-keyboard.vercel.app/",
      image: "/thumbnails/rgb-keyboard-thumbnail.png",
      topics: ["Three.js", "GSAP", "React"],
      category: "frontend",
      featured: true
    },
    {
      id: 5,
      name: "NeuroAI",
      description: "A SaaS AI automation landing page designed with GSAP animations and responsive layouts to showcase product features.",
      liveUrl: "https://neuro-ai-seven.vercel.app/",
      image: "/thumbnails/neuroai-thumbnail.png",
      topics: ["GSAP", "UI", "React"],
      category: "frontend",
      featured: true
    },
    {
      id: 6,
      name: "TASKFLOW",
      description: "A task management web app with a clean UI for tracking, organizing, and boosting productivity.",
      liveUrl: "https://taskflow-seven-cyan.vercel.app/",
      image: "/thumbnails/taskflow-thumbnail.png",
      topics: ["React", "Productivity", "UI"],
      category: "frontend",
      featured: true
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? staticProjects 
    : staticProjects.filter(project => project.category === selectedFilter);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/umermir008/repos?sort=updated&per_page=6');
        if (response.ok) {
          const repos = await response.json();
          setGithubRepos(repos);
        }
      } catch (error) {
        // GitHub API not available; falling back to static data
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const ProjectCard = ({ project, index }) => {
    const handleCardClick = () => {
      // Open Live Demo in new tab
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ 
          scale: 1.03,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        onClick={handleCardClick}
        className="group relative glass rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-blue hover:border-opacity-70 cursor-pointer transform-gpu"
        style={{ 
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          willChange: "transform"
        }}
      >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1600&h=900&fit=crop&auto=format&q=80&crop=entropy';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        
        {/* Enhanced Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex space-x-4"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gradient-to-r from-primary-blue to-primary-purple backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              title="Live Demo"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Click Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-white mb-2 group-hover:text-primary-blue transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics?.map((topic, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary-blue bg-opacity-20 text-primary-blue text-xs rounded-full border border-primary-blue border-opacity-30"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-purple text-white text-sm font-medium rounded-lg text-center transition-all duration-300 hover:shadow-lg"
          >
            Live Demo
          </motion.a>
        </div>
      </div>

      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-xl pointer-events-none"></div>
      
      {/* Subtle Border Glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "0 0 20px rgba(0, 246, 255, 0.3), 0 0 40px rgba(179, 102, 255, 0.2)"
        }}
      ></div>
    </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-6"
          >
            Explore my collection of innovative projects that showcase the perfect blend of creativity and technical expertise.
          </motion.p>
          
          {/* GitHub Profile Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="https://github.com/umermir008"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View All Projects on GitHub</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-white'
                  : 'glass text-gray-300 hover:text-white hover:border-primary-blue hover:border-opacity-50'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="loading"></div>
            <span className="ml-3 text-gray-300">Loading projects...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}

        {/* GitHub Stats */}
        {githubRepos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-poppins font-semibold text-white mb-6">
                GitHub Activity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {githubRepos.length}
                  </div>
                  <div className="text-gray-300">Public Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {githubRepos.reduce((total, repo) => total + repo.stargazers_count, 0)}
                  </div>
                  <div className="text-gray-300">Total Stars</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {githubRepos.reduce((total, repo) => total + repo.forks_count, 0)}
                  </div>
                  <div className="text-gray-300">Total Forks</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
