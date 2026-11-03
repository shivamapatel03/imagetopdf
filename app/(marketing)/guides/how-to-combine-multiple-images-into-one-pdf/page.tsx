import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Clock,
  RotateCw,
  Move,
  ChevronRight,
  Sliders,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Combine Multiple Images Into One PDF Document (Full Guide)',
  description:
    'Step-by-step tutorial on merging multiple JPG, PNG, and WEBP pictures into a single organized PDF. Master drag-and-drop reordering, 90-degree rotations, and margin alignment.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/how-to-combine-multiple-images-into-one-pdf',
  },
};

export default function CombineMultipleImagesGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'Combine Multiple Images Into One PDF', item: 'https://imagetopdf.online/guides/how-to-combine-multiple-images-into-one-pdf' },
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
        <span className="text-gray-900 font-semibold truncate">Combine Multiple Images Into One PDF</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Productivity</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 5 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          How to Combine Multiple Images Into One Single PDF Document
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Need to compile twenty loose photos of paperwork, book pages, or product shots into a single presentable document? Merging multi-image collections into a standardized PDF creates an organized, easily shareable file.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Why Batch Merging Images Solves Workflow Headaches
          </h2>
          <p>
            Sending twenty separate image attachments over email often causes confusion, inbox clutter, and failed deliveries due to attachment size limits. Compiling photos into a single PDF offers key advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><strong>Sequential Page Order:</strong> The recipient reads through pages exactly in the chronological order you intended.</li>
            <li><strong>Single File Transmission:</strong> Easy to attach to a single email, upload to cloud drives, or submit through formal portal forms.</li>
            <li><strong>Mixed Formats Supported:</strong> You can merge a JPG photo, a transparent PNG logo, and a modern WEBP screenshot into one unified PDF without converting each format first.</li>
          </ul>
        </section>

        {/* Workflow Steps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black">
            The Optimal 4-Step Merging Workflow
          </h2>

          <div className="space-y-4 not-prose">
            <div className="p-6 bg-white border border-gray-200 rounded-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4D4AE8] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-bold text-black text-base">Select All Images Simultaneously</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 pl-8 leading-relaxed">
                On desktop, hold down <code>Ctrl</code> (Windows) or <code>Cmd</code> (Mac) and click multiple image files, or drag an entire folder into the upload dropzone. On smartphones, tap &quot;Select Multiple&quot; in your photo library.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4D4AE8] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-bold text-black text-base">Fine-Tune the Page Sequence</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 pl-8 leading-relaxed">
                Images are loaded onto an interactive visual board. Click and drag any card to reorder pages. Ensure cover pages, invoices, or introductory pages are at the front.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4D4AE8] text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="font-bold text-black text-base">Rotate Sideways & Upside-Down Images</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 pl-8 leading-relaxed">
                Smartphones frequently write flawed EXIF orientation tags. Use the built-in 90° rotation button on any misaligned photo thumbnail to ensure consistent reading orientation.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4D4AE8] text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="font-bold text-black text-base">Set Document Sizing and Margins</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 pl-8 leading-relaxed">
                Select <strong>A4</strong> or <strong>US Letter</strong> for print consistency, or choose <strong>Fit to Image</strong> if your photos have wildly different shapes and you prefer each page to tightly hug the photo boundary.
              </p>
            </div>
          </div>
        </section>

        {/* Practical tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Pro Tips for Organizing Large Batches (20+ Images)
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">Pre-number files before dragging:</strong>
                <span className="text-xs text-gray-600">
                  Naming your files sequentially (e.g., <code>01-page.jpg</code>, <code>02-page.jpg</code>) ensures ImageToPDF.online automatically organizes them in perfect order upon upload.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">Choose a consistent margin:</strong>
                <span className="text-xs text-gray-600">
                  Selecting a &quot;Small&quot; or &quot;Medium&quot; margin prevents photos from bleeding to the absolute edge of the paper, protecting content from physical hole punches and printer margins.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Combine Your Images to PDF Now</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Drag and drop your photos into our free multi-format converter and create a neat PDF in seconds.
        </p>
        <Link href="/image-to-pdf" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Open Multi-Image Converter
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/client-side-vs-cloud-pdf-conversion" className="text-gray-500 hover:text-black font-medium">
          ← Previous: Client-Side vs Cloud
        </Link>
        <Link href="/guides/image-formats-compared-jpg-vs-png-vs-webp" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Next: Format Comparison <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

