import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ blog }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="bg-tertiarytwo rounded-lg shadow-large overflow-hidden hover:shadow-secondary/30 hover:-translate-y-1 transition-all duration-300 border border-secondary/20">
      {blog.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.imageUrl}
            alt={blog.imageAlt || blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {blog.isFeatured && (
            <div className="absolute top-4 left-4 bg-secondary text-background px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{formatDate(blog.publishDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{blog.author?.name || blog.authorId?.name}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-white/80 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-xs border border-secondary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-2 text-secondary hover:text-white font-medium transition-colors duration-200"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
