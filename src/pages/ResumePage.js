import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ResumePage = ({ isDarkMode }) => {
  useEffect(() => {
    document.title = 'Umer Mir – Resume';
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 print:hidden">
        <div className="absolute -top-10 left-10 w-64 h-64 bg-primary-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-56 h-56 bg-primary-purple rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link to="/" className="text-gray-300 hover:text-white">← Back to Portfolio</Link>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 246, 255, 0.35)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="px-5 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-lg"
            >
              Download / Print PDF
            </motion.button>
          </div>
        </div>

        {/* Printable Resume Card */}
        <div className="glass rounded-2xl p-6 md:p-10 print:bg-white print:text-black print:shadow-none">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white print:text-black">Professional Resume</h1>
            <p className="text-lg text-gray-300 print:text-black mt-1">Umer Mir</p>
            <p className="text-gray-400 print:text-black">Web Developer | Digital Creator</p>
            <p className="text-gray-400 print:text-black mt-2">
              Remote • Portfolio • <a href="mailto:umermirsaeed41@gmail.com" className="underline">umermirsaeed41@gmail.com</a> • GitHub • LinkedIn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile */}
            <div className="rounded-xl p-5 bg-white bg-opacity-5 border border-white border-opacity-10 print:bg-transparent print:border print:border-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2 print:text-black">Profile</h3>
              <p className="text-gray-300 text-sm leading-relaxed print:text-black">
                Creative and detail-oriented Web Developer with hands-on experience building 3D websites, SaaS platforms, and interactive dashboards. Skilled in modern web technologies and passionate about delivering responsive, high-quality, and visually engaging user experiences.
              </p>
            </div>

            {/* Skills */}
            <div className="rounded-xl p-5 bg-white bg-opacity-5 border border-white border-opacity-10 print:bg-transparent print:border print:border-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2 print:text-black">Skills</h3>
              <ul className="text-gray-300 text-sm space-y-1 leading-relaxed print:text-black">
                <li><span className="font-medium text-white print:text-black">Frontend Development:</span> React.js, Next.js, Tailwind CSS, Three.js, GSAP</li>
                <li><span className="font-medium text-white print:text-black">Backend & Hosting:</span> Node.js, Firebase, Vercel</li>
                <li><span className="font-medium text-white print:text-black">Design & UI:</span> Responsive Design, Glassmorphism, Animations, UX Optimization</li>
                <li><span className="font-medium text-white print:text-black">Marketing & SEO:</span> SEO Keyword Research, Affiliate Marketing, Google Ads, Email Marketing</li>
                <li><span className="font-medium text-white print:text-black">Other Tools:</span> GitHub, Canva, AI Tools for Automation & Design</li>
              </ul>
            </div>

            {/* Experience (full width) */}
            <div className="rounded-xl p-5 bg-white bg-opacity-5 border border-white border-opacity-10 md:col-span-2 print:bg-transparent print:border print:border-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2 print:text-black">Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between">
                    <p className="font-semibold text-white print:text-black">Narrative Vibe — Web Developer</p>
                    <span className="text-gray-400 text-sm print:text-black">Sep 2025 – Present · Remote</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1 print:text-black">
                    <li>Developed and deployed 3D and SaaS-based web projects.</li>
                    <li>Designed responsive UIs with animations and immersive 3D effects.</li>
                    <li>Managed live deployments on Vercel and GitHub Pages.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-start justify-between">
                    <p className="font-semibold text-white print:text-black">Narrative Vibe — Digital Media Manager</p>
                    <span className="text-gray-400 text-sm print:text-black">Jan 2025 – Sep 2025 · Remote</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1 print:text-black">
                    <li>Created and executed social media campaigns, increasing engagement.</li>
                    <li>Handled SEO, email marketing, and affiliate promotions.</li>
                    <li>Managed content creation for digital branding.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="rounded-xl p-5 bg-white bg-opacity-5 border border-white border-opacity-10 md:col-span-2 print:bg-transparent print:border print:border-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2 print:text-black">Projects (Live)</h3>
              <div className="text-gray-300 text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 print:text-black">
                {[
                  '3D Futuristic Gaming Dashboard',
                  '3D Luxury Car Showroom',
                  '3D Luxury Furniture Showcase',
                  '3D RGB Keyboard',
                  'TASKFLOW – Task Management App',
                  'NeuroAI – SaaS AI Automation Landing Page',
                ].map((p) => (
                  <div key={p} className="px-3 py-2 rounded-lg bg-white bg-opacity-5 border border-white border-opacity-10 print:bg-transparent print:border print:border-gray-300">{p}</div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-xl p-5 bg-white bg-opacity-5 border border-white border-opacity-10 print:bg-transparent print:border print:border-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2 print:text-black">Education</h3>
              <p className="text-gray-300 text-sm print:text-black">Bachelor’s in Computer Science (In Progress)</p>
            </div>

            {/* Summary */}
            <div className="rounded-xl p-5 bg-white bg-opacity-5 border border-white border-opacity-10 print:bg-transparent print:border print:border-gray-300">
              <h3 className="text-xl font-semibold text-white mb-2 print:text-black">Summary</h3>
              <p className="text-gray-300 text-sm leading-relaxed print:text-black">
                A dedicated Web Developer & Digital Creator, delivering visually appealing, user-friendly, and high-performance websites. Actively seeking opportunities to contribute to projects that merge creativity, technology, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .glass { background: #ffffff !important; }
          .gradient-text { background: none !important; -webkit-text-fill-color: #000 !important; color: #000 !important; }
        }
      `}</style>
    </section>
  );
};

export default ResumePage;
