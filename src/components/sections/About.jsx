const About = () => {
  const highlights = [
    {
      icon: "shield-alt",
      title: "Security Focus",
      description: "Dedicated to implementing robust security measures and staying current with emerging threats"
    },
    {
      icon: "code",
      title: "Technical Expertise",
      description: "Proficient in various programming languages and security tools"
    },
    {
      icon: "chart-line",
      title: "Continuous Growth",
      description: "Constantly learning and adapting to new security challenges"
    }
  ];

  const certifications = [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "2024",
      icon: "google"
    },
    {
      name: "Network Security Specialist",
      issuer: "CompTIA",
      date: "2023",
      icon: "network-wired"
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-gray-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
            Detail-oriented cybersecurity professional dedicated to protecting organizations and the people they serve. Knowledgeable about NIST frameworks and able to implement security controls to ensure compliance with international regulations related to data protection. Experience with identifying threats, risks, and vulnerabilities; security hardening: threat modeling; and incident escalation and response. Proficient in the use of Linux command line, Wireshark, TcpDump, SQL, and Python. Strong communication and problem-solving skills.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Profile section */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Detail-oriented cybersecurity professional with expertise in network security, 
                vulnerability assessment, and system protection. Skilled in implementing security 
                controls and NIST frameworks for data protection compliance.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                      <i className={`fas fa-${highlight.icon} text-green-500 text-xl`}></i>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-6">
            {/* Key skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Key Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Network Security",
                  "Penetration Testing",
                  "Risk Assessment",
                  "Incident Response",
                  "Security Auditing",
                  "Threat Analysis"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span className="text-sm sm:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <i className={`fab fa-${cert.icon} text-green-500`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, 'contact')}
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
          >
            <span className="mr-2">Get in Touch</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;