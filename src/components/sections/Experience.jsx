const Experience = () => {
  const experiences = [
    {
      title: "Network Security (Home Lab)",
      company: "Personal Project",
      date: "01/2020 - Present",
      location: "Ottawa, ON",
      type: "Remote",
      responsibilities: [
        "Developed and simulated network security scenarios to analyze security protocols",
        "Engineered network defenses with firewall rules and intrusion detection systems",
        "Conducted virtual network security audits for industry standards compliance",
        "Explored emerging threats through targeted research"
      ],
      technologies: ["Wireshark", "Snort IDS", "pfSense", "VMware", "Kali Linux"]
    },
    {
      title: "WordPress Developer",
      company: "Freelance",
      date: "02/2021 - Present",
      location: "Ottawa, ON",
      type: "Remote",
      responsibilities: [
        "Designed custom WordPress websites for various industries",
        "Implemented SEO techniques and security measures",
        "Managed ongoing maintenance and support services",
        "Optimized website performance and security"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Security Plugins"]
    }
  ];

  return (
    <section id="experience" className="relative py-16 sm:py-24 bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Building expertise in cybersecurity and web development through hands-on experience
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-green-500/20 group-hover:bg-green-500/40 transition-colors duration-300"></div>
              )}

              <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-800 border-2 border-green-500/20 group-hover:border-green-500/40 flex items-center justify-center transition-colors duration-300">
                  <i className="fas fa-briefcase text-green-500 text-xl"></i>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-500 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-green-500 text-sm sm:text-base">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-400">
                        <span>{exp.date}</span>
                        <span className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt"></i>
                          {exp.location} • {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="flex-shrink-0 mt-1.5">
                            <i className="fas fa-check-circle text-green-500"></i>
                          </span>
                          <span className="text-sm sm:text-base">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 