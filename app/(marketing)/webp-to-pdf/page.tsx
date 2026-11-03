import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ConverterApp } from '@/components/converter/ConverterApp';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Shield,
  Zap,
  Globe,
  FileText,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'WEBP to PDF Converter – Convert Modern WEBP Images Online Free',
  description:
    'Convert modern WEBP web images to PDF documents in high quality. Free, client-side, fast batch conversion with custom page layouts and zero cloud uploads.',
  alternates: {
    canonical: 'https://imagetopdf.online/webp-to-pdf',
  },
};

const FAQS = [
  {
    question: 'Why do I need to convert WEBP images to PDF?',
    answer:
      'While modern browsers support WEBP natively, many offline operating systems, older office suites, official submission portals, and printing devices cannot open raw .webp files. Converting them to PDF ensures universal viewability and printing capability on any device.',
  },
  {
    question: 'Are animated WEBP files supported?',
    answer:
      'Our converter extracts the high-resolution primary keyframe of any animated WEBP file and renders it crisply into your PDF page output.',
  },
  {
    question: 'Can I combine multiple WEBP images into a single PDF document?',
    answer:
      'Yes! You can upload multiple WEBP images at once, rearrange the page order via drag-and-drop, rotate orientations 90 degrees, and merge them into one organized document.',
  },
  {
    question: 'Does converting WEBP to PDF degrade image quality?',
    answer:
      'No. ImageToPDF.online decodes the raw VP8 / VP8L bitmap data directly in browser memory and places it onto the PDF canvas without applying redundant lossy re-compression.',
  },
  {
    question: 'What page sizes and orientations can I select?',
    answer:
      'You can select standard A4, A3, US Letter, US Legal, or "Fit to Image". You can also choose Portrait, Landscape, and custom margin spacing (None, Small, Medium, Large).',
  },
  {
    question: 'Is my data secure when converting WEBP images?',
    answer:
      'Yes, 100%. All processing occurs locally within your web browser using HTML5 Canvas and WebAssembly. Your files are never uploaded to any remote server.',
  },
  {
    question: 'Can I convert WEBP to PDF on mobile phones?',
    answer:
      'Yes. Our converter works seamlessly on iPhone (Safari) and Android (Chrome) without requiring you to download any third-party apps.',
  },
];

export default function WebpToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'WEBP to PDF', item: 'https://imagetopdf.online/webp-to-pdf' },
  ]);

  return (
    <div className="w-full max-w-5xl mx-auto pt-4 sm:pt-6 pb-16 px-4 sm:px-6 lg:px-8 space-y-12 min-w-0 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="brand">Next-Gen WebP Specialist</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Convert WEBP to PDF Online Free
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Transform modern WEBP web images, downloaded graphics, and online product photos into universally compatible PDF documents with complete browser privacy.
        </p>
      </div>

      {/* Main Tool Interface */}
      <div className="w-full">
        <ConverterApp
          toolName="WEBP to PDF"
          acceptedFormats={['.webp']}
        />
      </div>

      {/* Clean Non-Intrusive Display Ad */}
      <div className="w-full max-w-full overflow-hidden">
        <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="auto" />
      </div>

      {/* In-Depth Technical & Practical Guide */}
      <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center">
            <Globe className="w-5 h-5 text-[#4D4AE8]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">
              Bridging the WEBP Compatibility Gap
            </h2>
            <p className="text-xs text-gray-500">Why converting next-gen web images to PDF matters</p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-gray-700 space-y-4 leading-relaxed">
          <p>
            Developed by Google, the WEBP format has rapidly become the dominant image format across modern websites due to its outstanding compression ratios (25% to 35% smaller than comparable JPEGs). However, when you right-click and save an image from the web, you often receive a <code>.webp</code> file that refuses to open in legacy image viewers, PDF editing software, or email clients.
          </p>
          <p>
            Converting WEBP images to PDF solves this compatibility hurdle instantly. The PDF format encapsulates the visual fidelity of WEBP into an industry-standard ISO container that opens flawlessly on any Windows, macOS, Linux, iOS, or Android device without requiring specialized codec installations.
          </p>
        </div>

        {/* Technical Specs Table */}
        <div className="pt-4 not-prose overflow-x-auto bg-white border border-gray-200 rounded-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-4 font-bold text-gray-700">Specification</th>
                <th className="py-2.5 px-4 font-bold text-gray-700">Supported Capability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Accepted Formats</td>
                <td className="py-2.5 px-4">.webp (Lossy VP8, Lossless VP8L, Alpha transparency)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Decoding Engine</td>
                <td className="py-2.5 px-4">Native browser hardware decoding via HTML5 Canvas</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Output Page Sizes</td>
                <td className="py-2.5 px-4">A4 (Standard ISO), A3, US Letter, US Legal, Fit to Image</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Privacy Protocol</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">100% In-Browser Memory (Zero Server Transmission)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How it Works */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert WEBP to PDF in 5 Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: '01', text: 'Select or drag your WEBP images into the upload box.' },
            { step: '02', text: 'Drag thumbnail cards to organize page sequence.' },
            { step: '03', text: 'Rotate sideways graphics 90° if required.' },
            { step: '04', text: 'Select your preferred page size and margin spacing.' },
            { step: '05', text: 'Click Convert to PDF and download immediately with zero fees.' },
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-white border border-gray-200 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-[#4D4AE8] bg-[#D7CDFC]/40 px-2 py-0.5 rounded">
                STEP {item.step}
              </span>
              <p className="text-xs text-gray-600 leading-relaxed pt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Why Convert WEBP on ImageToPDF.online?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Private & Device-Local</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Your downloaded graphics remain completely private. All decoding and PDF assembly execute inside your browser memory.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Universal Compatibility</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Turns finicky WEBP files into universally accessible PDF files readable on every computer, printer, and smartphone.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Multi-Image Merging</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Consolidate dozens of downloaded web images into a single cohesive document ready for presentations or archives.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Guides Strip */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#4D4AE8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Format Comparison</span>
          </div>
          <h4 className="font-bold text-black text-base">JPG vs PNG vs WEBP: Technical Deep Dive</h4>
          <p className="text-xs text-gray-600">Discover which format gives the best balance of print quality and compact file size.</p>
        </div>
        <Link href="/guides/image-formats-compared-jpg-vs-png-vs-webp" className="shrink-0">
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            Read Format Guide
          </Button>
        </Link>
      </div>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Frequently Asked Questions About Converting WEBP to PDF
        </h2>
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8">
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Related Document Converters</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/jpg-to-pdf">
            <Button variant="outline" size="sm">JPG to PDF</Button>
          </Link>
          <Link href="/png-to-pdf">
            <Button variant="outline" size="sm">PNG to PDF</Button>
          </Link>
          <Link href="/image-to-pdf">
            <Button variant="outline" size="sm">Merge Multi-Format to PDF</Button>
          </Link>
          <Link href="/guides">
            <Button variant="secondary" size="sm">Knowledge Hub</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
