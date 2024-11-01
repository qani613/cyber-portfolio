import axios from 'axios';
import { cacheService } from '../utils/cache';
import { trackError, errorTypes } from './errorTracking';

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create axios instance
const strapiAPI = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
strapiAPI.interceptors.request.use(
  (config) => {
    // Add any auth tokens if needed
    const token = localStorage.getItem('strapiToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log outgoing requests in development
    if (import.meta.env.DEV) {
      console.log('🚀 Request:', config.method?.toUpperCase(), config.url);
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
strapiAPI.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (import.meta.env.DEV) {
      console.log('✅ Response:', response.config.method?.toUpperCase(), response.config.url);
    }
    
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    
    // Handle specific error cases
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          console.error('🔒 Unauthorized access');
          // Redirect to login or refresh token
          break;
        case 403:
          console.error('⛔ Forbidden access');
          break;
        case 404:
          console.error('❓ Resource not found');
          break;
        case 500:
          console.error('🔥 Server error');
          break;
        default:
          console.error(`❌ Error ${error.response.status}:`, error.response.data);
      }
    } else if (error.request) {
      console.error('📡 Network error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

const handleApiError = (error, retryCount = 0) => {
  if (retryCount < MAX_RETRIES && (error.code === 'ECONNABORTED' || error.response?.status >= 500)) {
    return true; // Should retry
  }
  return false;
};

const fetchWithRetry = async (url, options = {}, retryCount = 0) => {
  try {
    const response = await strapiAPI.get(url);
    return response;
  } catch (error) {
    if (handleApiError(error, retryCount)) {
      await sleep(RETRY_DELAY * (retryCount + 1));
      return fetchWithRetry(url, options, retryCount + 1);
    }
    throw error;
  }
};

const fetchWithCache = async (url, options = {}) => {
  const cacheKey = `strapi_${url}`;
  const cachedData = cacheService.get(cacheKey);
  
  if (cachedData) {
    if (import.meta.env.DEV) {
      console.log('📦 Cache hit:', url);
    }
    return cachedData;
  }
  
  try {
    const response = await fetchWithRetry(url, options);
    cacheService.set(cacheKey, response.data, options.ttl);
    return response.data;
  } catch (error) {
    trackError(error, {
      type: errorTypes.API_ERROR,
      endpoint: url,
      ...options
    });
    console.error('Failed to fetch data:', error.message);
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export const getBlogPosts = async () => {
  try {
    const data = await fetchWithCache('/blog-posts?populate=*', { ttl: 300000 }); // 5 minutes
    return data.data;
  } catch (error) {
    return [];
  }
};

export const getBlogPost = async (slug) => {
  try {
    const data = await fetchWithCache(
      `/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      { ttl: 600000 } // 10 minutes
    );
    return data.data[0];
  } catch (error) {
    return null;
  }
};

export const invalidateCache = (pattern) => {
  if (pattern === 'all') {
    cacheService.clear();
  } else {
    cacheService.invalidate(`strapi_${pattern}`);
  }
};

const getImageUrl = (image, options = {}) => {
  if (!image) return '';
  
  const { width, height, format = 'webp' } = options;
  const baseUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
  const url = image.data.attributes.url;
  
  // If no optimization needed, return original URL
  if (!width && !height) return `${baseUrl}${url}`;
  
  // Construct query parameters for optimization
  const params = new URLSearchParams();
  if (width) params.append('width', width);
  if (height) params.append('height', height);
  params.append('format', format);
  
  return `${baseUrl}${url}?${params.toString()}`;
};

export { getImageUrl }; 