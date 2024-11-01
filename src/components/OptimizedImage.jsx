import { useState, useCallback } from 'react';
import { getImageUrl } from '../services/strapi';
import { trackError, errorTypes } from '../services/errorTracking';

const OptimizedImage = ({ image, alt, className, sizes, fallbackImage = '/images/placeholder.jpg' }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleImageError = useCallback(() => {
    setError(true);
    setLoaded(true);
    console.error(`Failed to load image: ${alt}`);
  }, [alt]);

  const handleImageLoad = useCallback(() => {
    setLoaded(true);
    setError(false);
  }, []);

  const imageUrl = error ? fallbackImage : getImageUrl(image, { width: sizes[0], format: 'webp' });
  const srcSet = error ? undefined : sizes.map(size => {
    const url = getImageUrl(image, { width: size, format: 'webp' });
    return `${url} ${size}w`;
  }).join(', ');

  return (
    <div 
      className={`relative overflow-hidden ${!loaded ? 'bg-gray-800' : ''}`}
      role="img"
      aria-label={alt}
    >
      <img
        src={imageUrl}
        srcSet={srcSet}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt={alt}
        className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 