const Education = () => {
  const educationPrograms = [
    {
      icon: "laptop-code",
      title: "Cybersecurity Operator Advanced Diploma",
      institution: "Willis College - Ottawa Campus",
      date: "Jan 2025 - Dec 2025",
      description: "Comprehensive 48-week cybersecurity program focused on practical security operations and threat management.",
      coursework: [
        "Computer Hardware and Host-Based Security Foundations",
        "Network Architecture Design and Operations",
        "Windows/Linux Systems Administration and Security",
        "Network Security Technology and Defense Operations",
        "Advanced Security Services and Threat Management"
      ],
      duration: "48 weeks"
    },
    {
      icon: "code",
      title: "Coding & Web Development Program",
      institution: "Code Youth Non-Profit Organization",
      date: "01/2023 - 04/2023",
      description: "Intensive 360-hour program focused on web development and programming fundamentals.",
      highlights: [
        "Database Management",
        "Security Best Practices"
      ]
    }
  ];

  const certifications = [
    {
      icon: "google",
      title: "Google Cybersecurity Certificate",
      date: "2024",
      description: "Emphasizes practical skills in system protection, threat mitigation, and incident response. Skills include Python, SIEM tools, SQL, Linux, and IDS.",
      skills: ["Python", "SIEM tools", "SQL", "Linux", "IDS"]
    },
    {
      icon: "network-wired",
      title: "The Bits and Bytes of Computer Networking",
      date: "2023",
      description: "Certification in Computer Networking covers network fundamentals, TCP/IP, DNS, DHCP, and cloud applications.",
      skills: ["DNS", "IPv4", "Network Modeling", "Troubleshooting"]
    },
    {
      icon: "search",
      title: "Security Blue Team Introduction to OSINT",
      date: "2023",
      description: "Mastered key OSINT tools and techniques for cybersecurity intelligence gathering and analysis.",
      skills: ["The Harvester", "TweetDeck", "Google Dorks", "Social Media Analytics"]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
          Education &amp; Certifications
        </h2>
        
        {/* Education Programs */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12">
          {educationPrograms.map((program, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <i className={`fas fa-${program.icon} text-3xl text-green-500`}></i>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">{program.title}</h3>
                    <span className="text-green-500 text-sm sm:text-base">{program.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base mb-2">{program.institution}</p>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  
                  {program.coursework && (
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.coursework.map((course, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <i className="fas fa-check-circle text-green-500 mt-1"></i>
                            <span className="text-gray-300 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications - Keep existing certification code */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <i className={`fab fa-${cert.icon} text-3xl sm:text-4xl text-green-500`}></i>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text">{cert.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{cert.date}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;