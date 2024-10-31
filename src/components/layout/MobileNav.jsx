const MobileNav = ({ isOpen, onClose, navItems }) => {
  return (
    <div 
      className={`fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white"
          aria-label="Close menu"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
      </div>
      <nav className="px-6 py-8">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onClose}
            className="block py-4 text-xl text-gray-400 hover:text-green-500 transition-colors"
            tabIndex={isOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav; 