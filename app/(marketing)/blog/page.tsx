import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & PDF Guides – Document Conversion Best Practices',
  description: 'Learn how to optimize, convert, compress, and organize your images and PDF files with expert guides from the ImageToPDF.online team.',
  alternates: {
    canonical: 'https://imagetopdf.online/blog',
  },
};

export default function BlogIndexPage() {
  const categories = ['All', 'PDF Guides', 'Image Conversion', 'Productivity', 'Document Management'];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <Badge variant="brand">Guides & Articles</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Document Tips & Tutorials
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Comprehensive guides on image-to-PDF workflows, resolution optimization, file compression, and paperless productivity.
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:border-[#4D4AE8] transition-all hover:shadow-xs group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="brand">{post.category}</Badge>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`} className="focus:outline-hidden">
                <h2 className="text-xl font-bold text-black group-hover:text-[#4D4AE8] transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed">
                {post.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-gray-200"
                />
                <span className="text-xs font-semibold text-gray-700">
                  {post.author.name}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <span className="text-xs font-bold text-[#4D4AE8] flex items-center gap-1 group-hover:underline">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
