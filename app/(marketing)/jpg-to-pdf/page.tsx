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
  CheckCircle2,
  FileText,
  Printer,
  ArrowRight,
  BookOpen,
  Sliders,
  Check,
} from 'lucide-react';
import { AdBanner } from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'JPG to PDF Converter – Convert JPEG to PDF Online Free (High Quality)',
  description:
    'Convert JPG and JPEG images to PDF files online in seconds. Merge multiple JPGs into one PDF, adjust margins, and download in high resolution with 100% browser privacy.',
  alternates: {
    canonical: 'https://imagetopdf.online/jpg-to-pdf',
  },
};

const FAQS = [
  {
    question: 'How do I convert JPG images to PDF without losing quality?',
    answer:
      'ImageToPDF.online preserves the original resolution and color fidelity of your JPEG images. When choosing "Maximum" or "High" quality, photos retain full print clarity at up to 300 DPI, making text on invoices and legal documents razor-sharp.',
  },
  {
    question: 'Can I combine multiple JPG files into a single document?',
    answer:
      'Yes! Simply select multiple JPGs at once. You can drag and drop them to set the page order, rotate sideways camera photos 90 degrees, and merge them all into one organized PDF file.',
  },
  {
    question: 'Are JPEG and JPG the exact same format?',
    answer:
      'Yes. JPG and JPEG refer to the exact same image format standard (Joint Photographic Experts Group). Older Windows operating systems required three-letter file extensions (.jpg), while newer platforms support .jpeg. Both are fully supported.',
  },
  {
    question: 'What page sizes and margin settings are available for JPGs?',
    answer:
      'You can choose standard international A4, A3, US Letter, US Legal, or "Fit to Image". Margins can be adjusted to None (borderless full bleed), Small, Medium, or Large to create neat margins for printing and hole punching.',
  },
  {
    question: 'Are my uploaded JPG photos secure and private?',
    answer:
      'Yes, 100%. All processing occurs locally within your web browser using HTML5 Canvas and WebAssembly. Your photos never leave your device and are never uploaded to any cloud server.',
  },
  {
    question: 'Can I convert JPG to PDF on my smartphone?',
    answer:
      'Absolutely. ImageToPDF.online works smoothly in mobile Safari (iOS), Google Chrome (Android), and other mobile browsers without requiring you to install any apps.',
  },
  {
    question: 'Is there a limit on how many JPGs I can convert?',
    answer:
      'No. There are no daily conversion quotas, no file quantity paywalls, and no watermarks added. You can convert as many JPG files as your device memory can handle.',
  },
];

export default function JpgToPdfPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'JPG to PDF', item: 'https://imagetopdf.online/jpg-to-pdf' },
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
        <Badge variant="brand">JPG & JPEG Specialist</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Convert JPG to PDF Online Free
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Easily turn JPEG photos, scanned documents, and paper receipts into an organized, high-definition PDF document. 100% private in-browser conversion with zero file limits.
        </p>
      </div>

      {/* Main Tool Interface */}
      <div className="w-full">
        <ConverterApp
          toolName="JPG to PDF"
          acceptedFormats={['.jpg', '.jpeg']}
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
            <FileText className="w-5 h-5 text-[#4D4AE8]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">
              Understanding JPEG to PDF Conversion
            </h2>
            <p className="text-xs text-gray-500">Why format transformation preserves document integrity</p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-gray-700 space-y-4 leading-relaxed">
          <p>
            The JPEG format uses lossy Discrete Cosine Transform (DCT) compression, making it ideal for continuous-tone photographic imagery. However, when multiple loose JPG photos are shared across different operating systems or messaging apps, they frequently suffer from uncoordinated aspect ratio scaling, downsampling compression, and unpredictable print page splits.
          </p>
          <p>
            Converting your JPG files into a standardized ISO 32000 PDF document solves these inconsistencies. PDF encapsulates each image inside a fixed vector coordinate system, guaranteeing that page dimensions (such as standard A4 or US Letter), margin spacing, and print resolutions remain identical on any monitor, tablet, or physical printer.
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
                <td className="py-2.5 px-4">.jpg, .jpeg, .jfif</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Page Size Profiles</td>
                <td className="py-2.5 px-4">A4 (ISO 216), A3, US Letter, US Legal, Fit to Image</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Orientation Control</td>
                <td className="py-2.5 px-4">Auto-detection, Portrait, Landscape, 90° manual rotation</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-semibold text-black">Privacy Protocol</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">100% Client-Side WebAssembly (Zero Server Transmission)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How it Works */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          How to Convert JPG to PDF in 5 Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: '01', text: 'Upload or drag your JPG photos into the conversion area.' },
            { step: '02', text: 'Drag thumbnail cards to arrange the exact page sequence.' },
            { step: '03', text: 'Rotate sideways camera photos 90° with one click.' },
            { step: '04', text: 'Select preferred page size (A4, Letter) and margin width.' },
            { step: '05', text: 'Click Convert to PDF and download instantly with zero watermarks.' },
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
          Why Use ImageToPDF.online for Your JPGs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Shield className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Confidential & Private</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Sensitive invoices, receipts, and ID cards remain safely in your browser RAM. No files are ever sent to remote cloud storage.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <Zap className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Instant Multi-Photo Merging</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Combine dozens of pictures into a single cohesive document ready for email submission or legal archiving.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-gray-200 bg-white space-y-2">
            <CheckCircle2 className="w-6 h-6 text-[#4D4AE8]" />
            <h3 className="font-bold text-lg text-black">Preserves Print Sharpness</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Maintains full 300 DPI resolution fidelity so fine text, contract numbers, and official signatures print crisp on paper.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Guides Strip */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#4D4AE8]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Recommended Reading</span>
          </div>
          <h4 className="font-bold text-black text-base">Mastering JPG to PDF: Layout, Margins & 300 DPI</h4>
          <p className="text-xs text-gray-600">Read our detailed tutorial on calculating resolution and configuring page margins for printing.</p>
        </div>
        <Link href="/guides/how-to-convert-jpg-to-pdf" className="shrink-0">
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            Read Tutorial
          </Button>
        </Link>
      </div>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
          Frequently Asked Questions About Converting JPG to PDF
        </h2>
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8">
          <Accordion items={FAQS} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Related Document Converters</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/png-to-pdf">
            <Button variant="outline" size="sm">PNG to PDF</Button>
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
