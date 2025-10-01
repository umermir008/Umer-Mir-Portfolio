import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkExperience = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading frontend development for enterprise applications using React, TypeScript, and modern web technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led development of 3 major dashboard applications",
        "Improved application performance by 40%",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipelines"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
      icon: "💼"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with design teams to create user-friendly interfaces. Focused on performance optimization and user experience.",
      achievements: [
        "Built 10+ responsive web applications",
        "Reduced page load time by 60%",
        "Collaborated with 3 design teams",
        "Implemented accessibility standards"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"],
      icon: "🚀"
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2021 - 2022",
      type: "Internship",
      description: "Assisted in developing client websites and learned industry best practices. Worked on various projects including e-commerce sites and corporate websites.",
      achievements: [
        "Completed 15+ client projects",
        "Learned modern development workflows",
        "Contributed to team code reviews",
        "Gained experience with version control"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      icon: "🎓"
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2020 - Present",
      type: "Freelance",
      description: "Providing web development services to small businesses and startups. Specializing in modern, responsive websites and web applications.",
      achievements: [
        "Completed 25+ freelance projects",
        "Maintained 100% client satisfaction",
        "Built diverse portfolio of projects",
        "Developed business and communication skills"
      ],
      technologies: ["React", "Vue.js", "WordPress", "PHP", "MySQL"],
      icon: "💻"
    }
  ];

  const ExperienceCard = ({ experience, index }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue to-primary-purple"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-primary-blue rounded-full border-4 border-primary-dark"></div>
      
      <div className="ml-16 glass rounded-xl p-6 transition-all duration-500 hover:border-primary-blue hover:border-opacity-50">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{experience.icon}</div>
            <div>
              <h3 className="text-xl font-poppins font-semibold text-white">
                {experience.title}
              </h3>
              <div className="text-primary-blue font-medium">
                {experience.company}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-300">{experience.period}</div>
            <div className="text-xs text-gray-400">{experience.type}</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {experience.location}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-white font-medium mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary-blue bg-opacity-20 text-primary-blue text-xs rounded-full border border-primary-blue border-opacity-30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A journey through my professional career, showcasing growth, achievements, and the technologies I've mastered.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-8">
            Career Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
