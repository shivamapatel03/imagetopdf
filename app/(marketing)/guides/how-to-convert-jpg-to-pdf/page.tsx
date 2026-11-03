import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
  Printer,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Convert JPG to PDF: Step-by-Step Guide (Free & Private)',
  description:
    'Master converting single or multiple JPG images into clean, print-ready PDF files. Learn about layout choices, page margins, 300 DPI preservation, and private browser processing.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/how-to-convert-jpg-to-pdf',
  },
};

export default function HowToConvertJpgToPdfGuide() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'How to Convert JPG to PDF', item: 'https://imagetopdf.online/guides/how-to-convert-jpg-to-pdf' },
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
        <span className="text-gray-900 font-semibold truncate">How to Convert JPG to PDF</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Tutorial</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 6 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          How to Convert JPG to PDF: The Complete Step-by-Step Guide
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Whether you are submitting visa documents, archiving business receipts, or compiling homework assignments, turning JPEG photos into a clean, unified PDF is essential. Here is the definitive tutorial on doing it efficiently without losing quality or exposing your files to third-party cloud servers.
        </p>
      </header>

      {/* Quick Tool Callout */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-black text-base">Want to convert your JPGs right now?</h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Use our 100% free client-side tool with instant browser processing and zero watermarks.
          </p>
        </div>
        <Link href="/jpg-to-pdf" className="shrink-0">
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            Open JPG to PDF Tool
          </Button>
        </Link>
      </div>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Why Convert JPG to PDF Instead of Sending Raw Images?
          </h2>
          <p>
            The JPEG format (commonly sporting either a <code>.jpg</code> or <code>.jpeg</code> file extension) is the global standard for photographic imagery produced by smartphones and digital cameras. However, transmitting individual JPG files carries notable drawbacks:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>Formatting Inconsistencies:</strong> Different operating systems and image viewers render JPGs with varied default aspect ratios, often cropping edges on mobile screens.
            </li>
            <li>
              <strong>Uncontrolled Page Breaks:</strong> When printing loose JPGs, operating system print dialogues frequently scale pictures unpredictably across multiple sheets.
            </li>
            <li>
              <strong>Messaging Compression:</strong> Platforms like WhatsApp, Slack, or email services regularly downsample raw JPG files, making tiny receipt numbers or contract signatures unreadable.
            </li>
            <li>
              <strong>Submission Portal Rejections:</strong> University portals, HR applicant tracking systems (ATS), and government visa applications almost universally reject raw images and demand a single, multi-page PDF document.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Step-by-Step Walkthrough: Converting JPG to PDF in Your Browser
          </h2>
          <div className="space-y-6 not-prose">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4D4AE8] bg-[#D7CDFC]/50 px-2 py-0.5 rounded">
                STEP 1: SELECT YOUR SOURCE JPGS
              </span>
              <h3 className="font-bold text-black text-base mt-2">Upload or Drag Your Files</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Navigate to the <Link href="/jpg-to-pdf" className="text-[#4D4AE8] font-medium underline">JPG to PDF converter</Link>. You can drag and drop multiple JPG photos at once or click &quot;Browse Files&quot;. Because processing executes locally in your browser memory, there are no file upload queues or bandwidth delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4D4AE8] bg-[#D7CDFC]/50 px-2 py-0.5 rounded">
                STEP 2: ARRANGE AND ROTATE PAGES
              </span>
              <h3 className="font-bold text-black text-base mt-2">Establish Proper Reading Sequence</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Review the thumbnail gallery. Drag individual cards to rearrange the page sequence. If a photo taken on your smartphone was captured in sideways landscape orientation, click the <strong>90° Rotate button</strong> until it displays upright.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4D4AE8] bg-[#D7CDFC]/50 px-2 py-0.5 rounded">
                STEP 3: CONFIGURE PAGE SIZE & MARGINS
              </span>
              <h3 className="font-bold text-black text-base mt-2">Customize Print Dimensions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Choose between standard ISO <strong>A4</strong> (ideal for European and Asian submissions), <strong>US Letter</strong> (for North American forms), or <strong>Fit to Image</strong> (which preserves each photo&apos;s exact physical pixel dimensions). Set margins to &quot;Small&quot; or &quot;Medium&quot; for a clean binder border.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-xs font-mono font-bold text-[#4D4AE8] bg-[#D7CDFC]/50 px-2 py-0.5 rounded">
                STEP 4: COMPILE AND DOWNLOAD
              </span>
              <h3 className="font-bold text-black text-base mt-2">Instant Client-Side Generation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Click &quot;Convert to PDF&quot;. The internal engine draws your images into an ISO 32000-compliant document binary in under one second. Click &quot;Download PDF&quot; to save the file to your device with zero watermarks.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Key Recommendations for High Print Quality (300 DPI)
          </h2>
          <p>
            When preparing documents for physical printing, resolution is critical. Standard computer screens display images at 72 to 96 pixels per inch (PPI). However, professional laser and inkjet printers require <strong>300 dots per inch (DPI)</strong> to avoid jagged text.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 not-prose space-y-3">
            <h4 className="font-bold text-black text-sm">Recommended Pixel Dimensions for PDF Print:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="font-bold text-black block">Standard A4 Document (300 DPI)</span>
                <span>2,480 × 3,508 pixels</span>
              </div>
              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="font-bold text-black block">US Letter Document (300 DPI)</span>
                <span>2,550 × 3,300 pixels</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 pt-1">
              Read our dedicated guide on{' '}
              <Link href="/guides/best-image-resolution-for-pdf-printing" className="text-[#4D4AE8] underline font-semibold">
                Best Image Resolution & DPI Settings for PDF Printing
              </Link>{' '}
              for deeper technical details.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Security Checklist: Why In-Browser Conversion Matters
          </h2>
          <p>
            Many free web utilities transmit your sensitive files to untrusted cloud servers. If your JPG photos depict financial statements, national ID cards, medical bills, or personal contracts, cloud uploads present severe data exposure risks. ImageToPDF.online operates 100% locally in your browser memory—no files are ever sent to an external server.
          </p>
          <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs sm:text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Your images remain protected on your hardware at all times. Once the browser tab is closed, all working memory is instantly discarded.
            </span>
          </div>
        </section>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides" className="text-gray-500 hover:text-black font-medium">
          ← Back to All Guides
        </Link>
        <Link href="/guides/best-image-resolution-for-pdf-printing" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: DPI & Print Resolution Guide <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

