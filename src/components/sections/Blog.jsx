import { useContentManagement } from '../../hooks/useContentManagement';
import ErrorBoundary from '../ErrorBoundary';

const Blog = () => {
  const { content, loading, error, validationErrors } = useContentManagement();

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load blog posts</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section id="blog" className="relative py-16 sm:py-24 bg-gray-900">
      <ErrorBoundary>
        {/* Existing blog content */}
        {validationErrors.length > 0 && import.meta.env.DEV && (
          <div className="fixed bottom-4 right-4 bg-red-500/10 p-4 rounded-lg">
            <h3 className="text-red-500 font-semibold">Content Validation Errors</h3>
            <pre className="text-sm text-gray-400 mt-2">
              {JSON.stringify(validationErrors, null, 2)}
            </pre>
          </div>
        )}
      </ErrorBoundary>
    </section>
  );
};

export default Blog; 