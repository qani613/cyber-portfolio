const Education = () => {
  const certifications = [
    {
      icon: "google",
      title: "Google Cybersecurity Certificate",
      date: "Completed 2024",
      description: "Emphasizes practical skills in system protection, threat mitigation, and incident response.",
      skills: ["Python", "SIEM tools", "SQL", "Linux", "IDS"]
    },
    {
      icon: "network-wired",
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "Advanced Networking Certification",
      description: "Comprehensive certification covering network fundamentals, TCP/IP, DNS, DHCP, and cloud applications.",
      skills: ["DNS", "IPv4", "Network Modeling", "Troubleshooting"]
    },
    {
      icon: "search",
      title: "Security Blue Team Introduction to OSINT",
      subtitle: "Open Source Intelligence Specialist",
      description: "Mastered key OSINT tools and techniques for cybersecurity intelligence gathering and analysis.",
      skills: ["The Harvester", "TweetDeck", "Google Dorks", "Social Media Analytics", "Risk Assessment"]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
          Education &amp; Certifications
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <i className={`fab fa-${cert.icon} text-3xl sm:text-4xl text-green-500`}></i>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text">{cert.title}</h3>
                  {cert.subtitle && <p className="text-gray-400">{cert.subtitle}</p>}
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