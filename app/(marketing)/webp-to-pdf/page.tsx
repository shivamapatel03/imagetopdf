import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ConverterApp } from '@/components/converter/ConverterApp';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { Shield, Zap } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'WEBP to PDF Converter – Convert Modern WEBP Images Online Free',
  description: 'Convert modern WEBP web images to PDF documents in high quality. Free, client-side, fast batch conversion with custom page layouts.',
  alternates: {
    canonical: 'https://imagetopdf.online/webp-to-pdf',
  },
};

const FAQS = [
  {
    question: 'Why convert WEBP images to PDF?',
    answer: 'Many desktop applications and printing devices still cannot open WEBP images directly. Converting them to PDF ensures universal compatibility on any machine or printer.',
  },
  {
    question: 'Are animated WEBP files supported?',
    answer: 'Our converter extracts and renders the primary high-resolution frame of any WEBP file into your PDF document.',
  },
  {
    question: 'Can I mix WEBP with JPG or PNG files?',
    answer: 'Yes! ImageToPDF.online automatically handles mixed collections of WEBP, JPG, and PNG files in a single PDF output.',
  },
];

export default function WebpToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'WEBP to PDF', item: 'https://imagetopdf.online/webp-to-pdf' },
  ]);

  return (
    <div className="pt-3 sm:pt-5 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
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
          WEBP to PDF
        </h1>
      </div>

      {/* Main Tool Interface */}
      <ConverterApp
        toolName="WEBP to PDF"
        acceptedFormats={['.webp']}
      />

      {/* Clean Non-Intrusive Display Ad */}
      <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="horizontal" />

      {/* How it Works */}
      <section className="space-y-6 pt-8 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert WEBP to PDF?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            '1. Upload WEBP files',
            '2. Arrange page order',
            '3. Select page settings',
            '4. Click Convert to PDF',
            '5. Download your PDF',
          ].map((text, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 font-semibold text-sm text-gray-800">
              {text}
            </div>
          ))}
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
          <Link href="/png-to-pdf">
            <Button variant="outline" size="sm">PNG to PDF</Button>
          </Link>
          <Link href="/image-to-pdf">
            <Button variant="outline" size="sm">All Image to PDF</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
