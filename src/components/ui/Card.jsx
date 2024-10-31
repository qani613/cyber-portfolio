const Card = ({ 
    title, 
    description, 
    tags = [], 
    className = '',
    icon,
    date,
    severity
  }) => {
    return (
      <div className={`bg-gray-800 rounded-lg overflow-hidden card-hover ${className}`}>
        <div className="p-6 gradient-border">
          {(severity || date) && (
            <div className="flex items-center justify-between mb-4">
              {severity && (
                <span className={`px-3 py-1 bg-${severity.color}-500/20 text-${severity.color}-500 rounded-full text-sm`}>
                  {severity.text}
                </span>
              )}
              {date && <span className="text-gray-400 text-sm">{date}</span>}
            </div>
          )}
          
          <div className="flex items-center mb-4">
            {icon && <i className={`${icon} text-4xl text-green-500 mr-4`}></i>}
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          
          <p className="text-gray-400 mb-4">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Card;