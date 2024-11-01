import { Component } from 'react';
import { trackError, errorTypes } from '../services/errorTracking';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    trackError(error, {
      type: errorTypes.COMPONENT_ERROR,
      componentStack: errorInfo.componentStack,
      componentName: this.props.name || 'Unknown'
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-4 bg-red-500/10 rounded-lg">
          <p className="text-red-500 font-semibold mb-2">Something went wrong</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 