import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ConverterApp } from '@/components/converter/ConverterApp';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/structured-data';
import { Shield, Zap, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'Image to PDF Converter – Free, Secure & High Quality',
  description: 'Convert any image (JPG, PNG, WEBP) to PDF online in seconds. Free, high-resolution output with custom page sizes, margins, and 100% browser privacy.',
  alternates: {
    canonical: 'https://imagetopdf.online/image-to-pdf',
  },
};

const FAQS = [
  {
    question: 'What image formats can I convert to PDF?',
    answer: 'ImageToPDF.online supports all major image formats, including JPG, JPEG, PNG, and WEBP. You can combine different image formats in a single conversion.',
  },
  {
    question: 'How do I rearrange the image order?',
    answer: 'Once your images are uploaded, simply click and drag the thumbnail cards to change their order, or use the move left/right arrows.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, 100%. All processing occurs locally in your browser. No files are transferred to any external server.',
  },
];

export default function ImageToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Image to PDF', item: 'https://imagetopdf.online/image-to-pdf' },
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
          Image to PDF
        </h1>
      </div>

      {/* Main Tool Interface */}
      <ConverterApp toolName="Image to PDF" />

      {/* Clean Non-Intrusive Display Ad */}
      <div className="w-full max-w-full overflow-hidden">
        <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="auto" />
      </div>

      {/* How it Works */}
      <section className="space-y-6 pt-8 border-t border-gray-100">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert Images to PDF?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            '1. Upload your images',
            '2. Arrange them in order',
            '3. Customize PDF settings',
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
          Why Use ImageToPDF.online?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">100% Client Privacy</h3>
            <p className="text-sm text-gray-500">Your documents never touch a remote server. Total protection for confidential files.</p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Lightning Fast</h3>
            <p className="text-sm text-gray-500">Conversions finish in less than 2 seconds, eliminating slow upload bottlenecks.</p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 space-y-2">
            <FileText className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">A4, Letter & Fit</h3>
            <p className="text-sm text-gray-500">Full control over standard paper dimensions, margins, and portrait/landscape orientations.</p>
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
          <Link href="/png-to-pdf">
            <Button variant="outline" size="sm">PNG to PDF</Button>
          </Link>
          <Link href="/webp-to-pdf">
            <Button variant="outline" size="sm">WEBP to PDF</Button>
          </Link>
          <Link href="/tools">
            <Button variant="secondary" size="sm">View All 15+ Tools</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
