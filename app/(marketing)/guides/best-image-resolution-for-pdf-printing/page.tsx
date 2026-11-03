import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Printer,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Image Resolution & DPI for PDF Printing (72 vs 150 vs 300 DPI)',
  description:
    'Learn how DPI and PPI affect printed PDF quality. Discover optimal pixel dimensions for A4 and US Letter sizes to prevent pixelated, blurry text.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/best-image-resolution-for-pdf-printing',
  },
};

export default function DpiGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'Best Image Resolution for PDF Printing', item: 'https://imagetopdf.online/guides/best-image-resolution-for-pdf-printing' },
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
        <span className="text-gray-900 font-semibold truncate">Best Image Resolution for PDF Printing</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Technical Guide</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 8 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Best Image Resolution & DPI Settings for PDF Printing
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Have you ever converted a photo to PDF, printed it out, and found the text disappointingly blurry and pixelated? The culprit is almost always mismatched DPI. Here is everything you need to know about setting image resolution for flawless physical printing.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Understanding the Difference: DPI vs PPI
          </h2>
          <p>
            While frequently used interchangeably, <strong>PPI (Pixels Per Inch)</strong> and <strong>DPI (Dots Per Inch)</strong> refer to two distinct stages in the document pipeline:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>PPI (Pixels Per Inch):</strong> Measures digital pixel density on a display screen. Modern retina smartphones and high-DPI computer monitors display between 200 and 460 PPI.
            </li>
            <li>
              <strong>DPI (Dots Per Inch):</strong> Measures physical ink droplets deposited by a printer on physical paper. Because multiple microscopic physical droplets of cyan, magenta, yellow, and black ink are required to reproduce a single colored digital pixel, printing requires a far higher density than screen display.
            </li>
          </ul>
        </section>

        {/* DPI Benchmarks Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            DPI Benchmarks: Which Resolution Should You Use?
          </h2>
          <div className="not-prose overflow-x-auto bg-white border border-gray-200 rounded-3xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold text-gray-700">DPI Level</th>
                  <th className="py-3 px-4 font-bold text-gray-700">Primary Purpose</th>
                  <th className="py-3 px-4 font-bold text-gray-700">Print Quality</th>
                  <th className="py-3 px-4 font-bold text-gray-700">File Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">72 – 96 DPI</td>
                  <td className="py-3 px-4 text-gray-600">Web display & email preview</td>
                  <td className="py-3 px-4 text-rose-600 font-semibold">Poor (Noticeably Pixelated)</td>
                  <td className="py-3 px-4 text-gray-600">Very Small (&lt;200 KB)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">150 DPI</td>
                  <td className="py-3 px-4 text-gray-600">Internal drafts & office memos</td>
                  <td className="py-3 px-4 text-amber-600 font-semibold">Acceptable (Readable text)</td>
                  <td className="py-3 px-4 text-gray-600">Moderate (~800 KB)</td>
                </tr>
                <tr className="bg-[#D7CDFC]/15">
                  <td className="py-3 px-4 font-bold text-[#4D4AE8]">300 DPI</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">Standard commercial print & contracts</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Optimal (Crisp, sharp lines)</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">Balanced (~2–4 MB)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">600 DPI</td>
                  <td className="py-3 px-4 text-gray-600">Fine art photography & archival scans</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">Maximum Clarity</td>
                  <td className="py-3 px-4 text-gray-600">Large (&gt;10 MB)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pixel Dimensions Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Pixel Dimensions for Standard Paper Sizes at 300 DPI
          </h2>
          <p>
            To compute the exact digital resolution your photo needs, use the straightforward mathematical equation:
          </p>
          <div className="bg-gray-100 p-4 rounded-xl font-mono text-xs sm:text-sm text-center text-gray-800">
            Pixel Dimensions = (Physical Dimension in Inches) × (Target DPI)
          </div>
          <p>
            For reference, standard international and North American page sizes require the following exact pixel matrices at 300 DPI:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">ISO Standard</span>
              <h4 className="font-bold text-base text-black">A4 Size (8.27 × 11.69 inches)</h4>
              <p className="text-xs text-gray-500">Requires <strong>2,480 × 3,508 pixels</strong> at 300 DPI</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">North American</span>
              <h4 className="font-bold text-base text-black">US Letter (8.5 × 11.0 inches)</h4>
              <p className="text-xs text-gray-500">Requires <strong>2,550 × 3,300 pixels</strong> at 300 DPI</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Large Format</span>
              <h4 className="font-bold text-base text-black">A3 Size (11.69 × 16.54 inches)</h4>
              <p className="text-xs text-gray-500">Requires <strong>3,508 × 4,960 pixels</strong> at 300 DPI</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-2xl space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Legal Forms</span>
              <h4 className="font-bold text-base text-black">US Legal (8.5 × 14.0 inches)</h4>
              <p className="text-xs text-gray-500">Requires <strong>2,550 × 4,200 pixels</strong> at 300 DPI</p>
            </div>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Practical Tips: Preserving Image Resolution When Converting
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">Always upload original camera files:</strong>
                <span className="text-xs text-gray-600">
                  Do not screenshot photos in your phone gallery. Screenshots drop the resolution down to your display&apos;s current viewport dimensions.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">Select &quot;High Quality&quot; in ImageToPDF.online:</strong>
                <span className="text-xs text-gray-600">
                  Our client-side converter uses uncompressed canvas buffers to ensure fine typography, signatures, and stamps remain razor sharp.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">Avoid multiple re-compression cycles:</strong>
                <span className="text-xs text-gray-600">
                  Saving a JPEG repeatedly accumulates DCT lossy compression artifacts. Convert directly from the raw capture to PDF.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Ready to Create High-Resolution PDFs?</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Test our client-side converter today with high print quality and customizable A4 or US Letter page sizing.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Open Converter Tool
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/how-to-convert-jpg-to-pdf" className="text-gray-500 hover:text-black font-medium">
          ← Previous: How to Convert JPG to PDF
        </Link>
        <Link href="/guides/client-side-vs-cloud-pdf-conversion" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: Client-Side vs Cloud Conversion <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

