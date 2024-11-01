import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Network Tool",
      description: "Developed a versatile network tool using Python to assist network administrators with subnetting, conversion calculations, DNS lookup, IP geolocation, and port scanning.",
      tags: ["Python", "Socket", "Ipaddress", "Requests"],
      type: "network",
      link: "#",
      github: "https://github.com/username/network-tool",
      image: "/images/network-tool.jpg"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilterClick = (filter) => {
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setActiveFilter(filter);
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Showcasing my expertise in cybersecurity, web development, and network administration
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
          {['all', 'web', 'security', 'network'].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300
                ${activeFilter === filter 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          style={{
            transform: `translateY(${animateCard.y}px)`,
            opacity: animateCard.opacity,
            transition: 'all 0.5s ease-out'
          }}
        >
          {projects
            .filter(project => activeFilter === 'all' || project.type === activeFilter)
            .map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm sm:text-base">View Project</span>
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                    
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source on GitHub"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;