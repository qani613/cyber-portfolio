import { useState, useEffect } from 'react';
import { smoothScroll } from '../../utils/scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    ['about', 'About'],
    ['education', 'Education'],
    ['experience', 'Experience'],
    ['skills', 'Skills'],
    ['tools', 'Tools'],
    ['projects', 'Projects'],
    ['cyber-attacks', 'Cyber Attacks'],
    ['contact', 'Contact']
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a 
              href="/" 
              className="relative z-50 text-xl sm:text-2xl font-bold gradient-text"
              tabIndex={0}
              aria-label="CyberSecPro Home"
            >
              CyberSec<span className="text-green-500">Pro</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => smoothScroll(e, id)}
                  className="text-gray-300 hover:text-green-500 transition-colors text-sm"
                  tabIndex={0}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="relative z-50 md:hidden p-2 rounded-lg text-gray-300 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-gray-900/98 backdrop-blur-lg transform transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '0' }}
        >
          <div className="flex flex-col h-screen pt-24 px-6">
            {navItems.map(([id, label], index) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-2xl font-semibold text-gray-300 hover:text-green-500 py-4 transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
                onClick={(e) => {
                  smoothScroll(e, id);
                  setIsMobileMenuOpen(false);
                }}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {label}
              </a>
            ))}
            
            {/* Social Links in Mobile Menu */}
            <div className="mt-auto mb-12 flex justify-center space-x-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;