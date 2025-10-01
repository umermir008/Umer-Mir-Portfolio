# Umer Mir - Portfolio Website

A God-Tier, ultra-exclusive developer portfolio website featuring futuristic minimalism with glassmorphism and neon glow accents.

## 🚀 Features

### Design & UI
- **Futuristic Minimalism**: Clean, modern design with glassmorphism effects
- **Neon Glow Accents**: Electric blue (#00f6ff) and purple (#b366ff) color scheme
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Smooth theme transitions with preference memory
- **Glassmorphism Effects**: Translucent cards with backdrop blur
- **Micro-interactions**: Hover effects, animations, and smooth transitions

### Sections
- **Hero Section**: Full-screen with typing animation and professional photo
- **About Section**: Personal story with animated background elements
- **Projects Section**: Interactive project cards with GitHub API integration
- **Skills Section**: Animated progress bars with tooltips
- **Blog Section**: Thought leadership articles with placeholder content
- **Contact Section**: Interactive form with EmailJS integration
- **Footer**: Social links and additional information

### Technical Features
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Advanced animations and transitions
- **GitHub API**: Dynamic project fetching from GitHub repositories
- **EmailJS**: Contact form integration
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Performance Optimized**: Lazy loading, code splitting, and optimization

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/umermir008/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills section
│   ├── Blog.js         # Blog/insights section
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer component
│   ├── BackToTop.js    # Back to top button
│   ├── ThemeToggle.js  # Theme switcher
│   └── Particles.js    # Background particles
├── hooks/              # Custom React hooks
├── styles/             # CSS and styling
├── utils/              # Utility functions and constants
└── App.js              # Main application component
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    dark: '#0a0f1e',
    blue: '#00f6ff',
    purple: '#b366ff',
  }
}
```

### Content
Update personal information in `src/utils/constants.js`:
- Portfolio configuration
- Social media links
- Skills data
- Project information

### Images
Replace placeholder images in the `public/images/` directory:
- `profile/` - Professional photos
- `projects/` - Project screenshots

## 📧 Contact Form Setup

To enable the contact form, set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/Contact.js`:
   ```javascript
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams,
     'YOUR_PUBLIC_KEY'
   );
   ```

## 🚀 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://umermir008.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📱 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with React
- **Optimized Images**: WebP format with fallbacks
- **Minified Assets**: Production builds are optimized

## 🔧 Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service
- **GitHub API** - Project data
- **React Intersection Observer** - Scroll animations
- **React Router** - Navigation (if needed)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/umermir008/portfolio/issues).

## 📞 Contact

**Umer Mir**
- Email: umermirsaeed41@gmail.com
- LinkedIn: [Umer Mir](https://www.linkedin.com/in/umer-mir-9b3376241)
- GitHub: [umermir008](https://github.com/umermir008)

---

⭐ Star this repository if you found it helpful!
