import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Blog = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: "Why Futuristic UI Matters in Modern Web Design",
      excerpt: "Exploring the impact of futuristic design elements on user engagement and how they shape the future of web interfaces.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&h=600&fit=crop&auto=format&q=80&crop=entropy",
      category: "Design",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      tags: ["UI/UX", "Design", "Future Tech"]
    },
    {
      id: 2,
      title: "AI + Code: Building the Future of Development",
      excerpt: "How artificial intelligence is revolutionizing the way we write code and the tools that are changing the development landscape.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&h=600&fit=crop&auto=format&q=80&crop=entropy",
      category: "Technology",
      readTime: "7 min read",
      date: "Dec 10, 2024",
      tags: ["AI", "Development", "Innovation"]
    },
    {
      id: 3,
      title: "My Journey in Creating Immersive Dashboards",
      excerpt: "A deep dive into the process of building interactive dashboards that provide meaningful insights and exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format&q=80&crop=entropy",
      category: "Development",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      tags: ["Dashboard", "Data Visualization", "React"]
    }
  ];

  const BlogCard = ({ post, index }) => (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 246, 255, 0.1)"
      }}
      className="group glass rounded-xl overflow-hidden transition-all duration-500 hover:border-primary-blue hover:border-opacity-50"
    >
      {/* Blog Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          width="800"
          height="400"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=600&fit=crop&auto=format&q=80&crop=entropy';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-blue bg-opacity-90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black bg-opacity-50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-primary-blue font-medium">{post.date}</span>
        </div>

        <h3 className="text-xl font-poppins font-semibold text-white mb-3 group-hover:text-primary-blue transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-primary-purple bg-opacity-20 text-primary-purple text-xs rounded-full border border-primary-purple border-opacity-30"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 border border-primary-blue text-primary-blue text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary-blue hover:text-white group-hover:border-primary-purple group-hover:text-primary-purple group-hover:hover:bg-primary-purple"
        >
          Read More
        </motion.button>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-purple opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
    </motion.article>
  );

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
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
            Thoughts & Insights
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Sharing my thoughts on technology, design, and the ever-evolving world of web development.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-xl p-8 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6">
            Get notified when I publish new articles about web development, design trends, and technology insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue focus:bg-opacity-20 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Coming Soon Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-6">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Building Scalable React Applications",
              "The Art of Micro-interactions in Web Design",
              "Web Performance Optimization Techniques",
              "Creating Accessible Web Interfaces"
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="p-4 glass rounded-lg border border-white border-opacity-10 hover:border-primary-blue hover:border-opacity-30 transition-all duration-300"
              >
                <h4 className="text-white font-medium mb-2">{title}</h4>
                <p className="text-gray-400 text-sm">Coming soon...</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
