import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  ChevronRight,
  FileCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'JPG vs PNG vs WEBP: Which Image Format is Best for PDFs?',
  description:
    'Compare JPG, PNG, and WEBP image formats for PDF creation. Understand compression algorithms, alpha transparency, file sizes, and document clarity.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/image-formats-compared-jpg-vs-png-vs-webp',
  },
};

export default function ImageFormatsComparedGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'JPG vs PNG vs WEBP Comparison', item: 'https://imagetopdf.online/guides/image-formats-compared-jpg-vs-png-vs-webp' },
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
        <span className="text-gray-900 font-semibold truncate">JPG vs PNG vs WEBP</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Technical Analysis</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 7 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          JPG vs PNG vs WEBP: Which Image Format is Best for Document Archiving & PDFs?
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Choosing between JPEG, PNG, and WEBP formats directly impacts your final PDF file size, text legibility, and printing sharpness. Here is a comprehensive technical breakdown of how each format performs when compiled into PDF documents.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        {/* Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Format Comparison Matrix at a Glance
          </h2>
          <div className="not-prose overflow-x-auto bg-white border border-gray-200 rounded-3xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold text-gray-700">Feature</th>
                  <th className="py-3 px-4 font-bold text-gray-900">JPEG / JPG</th>
                  <th className="py-3 px-4 font-bold text-gray-900">PNG</th>
                  <th className="py-3 px-4 font-bold text-gray-900">WEBP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Compression Type</td>
                  <td className="py-3 px-4 text-gray-600">Lossy (DCT Discrete Cosine)</td>
                  <td className="py-3 px-4 text-gray-600">Lossless (DEFLATE / LZ77)</td>
                  <td className="py-3 px-4 text-gray-600">Both Lossy & Lossless (VP8)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Transparency Support</td>
                  <td className="py-3 px-4 text-rose-600 font-medium">No (Solid white fill)</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Yes (8-bit alpha channel)</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Yes (Full alpha support)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Text & Line Sharpness</td>
                  <td className="py-3 px-4 text-amber-600">Prone to ringing artifacts</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Razor sharp</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Sharp with smooth gradients</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Relative File Size</td>
                  <td className="py-3 px-4 text-gray-600">Compact for photography</td>
                  <td className="py-3 px-4 text-gray-600">Larger for photographs</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">25–35% smaller than JPG</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Best Document Use Case</td>
                  <td className="py-3 px-4 text-gray-600">Camera photos, receipts, ID cards</td>
                  <td className="py-3 px-4 text-gray-600">Screenshots, logos, signed forms</td>
                  <td className="py-3 px-4 text-gray-600">Web graphics, modern exports</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* JPEG Deep Dive */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-black">1. JPEG (JPG): The Photo King</h2>
          <p>
            JPEG remains the default capture format for camera hardware. By discarding high-frequency visual information that the human eye naturally ignores, JPEG achieves extraordinary compression ratios for complex natural scenes.
          </p>
          <p>
            <strong>When to use for PDFs:</strong> Use JPG when compiling photos of handwritten lecture notes, whiteboards, paper receipts, or passport photos. When converting on ImageToPDF.online, selecting high quality ensures compression artifacts are kept minimal.
          </p>
        </section>

        {/* PNG Deep Dive */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-black">2. PNG: The Standard for Text & Screenshots</h2>
          <p>
            PNG uses lossless compression, meaning every pixel is preserved exactly without alteration. It does not introduce the fuzzy &quot;mosquito noise&quot; around high-contrast typography that plagues JPEGs.
          </p>
          <p>
            <strong>When to use for PDFs:</strong> Use PNG whenever your document consists of screenshots of software interfaces, digital contract signatures, graphs, blueprints, or vector diagrams. Our converter cleans up PNG transparency by placing transparent layers against white PDF pages without black artifact squares.
          </p>
        </section>

        {/* WEBP Deep Dive */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-black">3. WEBP: The Modern Web Format</h2>
          <p>
            Developed by Google, WEBP combines predictive intra-frame coding with advanced entropy encoding. It provides 25% to 34% smaller file sizes than comparable JPEG images while maintaining equivalent visual fidelity.
          </p>
          <p>
            <strong>Why convert WEBP to PDF?</strong> While browsers handle WEBP effortlessly, many offline desktop programs, legacy PDF printers, and email clients still cannot open raw <code>.webp</code> files. Converting WEBP into standard PDF format restores universal compatibility on any machine.
          </p>
        </section>
      </div>

      {/* Conversion Links */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 space-y-4">
        <h3 className="text-xl font-bold text-black text-center">Convert Any Format to PDF Right Now</h3>
        <p className="text-xs sm:text-sm text-gray-600 text-center max-w-lg mx-auto">
          Our converter natively processes JPG, PNG, and WEBP files simultaneously with zero upload delay.
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
        </div>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/how-to-combine-multiple-images-into-one-pdf" className="text-gray-500 hover:text-black font-medium">
          ← Previous: Combining Images
        </Link>
        <Link href="/guides/how-to-convert-photos-to-pdf-on-iphone-and-android" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: Mobile Conversion Guide <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

