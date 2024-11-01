import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative text-center">
        {/* Matrix-like rain effect */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="matrix-rain"></div>
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          <h1 className="text-8xl md:text-9xl font-bold text-green-500 animate-glitch">
            404
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Access Denied: Page Not Found
            </h2>
            
            <p className="text-gray-400 max-w-md mx-auto">
              The requested resource has been moved or doesn't exist in this server's directory.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleGoHome}
              className="group relative overflow-hidden rounded-lg bg-green-500 px-8 py-3 transition-all duration-300"
              tabIndex={0}
              aria-label="Return to homepage"
            >
              <span className="relative z-10 text-white font-medium">
                Return to Base →
              </span>
              <div className="absolute inset-0 bg-green-600 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 