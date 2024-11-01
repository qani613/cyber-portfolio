import axios from 'axios';

const ANALYTICS_ENDPOINT = import.meta.env.VITE_ERROR_TRACKING_URL || '/api/errors';

const errorTypes = {
  API_ERROR: 'API_ERROR',
  IMAGE_ERROR: 'IMAGE_ERROR',
  COMPONENT_ERROR: 'COMPONENT_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR'
};

const trackError = async (error, metadata = {}) => {
  if (!import.meta.env.PROD) {
    console.group('🔍 Error Tracked');
    console.error(error);
    console.log('Metadata:', metadata);
    console.groupEnd();
    return;
  }

  try {
    await axios.post(ANALYTICS_ENDPOINT, {
      timestamp: new Date().toISOString(),
      error: {
        message: error.message,
        stack: error.stack,
        type: error.type || errorTypes.API_ERROR
      },
      metadata: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...metadata
      }
    });
  } catch (trackingError) {
    console.error('Failed to track error:', trackingError);
  }
};

export { trackError, errorTypes }; 