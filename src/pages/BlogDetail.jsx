import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { blogService } from "../services/blogApi";
import { LoadingSpinner } from "../components/LoadingSpinner";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import {
  Calendar,
  User,
  Tag,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();

  const {
    data: blogData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogService.getBlogBySlug(slug),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 1,
  });

  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="heading-2 text-secondary mb-4">Blog Not Found</h2>
          <p className="desc mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="primary-btn inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return <Navigate to="/blogs" replace />;
  }

  const blog = blogData.blog || blogData;

  return (
    <>
      <Helmet>
        <title>{blog?.title || "Blog Post"} - AscentiQ AI</title>
        <meta
          name="description"
          content={
            blog?.metaDescription ||
            blog?.excerpt ||
            "Read our latest blog post"
          }
        />
        <meta
          name="keywords"
          content={
            blog?.metaKeywords?.join(", ") ||
            blog?.tags?.join(", ") ||
            "blog, AI, technology"
          }
        />
        <meta property="og:title" content={blog?.title || "Blog Post"} />
        <meta
          property="og:description"
          content={
            blog?.metaDescription ||
            blog?.excerpt ||
            "Read our latest blog post"
          }
        />
        <meta property="og:image" content={blog?.imageUrl || ""} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog?.title || "Blog Post"} />
        <meta
          name="twitter:description"
          content={
            blog?.metaDescription ||
            blog?.excerpt ||
            "Read our latest blog post"
          }
        />
        <meta name="twitter:image" content={blog?.imageUrl || ""} />
      </Helmet>

      <WebsiteHeader />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative text-white">
          {blog?.imageUrl && (
            <div className="absolute inset-0">
              <img
                src={blog.imageUrl}
                alt={blog.imageAlt || blog.title}
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          )}
          <div className="relative z-10 wrapper py-16">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-secondary hover:text-white mb-6 transition-colors duration-200"
              >
                <ArrowLeft size={16} />
                Back to Blogs
              </Link>

              <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(blog?.publishDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{blog?.author?.name || blog?.authorId?.name}</span>
                </div>
                {blog?.categoryId && (
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    <span>{blog.categoryId.name}</span>
                  </div>
                )}
              </div>

              <h1 className="heading-1 text-white mb-6 leading-tight">
                {blog?.title}
              </h1>

              {blog?.excerpt && (
                <p className="sub-heading mb-8 leading-relaxed">
                  {blog.excerpt}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-tertiarytwo">
          <div className="wrapper">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              {blog?.imageUrl && (
                <div className="mb-8">
                  <img
                    src={blog.imageUrl}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-96 object-cover rounded-lg shadow-large"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="blog-content max-w-none">
                {blog?.content ? (
                  <div
                    className="text-white/80 leading-relaxed text-lg"
                    style={{
                      "--tw-prose-body": "rgb(255 255 255 / 0.8)",
                      "--tw-prose-headings": "rgb(230 176 43)",
                      "--tw-prose-links": "rgb(230 176 43)",
                      "--tw-prose-bold": "rgb(255 255 255)",
                      "--tw-prose-counters": "rgb(255 255 255 / 0.6)",
                      "--tw-prose-bullets": "rgb(255 255 255 / 0.6)",
                      "--tw-prose-hr": "rgb(230 176 43 / 0.3)",
                      "--tw-prose-quotes": "rgb(255 255 255 / 0.8)",
                      "--tw-prose-quote-borders": "rgb(230 176 43)",
                      "--tw-prose-captions": "rgb(255 255 255 / 0.6)",
                      "--tw-prose-code": "rgb(230 176 43)",
                      "--tw-prose-pre-code": "rgb(255 255 255 / 0.8)",
                      "--tw-prose-pre-bg": "rgb(10 24 40)",
                      "--tw-prose-th-borders": "rgb(230 176 43 / 0.3)",
                      "--tw-prose-td-borders": "rgb(230 176 43 / 0.1)",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                      className="reset-html"
                    />
                  </div>
                ) : (
                  <div className="text-white/80 leading-relaxed text-lg">
                    <p>{blog?.excerpt}</p>
                    <p className="mt-4 text-white/60 italic">
                      No content available for this blog post.
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              {blog?.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-secondary/30">
                  <h3 className="text-lg font-semibold text-secondary mb-4">
                    Tags:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm hover:bg-secondary hover:text-background transition-all duration-300 border border-secondary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-secondary/30">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary text-background rounded-full flex items-center justify-center text-xl font-bold">
                    {(blog?.author?.name || blog?.authorId?.name || "A")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {blog?.author?.name || blog?.authorId?.name}
                    </h3>
                    <p className="text-white/60">Author at AscentiQ AI</p>
                  </div>
                </div>
              </div>

              {/* Back to Blogs */}
              <div className="mt-12 pt-8 border-t border-secondary/30 text-center">
                <Link
                  to="/blogs"
                  className="primary-btn inline-flex items-center gap-2 w-fit mx-auto"
                >
                  <ArrowLeft size={16} />
                  Back to All Blogs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WebsiteFooter />
    </>
  );
};

export default BlogDetail;
