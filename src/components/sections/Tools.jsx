const Tools = () => {
  const toolCategories = [
    {
      title: "Security Tools",
      icon: "shield-alt",
      tools: [
        { name: "Wireshark", icon: "/icons/wireshark.svg", proficiency: 90 },
        { name: "Nmap", icon: "/icons/nmap.svg", proficiency: 85 },
        { name: "Metasploit", icon: "/icons/metasploit.svg", proficiency: 80 },
        { name: "Burp Suite", icon: "/icons/burp.svg", proficiency: 85 }
      ]
    },
    {
      title: "Development",
      icon: "code",
      tools: [
        { name: "VS Code", icon: "/icons/vscode.svg", proficiency: 95 },
        { name: "Git", icon: "/icons/git.svg", proficiency: 90 },
        { name: "Docker", icon: "/icons/docker.svg", proficiency: 85 },
        { name: "Terminal", icon: "/icons/terminal.svg", proficiency: 90 }
      ]
    },
    {
      title: "Network Tools",
      icon: "network-wired",
      tools: [
        { name: "pfSense", icon: "/icons/pfsense.svg", proficiency: 85 },
        { name: "Snort IDS", icon: "/icons/snort.svg", proficiency: 80 },
        { name: "VMware", icon: "/icons/vmware.svg", proficiency: 90 },
        { name: "VirtualBox", icon: "/icons/virtualbox.svg", proficiency: 85 }
      ]
    }
  ];

  return (
    <section id="tools" className="relative py-16 sm:py-24 bg-gray-900">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Tools & Technologies
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Professional tools and technologies I use for security implementation and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {toolCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <i className={`fas fa-${category.icon} text-green-500 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Tools Grid */}
              <div className="space-y-6">
                {category.tools.map((tool, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {tool.name}
                        </span>
                      </div>
                      <span className="text-sm text-green-500">
                        {tool.proficiency}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500 ease-out group-hover:from-green-400 group-hover:to-green-500"
                        style={{ width: `${tool.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            onClick={(e) => smoothScroll(e, 'contact')}
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
          >
            <span className="mr-2">Discuss Your Project</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tools;