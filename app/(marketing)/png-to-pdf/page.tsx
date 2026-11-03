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
  FileText,
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'PNG to PDF Converter – Convert PNG to PDF with Crisp Transparency',
  description:
    'Convert PNG images, screenshots, and transparent graphics into PDF documents online. Lossless crisp text, custom borders, and 100% private browser processing.',
  alternates: {
    canonical: 'https://imagetopdf.online/png-to-pdf',
  },
};

const FAQS = [
  {
    question: 'How are transparent PNG backgrounds handled in the PDF?',
    answer:
      'Transparent PNG alpha channels are cleanly blended onto standard white PDF page backgrounds. This prevents the unsightly black solid box or distorted checkerboard artifact that often occurs on poorly built converters.',
  },
  {
    question: 'Is PNG better than JPG for converting screenshots and contracts?',
    answer:
      'Yes! PNG uses lossless DEFLATE compression. This means crisp pixel edges, UI screenshots, vector logos, graphs, and tiny typography remain completely free of the ringing and mosquito noise artifacts common in JPEG.',
  },
  {
    question: 'Can I combine multiple PNG files into one organized PDF?',
    answer:
      'Yes. You can select multiple PNGs simultaneously. You can drag and drop thumbnail cards to reorder the pages, rotate any orientation by 90 degrees, and merge them into a single file.',
  },
  {
    question: 'What page sizes are supported for PNG conversion?',
    answer:
      'You can select standard A4, A3, US Letter, US Legal, or "Fit to Image". Selecting "Fit to Image" creates PDF pages that match the exact aspect ratio and dimensions of your PNG screenshots.',
  },
  {
    question: 'Are my private diagrams or financial screenshots uploaded anywhere?',
    answer:
      'No. ImageToPDF.online operates with 100% client-side WebAssembly and HTML5 Canvas technology. Your PNG files are processed locally inside your web browser RAM and never leave your device.',
  },
  {
    question: 'Does converting large PNG files slow down my browser?',
    answer:
      'Our conversion engine uses hardware-accelerated 2D canvas drawing contexts that rapidly compress and embed image streams, compiling multi-megabyte PNG files into a clean PDF in seconds.',
  },
  {
    question: 'Can I mix PNG files with JPG or WEBP photos?',
    answer:
      'Yes! If you have a mixture of PNG diagrams and JPG camera photos, use our All Image to PDF tool to seamlessly combine both into one unified document.',
  },
];

export default function PngToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'PNG to PDF', item: 'https://imagetopdf.online/png-to-pdf' },
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
        <Badge variant="brand">Lossless PNG Specialist</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Convert PNG to PDF Online Free
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Convert transparent PNG graphics, software screenshots, charts, and digital signatures into crisp, print-ready PDF files with 100% client-side privacy.
        </p>
      </div>

      {/* Main Tool Interface */}
      <div className="w-full">
        <ConverterApp
          toolName="PNG to PDF"
          acceptedFormats={['.png']}
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
            <Sparkles className="w-5 h-5 text-[#4D4AE8]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">
              Lossless Clarity & Alpha Transparency Handling
            </h2>
            <p className="text-xs text-gray-500">Why PNG is the preferred format for digital documentation</p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-gray-700 space-y-4 leading-relaxed">
          <p>
            Unlike photographic formats like JPEG, PNG (Portable Network Graphics) relies on lossless compression based on the LZ77 and Huffman coding algorithms (DEFLATE). This ensures that sharp high-contrast transitions—such as black text on white backgrounds, code syntax screenshots, architectural diagrams, and digital signatures—are preserved with exact mathematical precision.
          </p>
          <p>
            One common headache when converting transparent PNGs with traditional software is that transparency channels are mistakenly converted to black solid boxes. ImageToPDF.online applies intelligent alpha channel compositing against standard ISO-white canvas layers, ensuring logos, watermarks, and isolated graphics blend naturally into clean PDF pages.
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
                <td className="py-2.5 px-4">.png (PNG-8, PNG-24, PNG-32 with full alpha)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Transparency Handling</td>
                <td className="py-2.5 px-4 text-emerald-600 font-semibold">Clean white-layer alpha blend (Zero black boxes)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Page Size Profiles</td>
                <td className="py-2.5 px-4">A4, A3, US Letter, US Legal, Fit to Image</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Data Security</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">100% In-Browser Memory (No Cloud Uploads)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How it Works */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert PNG to PDF in 5 Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: '01', text: 'Select or drag your PNG images into the converter.' },
            { step: '02', text: 'Reorder thumbnail cards to establish page sequence.' },
            { step: '03', text: 'Rotate sideways diagrams 90° if needed.' },
            { step: '04', text: 'Choose page size (A4, Letter, or Fit to Image).' },
            { step: '05', text: 'Click Convert to PDF and download instantly with no watermarks.' },
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
          Why Use ImageToPDF.online for Your PNGs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Total Privacy Guarantee</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Confidential UI mockups, business charts, and payroll screenshots remain on your device. Zero cloud exposure.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Lossless Vector Sharpness</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Maintains razor-sharp edges on typography, wireframes, and signatures without unsightly JPEG compression haze.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Seamless Transparency</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Cleanly composites transparent backgrounds into solid white PDF paper backgrounds without dark halos.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Guides Strip */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#4D4AE8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Technical Analysis</span>
          </div>
          <h4 className="font-bold text-black text-base">JPG vs PNG vs WEBP: Deep Format Comparison</h4>
          <p className="text-xs text-gray-600">Understand the exact differences in compression algorithms, transparency, and file size.</p>
        </div>
        <Link href="/guides/image-formats-compared-jpg-vs-png-vs-webp" className="shrink-0">
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            Read Comparison
          </Button>
        </Link>
      </div>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Frequently Asked Questions About Converting PNG to PDF
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
          <Link href="/webp-to-pdf">
            <Button variant="outline" size="sm">WEBP to PDF</Button>
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
