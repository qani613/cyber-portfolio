const Button = ({ 
    children, 
    variant = 'primary', 
    className = '', 
    onClick,
    href,
    ...props 
  }) => {
    const baseStyles = "px-8 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500";
    
    const variants = {
      primary: "bg-green-600 hover:bg-green-700 text-white",
      secondary: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    };
  
    const styles = `${baseStyles} ${variants[variant]} ${className}`;
  
    if (href) {
      return (
        <a 
          href={href}
          className={styles}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );
    }
  
    return (
      <button 
        className={styles}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;