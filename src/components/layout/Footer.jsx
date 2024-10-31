const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Blog', href: 'https://blog.example.com' },
    { name: 'Documentation', href: 'https://docs.example.com' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/username',
      icon: 'linkedin',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/username',
      icon: 'github',
      color: 'hover:text-gray-100'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/username',
      icon: 'twitter',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="relative bg-gray-900 pt-16 pb-6">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg 
          className="relative w-full h-12 sm:h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-gray-800"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              CyberSec<span className="text-green-500">Pro</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Securing digital frontiers and protecting your data with advanced cybersecurity solutions.
            </p>
            {/* Social links for mobile */}
            <div className="flex space-x-4 lg:hidden mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  <i className={`fab fa-${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-green-500"></i>
                <span>contact@example.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-green-500"></i>
                <span>Ottawa, ON</span>
              </li>
            </ul>
            {/* Social links for desktop */}
            <div className="hidden lg:flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={link.name}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-all duration-300">
                    <i className={`fab fa-${link.icon} text-gray-400 group-hover:text-green-500 transition-colors duration-300`}></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} CyberSecPro. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 sm:mt-0">
              Securing digital frontiers, one step at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;