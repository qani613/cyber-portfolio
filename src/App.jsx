import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Tools from './components/sections/Tools';
import Projects from './components/sections/Projects';
import CyberAttacks from './components/sections/CyberAttacks';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80 },
          color: { value: '#00ff00' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff00',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2
          }
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div id="particles-js" className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Tools />
        <Projects />
        <CyberAttacks />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App; 