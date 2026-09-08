import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ConverterApp } from '@/components/converter/ConverterApp';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { Shield, Zap, CheckCircle2 } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'JPG to PDF Converter – Convert JPEG to PDF Online Free',
  description: 'Convert JPG and JPEG images to PDF files online in seconds. Merge multiple JPGs into one PDF, adjust margins, and download in high resolution.',
  alternates: {
    canonical: 'https://imagetopdf.online/jpg-to-pdf',
  },
};

const FAQS = [
  {
    question: 'How do I convert JPG images to PDF without losing quality?',
    answer: 'ImageToPDF.online preserves the original resolution and color fidelity of your JPEG images. When choosing "Maximum" or "High" quality, photos retain full print clarity.',
  },
  {
    question: 'Can I combine multiple JPG files into a single document?',
    answer: 'Yes! Simply select multiple JPGs at once. You can drag and drop them to set the page order and merge them into one organized PDF.',
  },
  {
    question: 'Are JPEG and JPG the exact same format?',
    answer: 'Yes. JPG and JPEG refer to the exact same image format standard. Both are fully supported by ImageToPDF.online.',
  },
];

export default function JpgToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'JPG to PDF', item: 'https://imagetopdf.online/jpg-to-pdf' },
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
          JPG to PDF
        </h1>
      </div>

      {/* Main Tool Interface */}
      <ConverterApp
        toolName="JPG to PDF"
        acceptedFormats={['.jpg', '.jpeg']}
      />

      {/* Clean Non-Intrusive Display Ad */}
      <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="horizontal" />

      {/* How it Works */}
      <section className="space-y-6 pt-8 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert JPG to PDF?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            '1. Upload your JPGs',
            '2. Arrange page order',
            '3. Pick page size (A4)',
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
          Benefits of Converting JPG to PDF
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Secure & Private</h3>
            <p className="text-sm text-gray-500">Sensitive receipts and ID scans remain on your device. Zero server transmission.</p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Batch Merging</h3>
            <p className="text-sm text-gray-500">Combine dozens of JPGs into a single cohesive document ready for email or printing.</p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Preserves Quality</h3>
            <p className="text-sm text-gray-500">Maintains high DPI resolution so your printed documents look clean and sharp.</p>
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
          <Link href="/png-to-pdf">
            <Button variant="outline" size="sm">PNG to PDF</Button>
          </Link>
          <Link href="/webp-to-pdf">
            <Button variant="outline" size="sm">WEBP to PDF</Button>
          </Link>
          <Link href="/image-to-pdf">
            <Button variant="outline" size="sm">All Image to PDF</Button>
          </Link>
          <Link href="/tools">
            <Button variant="secondary" size="sm">View All Tools</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
