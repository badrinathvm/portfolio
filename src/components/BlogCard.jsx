import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span>{blog.readTime}</span>
        </div>

        {blog.url ? (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors block"
          >
            {blog.title}
          </a>
        ) : (
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
            {blog.title}
          </h2>
        )}

        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {blog.url ? (
          <a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            Read More →
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
            Read More →
          </button>
        )}
      </div>
    </article>
  );
};

export default BlogCard;