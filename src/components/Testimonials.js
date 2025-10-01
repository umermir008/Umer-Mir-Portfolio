import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://drive.google.com/uc?export=view&id=193oIqhOLHxwmvfQ_kGPPEGaV0Rz7mbxT",
      content: "Umer's work on our dashboard project was exceptional. His attention to detail and innovative approach to UI/UX design exceeded our expectations. The futuristic design elements he implemented made our product stand out in the market.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      image: "https://drive.google.com/uc?export=view&id=193oIqhOLHxwmvfQ_kGPPEGaV0Rz7mbxT",
      content: "Working with Umer was a game-changer for our development team. His expertise in React and modern web technologies helped us build a scalable and performant application. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      image: "https://drive.google.com/uc?export=view&id=193oIqhOLHxwmvfQ_kGPPEGaV0Rz7mbxT",
      content: "Umer's ability to translate complex design concepts into beautiful, functional code is remarkable. His glassmorphism implementations and smooth animations brought our vision to life perfectly.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Freelance Client",
      company: "Independent",
      image: "https://drive.google.com/uc?export=view&id=193oIqhOLHxwmvfQ_kGPPEGaV0Rz7mbxT",
      content: "Professional, reliable, and incredibly talented. Umer delivered my portfolio website ahead of schedule with features I didn't even know were possible. The attention to detail is outstanding.",
      rating: 5
    }
  ];

  const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 246, 255, 0.1)"
      }}
      className="glass rounded-xl p-6 h-full transition-all duration-500 hover:border-primary-blue hover:border-opacity-50"
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-gray-300 mb-6 leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={`${testimonial.name}`}
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
          decoding="async"
          width="150"
          height="150"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://drive.google.com/uc?export=view&id=193oIqhOLHxwmvfQ_kGPPEGaV0Rz7mbxT';
          }}
        />
        <div>
          <div className="text-white font-semibold">{testimonial.name}</div>
          <div className="text-sm text-gray-400">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Don't just take my word for it. Here's what clients and colleagues say about working with me.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-poppins font-semibold text-white mb-8">
            Client Satisfaction Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5.0</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
