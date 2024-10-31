const Skills = () => {
  const skillCategories = [
    {
      icon: "shield-alt",
      title: "Security Core",
      description: "Core security principles and practices essential for cybersecurity operations",
      skills: [
        "Threats & Vulnerabilities",
        "Incident Response",
        "Network Analysis",
        "Security Frameworks",
        "Security Hardening"
      ]
    },
    {
      icon: "tools",
      title: "Technical Tools",
      description: "Professional tools and technologies for security implementation",
      skills: [
        "Linux Command Line",
        "Wireshark & TcpDump",
        "SIEM Tools",
        "SQL",
        "Git/GitHub"
      ]
    },
    {
      icon: "server",
      title: "Infrastructure",
      description: "Platform expertise for secure system administration",
      skills: [
        "WordPress Security",
        "Microsoft Hyper-V",
        "Virtual Private Server",
        "Ubuntu Server",
        "Cloud Security"
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-24 bg-gray-900">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
            Security Expertise & Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive skillset in cybersecurity, networking, and system administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative rounded-xl transition-all duration-300"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/5 rounded-xl transition-all duration-300"></div>
              
              <div className="relative p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/10 mb-6 group-hover:bg-green-500/20 transition-all duration-300">
                  <i className={`fas fa-${category.icon} text-2xl sm:text-3xl text-green-500`}></i>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6">
                  {category.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                    >
                      <span className="flex-shrink-0 w-5 h-5 mr-3 text-green-500">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <span className="text-sm sm:text-base">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-arrow-right text-green-500"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bars section */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-white">
            Proficiency Levels
          </h3>
          
          <div className="space-y-6">
            {[
              { name: "Network Security", level: 90 },
              { name: "Penetration Testing", level: 85 },
              { name: "Security Analysis", level: 88 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-green-500">{skill.level}%</span>
                </div>
                {/* Add your progress bar component here */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;