import { useState, useEffect } from 'react';
import { getBlogPosts, getBlogPost } from '../services/strapi';
import validateContent from '../utils/contentValidation';
import { trackError, errorTypes } from '../services/errorTracking';

export const useContentManagement = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [content, setContent] = useState({});
  const [validationErrors, setValidationErrors] = useState([]);

  const validateAndSetContent = (data, type) => {
    const errors = [];
    const validContent = data.filter(item => {
      const validation = validateContent[type](item);
      if (!validation.isValid) {
        errors.push({
          id: item.id,
          type,
          ...validation
        });
      }
      return validation.isValid;
    });

    setValidationErrors(prev => [...prev, ...errors]);
    return validContent;
  };

  const loadContent = async () => {
    try {
      setLoading(true);
      const [blogPosts, projects] = await Promise.all([
        getBlogPosts(),
        // Add other content fetching here
      ]);

      const validBlogPosts = validateAndSetContent(blogPosts, 'blogPost');
      
      setContent({
        blogPosts: validBlogPosts,
        // Add other content types
      });
    } catch (err) {
      setError(err);
      trackError(err, {
        type: errorTypes.CONTENT_ERROR,
        context: 'Content Management'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  return {
    content,
    loading,
    error,
    validationErrors,
    reload: loadContent
  };
}; 