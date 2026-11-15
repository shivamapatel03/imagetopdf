import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Minimize2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Shield,
  FileArchive,
  ChevronRight,
  Sliders,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Reduce PDF File Size Without Losing Quality (Full Guide)',
  description:
    'Discover proven methods to shrink large PDF documents for email and portal submissions while keeping signatures, text, and photos sharp and legible.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/how-to-reduce-pdf-file-size-without-losing-quality',
  },
};

export default function ReducePdfFileSizeGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'Reduce PDF File Size', item: 'https://imagetopdf.online/guides/how-to-reduce-pdf-file-size-without-losing-quality' },
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
        <span className="text-gray-900 font-semibold truncate">Reduce PDF File Size Guide</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Optimization Guide</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 7 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          How to Reduce PDF File Size Without Losing Image Quality
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Job application boards, tax filing systems, and college admission portals frequently enforce strict document upload limits—often capping PDFs at 2MB, 5MB, or 10MB. Here is how to compress your PDFs efficiently without turning fine text into an unreadable blur.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Why Do Image-Based PDFs Become So Heavy?
          </h2>
          <p>
            Modern smartphone cameras capture images at 12 to 48 megapixels. A single raw capture can easily weigh 5MB to 12MB. If you merge 10 uncompressed camera photos into a PDF, the resulting document can easily exceed 80 megabytes—far larger than Gmail&apos;s 25MB attachment ceiling.
          </p>
          <p>
            The secret to smart PDF compression is understanding which file elements carry unnecessary digital bloat:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Excessive DPI:</strong> Smartphone cameras capture photos at resolutions far higher than what computer displays or desktop printers can render. Downsampling to 150–200 DPI cuts file size by up to 75% with zero perceptible loss in text readability.</li>
            <li><strong>Embedded Metadata:</strong> Raw camera captures store geotags, EXIF camera data, and lens profiles. Stripping this metadata during conversion saves extra kilobytes and protects personal location privacy.</li>
            <li><strong>Color Space Redundancy:</strong> Converting black-and-white documents photographed in 24-bit full RGB into grayscale canvas elements cuts color payload substantially.</li>
          </ul>
        </section>

        {/* Compression Strategy Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Balancing Resolution vs File Size Caps
          </h2>
          <div className="not-prose overflow-x-auto bg-white border border-gray-200 rounded-3xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold text-gray-700">Target Scenario</th>
                  <th className="py-3 px-4 font-bold text-gray-700">Target Resolution</th>
                  <th className="py-3 px-4 font-bold text-gray-700">Average 5-Page Size</th>
                  <th className="py-3 px-4 font-bold text-gray-700">Legibility Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Official Print & Archival</td>
                  <td className="py-3 px-4 text-gray-600">300 DPI</td>
                  <td className="py-3 px-4 text-gray-600">8 MB – 15 MB</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">100% Crisp Print Quality</td>
                </tr>
                <tr className="bg-[#D7CDFC]/15">
                  <td className="py-3 px-4 font-bold text-[#4D4AE8]">Standard Portal Submission (2MB – 5MB)</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">150 – 200 DPI</td>
                  <td className="py-3 px-4 text-gray-700 font-medium">1.5 MB – 3.2 MB</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Excellent for Screen & Print</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Email Quick Preview (&lt;1MB)</td>
                  <td className="py-3 px-4 text-gray-600">96 – 120 DPI</td>
                  <td className="py-3 px-4 text-gray-600">400 KB – 850 KB</td>
                  <td className="py-3 px-4 text-amber-600 font-semibold">Good on Screen, Draft on Paper</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Checklist */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Step-by-Step Optimization Checklist in ImageToPDF.online
          </h2>
          <div className="space-y-3 not-prose">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">1. Crop Away Irrelevant Background:</strong>
                <span className="text-xs text-gray-600">
                  When photographing papers, crop out desk surfaces and shadows before compiling. Less unnecessary image area means fewer pixels to encode.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">2. Standardize Page Dimensions:</strong>
                <span className="text-xs text-gray-600">
                  Select standard <strong>A4</strong> or <strong>US Letter</strong> in the converter settings to prevent oversized billboard canvas dimensions.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">3. In-Browser Local Processing:</strong>
                <span className="text-xs text-gray-600">
                  Because ImageToPDF.online optimizes and renders via HTML5 Canvas in device memory, compression executes locally without lossy re-encoding artifacts.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Compress and Convert to PDF Now</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Create lightweight, beautifully formatted PDF documents ready for any portal upload limit.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Start Converting Files
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/how-to-convert-heic-to-pdf" className="text-gray-500 hover:text-black font-medium">
          ← Previous: HEIC to PDF Guide
        </Link>
        <Link href="/guides/pdf-a-archival-standards-explained" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: PDF/A Archival Standards <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

