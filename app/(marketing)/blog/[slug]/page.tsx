import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, Share2 } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} – ImageToPDF.online`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `https://imagetopdf.online/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) =>
    post.relatedSlugs?.includes(p.slug)
  );

  const faqSchema = getFaqSchema(post.faqs || []);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Blog', item: 'https://imagetopdf.online/blog' },
    { name: post.title, item: `https://imagetopdf.online/blog/${post.slug}` },
  ]);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Back button */}
      <div>
        <Link href="/blog">
          <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}>
            Back to All Guides
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">{post.category}</Badge>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          {post.description}
        </p>

        {/* Author info & date */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div>
              <p className="text-sm font-bold text-black">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <span className="text-xs text-gray-400">{post.publishDate}</span>
        </div>
      </div>

      {/* Table of Contents */}
      {post.tableOfContents && post.tableOfContents.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
            Table of Contents
          </h3>
          <ul className="space-y-2 text-sm">
            {post.tableOfContents.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-[#4D4AE8] font-medium transition-colors"
                >
                  {idx + 1}. {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Article Body */}
      <div className="prose max-w-none text-gray-800 leading-relaxed space-y-6 text-base sm:text-lg">
        {post.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-2xl font-bold text-black pt-4">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          return (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {paragraph.trim()}
            </p>
          );
        })}
      </div>

      {/* CTA Box inside blog */}
      <div className="p-8 rounded-3xl bg-[#D7CDFC]/30 border border-[#C4B5FD] text-center space-y-4">
        <h3 className="text-xl font-bold text-black">
          Try Converting Your Images Now
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Fast, completely free, and secure directly in your browser.
        </p>
        <Link href="/image-to-pdf">
          <Button variant="primary" size="lg" className="font-bold">
            Open Image to PDF Converter
          </Button>
        </Link>
      </div>

      {/* FAQs */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-black">
            Frequently Asked Questions
          </h3>
          <div className="bg-white border border-gray-200 rounded-3xl p-6">
            <Accordion items={post.faqs} />
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-gray-100">
          <h3 className="text-xl font-bold text-black">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-5 rounded-2xl border border-gray-200 hover:border-[#4D4AE8] transition-colors block group"
              >
                <Badge variant="neutral" className="mb-2">{rel.category}</Badge>
                <h4 className="text-base font-bold text-black group-hover:text-[#4D4AE8] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 mt-2">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
