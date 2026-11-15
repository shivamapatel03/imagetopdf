import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Smartphone,
  CheckCircle2,
  Apple,
  ArrowRight,
  Clock,
  Shield,
  Layers,
  ChevronRight,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Convert iPhone HEIC Photos to PDF (Windows, Mac & Mobile)',
  description:
    'Learn how to convert Apple HEIC photos into standard PDF documents on Windows, Mac, and mobile devices without paying for software or sacrificing quality.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/how-to-convert-heic-to-pdf',
  },
};

export default function ConvertHeicToPdfGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'How to Convert HEIC to PDF', item: 'https://imagetopdf.online/guides/how-to-convert-heic-to-pdf' },
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
        <span className="text-gray-900 font-semibold truncate">Convert HEIC to PDF Guide</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Apple & Mobile Guide</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 6 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          How to Convert iPhone HEIC Photos to PDF on Windows, Mac, and Mobile
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          If you take photos on an iPhone or iPad, Apple stores them by default as <code>.heic</code> (High Efficiency Image Container) files. When uploading to Windows PCs, job portals, or government portals, these files often trigger incompatibility errors. Here is the complete guide to converting HEIC into universally accepted PDF files.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            What is HEIC and Why Does It Cause Upload Errors?
          </h2>
          <p>
            Apple introduced HEIC (based on the HEVC/H.265 compression standard) with iOS 11 to save storage space. An HEIC photo takes roughly half the megabytes of a standard JPEG while delivering equal or superior image quality.
          </p>
          <p>
            However, outside the Apple ecosystem, compatibility is notoriously patchy:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Windows Incompatibility:</strong> Older Windows versions and many third-party desktop viewers cannot open <code>.heic</code> files without paid Microsoft Store extensions.</li>
            <li><strong>Portal Rejections:</strong> University submission forms, banking KYC verification systems, and employer HR portals rarely support HEIC.</li>
            <li><strong>Printing Hurdles:</strong> Standard office network printers and copy center kiosks do not accept direct HEIC files.</li>
          </ul>
        </section>

        {/* Platform Solutions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black">
            Method 1: Direct Conversion on iPhone (Safari)
          </h2>
          <p>
            The easiest method requires zero app downloads. When you browse to ImageToPDF.online from iOS Safari:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-3 not-prose">
            <ol className="text-xs sm:text-sm text-gray-700 space-y-3 list-decimal pl-5">
              <li>Open <strong>Safari</strong> on your iPhone and visit <strong>ImageToPDF.online</strong>.</li>
              <li>Tap the upload zone and select <strong>Photo Library</strong>.</li>
              <li>iOS automatically transcodes selected HEIC photos into uncompressed raw canvas buffers in browser memory.</li>
              <li>Arrange the order of your pages, pick standard A4 or US Letter, and tap <strong>Convert to PDF</strong>.</li>
              <li>Tap <strong>Download</strong> and save directly into your Apple <strong>Files</strong> app or iCloud Drive.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black">
            Method 2: Converting HEIC Files on Windows 10 & 11
          </h2>
          <p>
            If you transferred <code>.heic</code> photos from your phone to a Windows PC via USB or AirDrop:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Drag your photos directly into our converter in Google Chrome or Microsoft Edge.</li>
            <li>Reorder thumbnails, adjust margins, and compile into a unified PDF.</li>
            <li>Because all processing runs in your browser memory, your private photos never get uploaded to third-party cloud servers.</li>
          </ul>
        </section>

        {/* iPhone Camera Setting Tip */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Bonus Tip: Set iPhone to Capture JPEG by Default
          </h2>
          <p>
            If you frequently take photos of paper documents, bills, and receipts, you can tell iOS to save new photos in standard JPEG:
          </p>
          <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-2xl p-5 text-xs sm:text-sm text-gray-800 space-y-2 not-prose">
            <div className="flex items-center gap-2 font-bold text-[#4D4AE8]">
              <Info className="w-4 h-4" />
              <span>iOS Settings Walkthrough</span>
            </div>
            <p>
              Open <strong>Settings</strong> &gt; <strong>Camera</strong> &gt; <strong>Formats</strong> &gt; Select <strong>&quot;Most Compatible&quot;</strong>. Your camera will now capture standard JPEG photos that convert effortlessly into PDF.
            </p>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Ready to Convert Your Photos?</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Merge your camera roll photos into clean, high-resolution PDF documents today.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Open Free Converter
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides" className="text-gray-500 hover:text-black font-medium">
          ← Back to All Guides
        </Link>
        <Link href="/guides/how-to-reduce-pdf-file-size-without-losing-quality" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: PDF File Size Optimization <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

