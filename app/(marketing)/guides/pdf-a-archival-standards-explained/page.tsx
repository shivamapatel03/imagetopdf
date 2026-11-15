import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  FileCheck2,
  CheckCircle2,
  Lock,
  ArrowRight,
  Clock,
  Shield,
  BookOpen,
  ChevronRight,
  Scale,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PDF/A Explained: Archival Standards for Long-Term Document Preservation',
  description:
    'Learn what PDF/A is, why legal and financial bodies mandate it, and the differences between PDF/A-1, PDF/A-2, PDF/A-3, and conformance levels a and b.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/pdf-a-archival-standards-explained',
  },
};

export default function PdfAArchivalGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'PDF/A Archival Standards', item: 'https://imagetopdf.online/guides/pdf-a-archival-standards-explained' },
  ]);

  return (
    <article className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/guides" className="hover:text-black">Guides</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900 font-semibold truncate">PDF/A Archival Standards Guide</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Standards & Compliance</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 8 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          PDF/A Explained: The International Standard for Long-Term Document Archival
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          If you work with court filings, academic records, tax archives, or medical history, you have likely encountered requests for &quot;PDF/A compliant files&quot;. Here is an authoritative guide on what PDF/A means, how it differs from ordinary PDFs, and why it matters.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            The Problem with Ordinary PDFs: The 20-Year Rendering Dilemma
          </h2>
          <p>
            Standard PDFs are remarkably versatile: they support audio clips, embedded 3D models, dynamic JavaScript calculations, external font links, and remote web hyperlinks.
          </p>
          <p>
            However, this flexibility makes standard PDFs dangerous for long-term legal archives. If a standard PDF relies on a system font installed on your computer today, opening that same file 25 years from now on a future operating system can cause missing characters, altered formatting, or broken pagination.
          </p>
          <p>
            To solve this, the International Organization for Standardization created <strong>PDF/A (ISO 19005)</strong>: an internationally regulated subset of PDF designed to guarantee that a document can be reproduced <em>identically</em> decades or centuries into the future.
          </p>
        </section>

        {/* PDF vs PDF/A Comparison */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Key Differences: Standard PDF vs PDF/A
          </h2>
          <div className="not-prose overflow-x-auto bg-white border border-gray-200 rounded-3xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold text-gray-700">Feature</th>
                  <th className="py-3 px-4 font-bold text-[#4D4AE8]">PDF/A Standard (Archival)</th>
                  <th className="py-3 px-4 font-bold text-gray-500">Standard PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Font Embedding</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Strictly Mandatory (100% Embedded)</td>
                  <td className="py-3 px-4 text-gray-600">Optional (Can reference system fonts)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Color Profiles</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Device-independent (ICC Color Profiles)</td>
                  <td className="py-3 px-4 text-gray-600">Device-dependent (May shift across screens)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">JavaScript & Scripts</td>
                  <td className="py-3 px-4 text-rose-600 font-bold">Strictly Forbidden (Zero Scripts)</td>
                  <td className="py-3 px-4 text-gray-600">Allowed (Dynamic calculation forms)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Encryption / Passwords</td>
                  <td className="py-3 px-4 text-rose-600 font-bold">Forbidden (Ensures future access)</td>
                  <td className="py-3 px-4 text-gray-600">Allowed (AES-256 password lock)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Audio, Video & 3D</td>
                  <td className="py-3 px-4 text-rose-600 font-bold">Forbidden</td>
                  <td className="py-3 px-4 text-gray-600">Allowed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Versions Breakdown */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            The Evolution of PDF/A Standards (1 through 4)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">ISO 19005-1</span>
              <h4 className="font-bold text-base text-black">PDF/A-1 (Released 2005)</h4>
              <p className="text-xs text-gray-500">Based on PDF 1.4. The foundational standard for text documents, widely mandated in court systems worldwide.</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">ISO 19005-2</span>
              <h4 className="font-bold text-base text-black">PDF/A-2 (Released 2011)</h4>
              <p className="text-xs text-gray-500">Based on PDF 1.7. Adds support for JPEG 2000 compression, transparent PNG layers, and embedded PDF attachments.</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">ISO 19005-3</span>
              <h4 className="font-bold text-base text-black">PDF/A-3 (Released 2012)</h4>
              <p className="text-xs text-gray-500">Allows embedding of any raw file type (such as raw XML invoices, CSV spreadsheets, or CAD files) inside the container.</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">ISO 19005-4</span>
              <h4 className="font-bold text-base text-black">PDF/A-4 (Released 2020)</h4>
              <p className="text-xs text-gray-500">Modernized standard based on PDF 2.0 (ISO 32000-2) with streamlined conformance levels.</p>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Generate Standard PDF Documents Today</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Convert your images into clean, self-contained, ISO 32000 compliant PDF files right in your browser.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Open Free Converter
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/how-to-reduce-pdf-file-size-without-losing-quality" className="text-gray-500 hover:text-black font-medium">
          ← Previous: PDF Size Reduction Guide
        </Link>
        <Link href="/guides/color-profiles-rgb-vs-cmyk-in-pdf" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: Color Profiles RGB vs CMYK <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

