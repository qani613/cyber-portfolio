import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { smoothScroll } from '../../utils/scroll';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        '{ Securing_Digital_Frontiers }',
        '{ Protecting_Your_Data }',
        '{ Defending_Networks }'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      {/* Particle effect background */}
      <div id="particles-js" className="absolute inset-0 opacity-50" />
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
      
      <div className="relative container mx-auto px-6 py-12 text-center">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text tracking-tight">
            <span ref={typedRef}></span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Cybersecurity Expert &amp; Ethical Hacker
          </p>
          
          {/* Updated button styles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="w-full sm:w-auto group relative overflow-hidden rounded-lg bg-green-500 px-8 py-4 transition-all duration-300"
              tabIndex={0}
              aria-label="Get in touch"
            >
              <span className="relative z-10 text-white font-medium">Get in Touch</span>
              <div className="absolute inset-0 bg-green-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </a>
            
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, 'projects')}
              className="w-full sm:w-auto group relative overflow-hidden rounded-lg border-2 border-green-500 px-8 py-4 transition-all duration-300"
              tabIndex={0}
              aria-label="View projects"
            >
              <span className="relative z-10 text-green-500 font-medium group-hover:text-white transition-colors">
                View Projects
              </span>
              <div className="absolute inset-0 bg-green-500 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;