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
  Layers,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'Merge Images to PDF – Combine JPG, PNG & WEBP Online Free',
  description:
    'Combine and merge multiple JPG, PNG, and WEBP photos into a single organized PDF document online for free. Custom page sizes, drag-and-drop reordering, and 100% browser privacy.',
  alternates: {
    canonical: 'https://imagetopdf.online/image-to-pdf',
  },
};

const FAQS = [
  {
    question: 'Can I combine different image formats (JPG, PNG, WEBP) in the same PDF?',
    answer:
      'Yes! ImageToPDF.online seamlessly accepts mixed format batches. You can upload high-resolution JPG camera photos alongside transparent PNG screenshots and modern WEBP graphics in a single conversion session.',
  },
  {
    question: 'How do I rearrange the order of pages before downloading?',
    answer:
      'Once your pictures are uploaded, each image appears on a thumbnail card. Simply click and drag any card to reorder pages. The final PDF will follow the exact visual order shown on your screen.',
  },
  {
    question: 'How do I rotate photos that are sideways or upside-down?',
    answer:
      'Every thumbnail card features a dedicated 90-degree rotate button. Click it to adjust orientation clockwise until the image appears correctly aligned.',
  },
  {
    question: 'What page sizes and margin options can I choose?',
    answer:
      'You can select standard A4, A3, US Letter, US Legal, or "Fit to Image". Margin options include None (full bleed), Small, Medium, or Large for clean, printable borders.',
  },
  {
    question: 'Are my uploaded files and generated PDFs private and secure?',
    answer:
      'Yes, 100%. All processing occurs locally within your web browser using HTML5 Canvas and WebAssembly. Your photos never leave your device and are never uploaded to any cloud server.',
  },
  {
    question: 'Will merging dozens of photos reduce image quality?',
    answer:
      'No. When you select high quality, original image pixel resolution is preserved. Text, signatures, and document fine details remain crisp and clear for printing.',
  },
  {
    question: 'Can I convert images to PDF on mobile devices?',
    answer:
      'Yes! ImageToPDF.online works smoothly on iPhone, iPad, Android smartphones, and tablets directly in Safari or Chrome without installing apps.',
  },
];

export default function ImageToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Image to PDF', item: 'https://imagetopdf.online/image-to-pdf' },
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
        <Badge variant="brand">Multi-Format Batch Specialist</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Merge Images to PDF Online Free
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Combine multi-format image bundles into a single, beautifully organized PDF document. Reorder pages, fix sideways rotations, and customize page margins with 100% browser privacy.
        </p>
      </div>

      {/* Main Tool Interface */}
      <div className="w-full">
        <ConverterApp toolName="Image to PDF" />
      </div>

      {/* Clean Non-Intrusive Display Ad */}
      <div className="w-full max-w-full overflow-hidden">
        <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="auto" />
      </div>

      {/* In-Depth Technical & Practical Guide */}
      <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center">
            <Layers className="w-5 h-5 text-[#4D4AE8]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">
              Consolidating Multi-Format Image Collections
            </h2>
            <p className="text-xs text-gray-500">Creating unified, standardized documents from heterogeneous files</p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-gray-700 space-y-4 leading-relaxed">
          <p>
            In modern workflows, document components often arrive in disjointed formats: a paper agreement photographed as a JPG on an iPhone, a digital signature saved as a transparent PNG from desktop software, and analytical charts exported as WEBP from a browser. Transmitting these as separate email attachments creates confusion and portal submission failures.
          </p>
          <p>
            Our multi-image converter normalizes these disparate image formats into a single, cohesive PDF document. You can set uniform page dimensions (like international standard A4 or North American US Letter), apply symmetrical margin spacing, and fix camera rotation errors before compiling.
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
                <td className="py-2.5 px-4">JPG, JPEG, PNG, WEBP (Batch mixing fully supported)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Reordering & Sorting</td>
                <td className="py-2.5 px-4">Interactive drag-and-drop thumbnail workspace</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Page Size Profiles</td>
                <td className="py-2.5 px-4">A4 (ISO 216), A3, US Letter, US Legal, Fit to Image</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Data Protection</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">100% In-Browser Memory (Zero Server Uploads)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How it Works */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Combine Images into One PDF in 5 Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: '01', text: 'Drag and drop your photos into the converter in any order.' },
            { step: '02', text: 'Drag thumbnail cards to arrange the desired page sequence.' },
            { step: '03', text: 'Use the 90° rotate tool to align sideways camera photos.' },
            { step: '04', text: 'Select document size (A4, Letter) and margin width.' },
            { step: '05', text: 'Click Convert to PDF and download your clean document immediately.' },
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
          Why Choose ImageToPDF.online?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Complete Client Privacy</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Your sensitive receipts, diplomas, and ID cards remain safely in your browser RAM. No files are ever sent to remote cloud servers.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Instant Browser Processing</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Experience lightning-fast compiling with zero upload queues or download waiting times, even on large batches.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Zero Watermarks Ever</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Every PDF you generate is 100% clean, professional, and ready for official submission to employers or government portals.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Guides Strip */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#4D4AE8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Tutorial Guide</span>
          </div>
          <h4 className="font-bold text-black text-base">How to Combine Multiple Images Into One PDF</h4>
          <p className="text-xs text-gray-600">Step-by-step masterclass on reordering, rotations, and margin alignment.</p>
        </div>
        <Link href="/guides/how-to-combine-multiple-images-into-one-pdf" className="shrink-0">
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            Read Guide
          </Button>
        </Link>
      </div>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Frequently Asked Questions About Merging Images to PDF
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
          <Link href="/webp-to-pdf">
            <Button variant="outline" size="sm">WEBP to PDF</Button>
          </Link>
          <Link href="/guides">
            <Button variant="secondary" size="sm">Knowledge Hub</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
