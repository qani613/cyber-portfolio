import { useState, useEffect } from 'react';

const CyberAttacks = () => {
  const attacks = [
    {
      severity: 'Critical',
      date: 'March 2024',
      title: 'MOVEit Transfer Mass Exploitation',
      description: 'Mass exploitation of MOVEit Transfer vulnerability affecting thousands of organizations globally.',
      icon: 'shield-alt',
      type: 'Zero-day vulnerability'
    },
    {
      severity: 'High',
      date: 'February 2024',
      title: 'Ivanti Connect Secure VPN',
      description: 'Authentication bypass vulnerability in Ivanti Connect Secure and Policy Secure gateways.',
      icon: 'bug',
      type: 'Authentication bypass'
    },
    {
      severity: 'Medium',
      date: 'January 2024',
      title: 'Apache Struts RCE',
      description: 'Remote code execution vulnerability in Apache Struts affecting enterprise applications.',
      icon: 'code',
      type: 'Remote code execution'
    }
  ];

  const stats = [
    { label: 'Today', value: '2,847', id: 'attacks-today' },
    { label: 'This Week', value: '18,392', id: 'attacks-week' },
    { label: 'This Month', value: '74,563', id: 'attacks-month' }
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block">
            Latest Cyber Attacks
          </h2>
          <div className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Real-time monitoring of global cyber threats and security incidents
          </div>
        </div>
        
        {/* Attack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {attacks.map((attack, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-green-500/20 transition-all duration-300 hover:border-green-500/50 hover:transform hover:-translate-y-1"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span 
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                      ${attack.severity === 'Critical' 
                        ? 'bg-red-500/20 text-red-400' 
                        : attack.severity === 'High'
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                  >
                    <span className="mr-1.5">●</span>
                    {attack.severity}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm">{attack.date}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-green-500 transition-colors">
                  {attack.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  {attack.description}
                </p>
                
                <div className="flex items-center text-green-500 text-sm sm:text-base">
                  <i className={`fas fa-${attack.icon} mr-2`}></i>
                  <span>{attack.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-green-500/20">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center gradient-text">
              Live Attack Statistics
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {stats.map(({ label, value, id }) => (
                <div 
                  key={id}
                  className="text-center p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-2">
                    {value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CyberAttacks; 