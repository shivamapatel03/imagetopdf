import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  BookOpen,
  ArrowRight,
  Shield,
  Printer,
  Smartphone,
  Layers,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guides & Knowledge Base – Image to PDF Tutorials & Documentation',
  description:
    'Comprehensive guides, tutorials, and technical explanations on converting images to PDF, managing DPI print settings, preserving browser security, and organizing multi-page documents.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides',
  },
};

export const GUIDES = [
  {
    slug: 'how-to-convert-jpg-to-pdf',
    title: 'How to Convert JPG to PDF: The Complete Step-by-Step Guide',
    excerpt:
      'Learn how to turn single or multiple JPG/JPEG photos into clean, high-resolution PDF documents with optimal page sizes, custom margins, and zero quality loss.',
    category: 'Tutorials',
    readTime: '6 min read',
    icon: FileText,
  },
  {
    slug: 'best-image-resolution-for-pdf-printing',
    title: 'Best Image Resolution & DPI Settings for PDF Printing (72 vs 150 vs 300 DPI)',
    excerpt:
      'Understand how dots-per-inch (DPI) affects print clarity. Calculate exact pixel dimensions for standard A4 and US Letter sizes to prevent blurry documents.',
    category: 'Technical Guide',
    readTime: '8 min read',
    icon: Printer,
  },
  {
    slug: 'client-side-vs-cloud-pdf-conversion',
    title: 'Client-Side vs Cloud Document Converters: Protecting Sensitive Documents',
    excerpt:
      'Why uploading passports, tax receipts, and bank statements to cloud converters poses identity theft risks—and how browser-based WebAssembly eliminates the danger.',
    category: 'Security & Privacy',
    readTime: '7 min read',
    icon: Shield,
  },
  {
    slug: 'how-to-combine-multiple-images-into-one-pdf',
    title: 'How to Combine Multiple Images Into One PDF Document',
    excerpt:
      'Master the art of batch image consolidation. Reorder page thumbnails, rotate upside-down photos, and balance uniform margins for professional PDF reports.',
    category: 'Productivity',
    readTime: '5 min read',
    icon: Layers,
  },
  {
    slug: 'image-formats-compared-jpg-vs-png-vs-webp',
    title: 'JPG vs PNG vs WEBP: Which Image Format is Best for PDFs?',
    excerpt:
      'A deep technical comparison of JPEG lossy compression, PNG alpha transparency, and WEBP efficiency when compiling documents and scanned forms.',
    category: 'Technical Guide',
    readTime: '7 min read',
    icon: Sparkles,
  },
  {
    slug: 'how-to-convert-photos-to-pdf-on-iphone-and-android',
    title: 'How to Convert Photos to PDF on iPhone & Android (No Apps Required)',
    excerpt:
      'Convert camera roll snapshots straight into PDF files directly from iOS Safari and Android Chrome without downloading ad-bloated mobile apps.',
    category: 'Mobile Guide',
    readTime: '5 min read',
    icon: Smartphone,
  },
];

export default function GuidesHubPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="brand">Knowledge Hub & Guides</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          PDF & Document Conversion Guides
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          In-depth tutorials, technical deep-dives, and best practices authored to help you create crisp, secure, and professionally formatted PDF documents.
        </p>
      </div>

      {/* Featured Guide Banner */}
      <div className="bg-gradient-to-br from-[#D7CDFC]/25 to-white border border-[#C4B5FD] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xs">
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8] bg-white border border-[#C4B5FD] px-2.5 py-1 rounded-full">
              Essential Reading
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 7 min read
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Client-Side vs Cloud Document Converters: Why Browser Processing Protects Your Data
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover how modern WebAssembly and HTML5 Canvas allow complete document conversion without transmitting sensitive personal records across the internet.
          </p>
          <div className="pt-2">
            <Link href="/guides/client-side-vs-cloud-pdf-conversion">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Read Full Security Guide
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex w-40 h-40 rounded-3xl bg-[#D7CDFC] border border-[#C4B5FD] items-center justify-center shrink-0">
          <Shield className="w-20 h-20 text-[#4D4AE8]" />
        </div>
      </div>

      {/* All Guides Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <h3 className="text-xl font-bold text-black tracking-tight">
            All Tutorials & Articles
          </h3>
          <span className="text-xs font-semibold text-gray-500">
            6 Comprehensive Articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES.map((guide) => {
            const Icon = guide.icon;
            return (
              <article
                key={guide.slug}
                className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#4D4AE8] hover:shadow-xs transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#4D4AE8] group-hover:bg-[#D7CDFC]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {guide.readTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4D4AE8]">
                      {guide.category}
                    </span>
                    <h4 className="text-lg font-bold text-black group-hover:text-[#4D4AE8] transition-colors mt-1 leading-snug">
                      <Link href={`/guides/${guide.slug}`}>
                        {guide.title}
                      </Link>
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black group-hover:text-[#4D4AE8] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Helpful Tools Quick Strip */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Ready to Put These Guides into Practice?</h3>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          Try our 100% free, client-side PDF converter now with high resolution and zero cloud uploads.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/jpg-to-pdf">
            <Button variant="outline" size="sm">JPG to PDF</Button>
          </Link>
          <Link href="/png-to-pdf">
            <Button variant="outline" size="sm">PNG to PDF</Button>
          </Link>
          <Link href="/webp-to-pdf">
            <Button variant="outline" size="sm">WEBP to PDF</Button>
          </Link>
          <Link href="/image-to-pdf">
            <Button variant="primary" size="sm">All Formats</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

