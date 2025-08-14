import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { blogService } from '../services/blogApi';
import { LoadingSpinner } from '../components/LoadingSpinner';
import WebsiteHeader from '../components/website/WebsiteHeader';
import WebsiteFooter from '../components/website/WebsiteFooter';
import PageBanner from '../components/website/PageBanner';
import BlogCard from '../components/BlogCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const {
    data: blogsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['blogs', currentPage],
    queryFn: () => blogService.getPublishedBlogs(currentPage, blogsPerPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });



  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="heading-2 text-secondary mb-4">Error Loading Blogs</h2>
          <p className="desc">Please try again later.</p>
        </div>
      </div>
    );
  }

  const { blogs = [], totalPages = 1, currentPage: apiCurrentPage = 1 } = blogsData || {};

  return (
    <>
      <Helmet>
        <title>Blogs - AscentiQ AI</title>
        <meta name="description" content="Explore our latest insights, industry trends, and expert perspectives on AI, technology, and digital transformation." />
        <meta name="keywords" content="blog, AI insights, technology trends, digital transformation, machine learning, artificial intelligence" />
      </Helmet>

      <WebsiteHeader />
      <PageBanner title="Our Blog" desc="Insights, Trends & Expert Perspectives" />

      <section className="py-16 bg-background">
        <div className="wrapper">
          {blogs.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="heading-2 text-secondary mb-4">No Blogs Available</h3>
              <p className="desc">Check back soon for new content!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handlePageChange(apiCurrentPage - 1)}
                    disabled={apiCurrentPage <= 1}
                    className="flex items-center gap-1 px-4 py-2 text-white bg-tertiarytwo border border-secondary/30 rounded-lg hover:bg-secondary hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (apiCurrentPage <= 3) {
                        pageNum = i + 1;
                      } else if (apiCurrentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = apiCurrentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                            pageNum === apiCurrentPage
                              ? 'bg-secondary text-background font-medium'
                              : 'text-white bg-tertiarytwo border border-secondary/30 hover:bg-secondary hover:text-background'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(apiCurrentPage + 1)}
                    disabled={apiCurrentPage >= totalPages}
                    className="flex items-center gap-1 px-4 py-2 text-white bg-tertiarytwo border border-secondary/30 rounded-lg hover:bg-secondary hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <WebsiteFooter />
    </>
  );
};

export default Blogs;
