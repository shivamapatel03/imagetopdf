import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ConverterApp } from '@/components/converter/ConverterApp';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { Shield, Zap, FileText } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'PNG to PDF Converter – Convert PNG to PDF with Crisp Transparency',
  description: 'Convert PNG images and transparent graphics into PDF documents online. Lossless crisp text, custom borders, and 100% private browser processing.',
  alternates: {
    canonical: 'https://imagetopdf.online/png-to-pdf',
  },
};

const FAQS = [
  {
    question: 'How are transparent PNG backgrounds handled in the PDF?',
    answer: 'Transparent PNG areas are cleanly placed onto white PDF pages without black artifact blocks or jagged transparency outlines.',
  },
  {
    question: 'Is PNG better than JPG for converting screenshots and contracts?',
    answer: 'Yes! PNG uses lossless compression, meaning fine lines, tiny contract text, and UI screenshots will look noticeably crisper than in JPG.',
  },
  {
    question: 'Can I reorder multiple PNGs before compiling?',
    answer: 'Yes. You can drag and drop your PNG images into any preferred order before clicking Convert to PDF.',
  },
];

export default function PngToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'PNG to PDF', item: 'https://imagetopdf.online/png-to-pdf' },
  ]);

  return (
    <div className="w-full max-w-5xl mx-auto pt-3 sm:pt-5 pb-12 px-4 sm:px-6 lg:px-8 space-y-8 min-w-0 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero - Just Heading */}
      <div className="text-center max-w-2xl mx-auto pt-2 pb-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
          PNG to PDF
        </h1>
      </div>

      {/* Main Tool Interface */}
      <ConverterApp
        toolName="PNG to PDF"
        acceptedFormats={['.png']}
      />

      {/* Clean Non-Intrusive Display Ad */}
      <div className="w-full max-w-full overflow-hidden">
        <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="auto" />
      </div>

      {/* How it Works */}
      <section className="space-y-6 pt-8 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert PNG to PDF?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            '1. Upload your PNGs',
            '2. Sort page sequence',
            '3. Choose margin & size',
            '4. Click Convert to PDF',
            '5. Download your PDF',
          ].map((text, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 font-semibold text-sm text-gray-800">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Why Convert PNG with ImageToPDF.online?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <FileText className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Crisp Text & Diagrams</h3>
            <p className="text-sm text-gray-500">Zero compression artifacts around text, icons, vectors, and blueprint lines.</p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Private & Confidential</h3>
            <p className="text-sm text-gray-500">Perfect for confidential invoices, medical scans, and contracts—processed on-device.</p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Instant Download</h3>
            <p className="text-sm text-gray-500">No waiting in lines or entering emails. Download your PDF immediately.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Related Tools</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/jpg-to-pdf">
            <Button variant="outline" size="sm">JPG to PDF</Button>
          </Link>
          <Link href="/webp-to-pdf">
            <Button variant="outline" size="sm">WEBP to PDF</Button>
          </Link>
          <Link href="/image-to-pdf">
            <Button variant="outline" size="sm">All Image to PDF</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
