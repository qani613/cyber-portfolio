import { useEffect, useState } from 'react';
import { getBlogPost } from '../services/strapi';
import marked from 'marked';

const BlogPost = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getBlogPost(slug);
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>;
  }

  if (!post) return null;

  return (
    <article className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-8">
          <span className="text-green-500 text-sm">{post.attributes.category}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mt-2 mb-4">
            {post.attributes.title}
          </h1>
          <div className="flex items-center text-gray-400 text-sm">
            <span>{new Date(post.attributes.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.attributes.readTime}</span>
          </div>
        </div>

        <div className="prose prose-invert prose-green max-w-none">
          <div dangerouslySetInnerHTML={{ __html: marked(post.attributes.content) }} />
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 