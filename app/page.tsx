import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ConverterApp } from '@/components/converter/ConverterApp';
import { AdBanner } from '@/components/ads/AdBanner';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getFaqSchema, getHowToSchema } from '@/lib/seo/structured-data';
import {
  ShieldCheck,
  Zap,
  Smartphone,
  ArrowRight,
  Layers,
  FileText,
  CheckCircle2,
  XCircle,
  Sparkles,
  Lock,
  Globe,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Image to PDF Online – Convert JPG, PNG & WEBP to PDF Free (No Limits)',
  description:
    'Convert image to PDF online for free in seconds. Combine multiple JPG, PNG, and WEBP photos into a high-quality PDF document. 100% private, no signup, zero watermarks, and no file limits.',
  keywords: [
    'image to pdf online',
    'image to pdf',
    'convert image to pdf online',
    'free image to pdf online',
    'convert image to pdf',
    'jpg to pdf',
    'png to pdf',
    'webp to pdf',
    'combine images to pdf online',
    'merge images to pdf',
    'free image to pdf converter',
    'photo to pdf online',
    'picture to pdf converter',
    'jpeg to pdf online',
    'turn pictures into pdf',
    'combine multiple photos into one pdf',
  ],
  alternates: {
    canonical: 'https://imagetopdf.online',
  },
  openGraph: {
    title: 'Image to PDF Online – Convert JPG, PNG & WEBP to PDF Free',
    description: 'Convert JPG, PNG, and WEBP images to PDF in your browser. 100% free, private, and instant with zero file limits.',
    url: 'https://imagetopdf.online',
    siteName: 'ImageToPDF.online',
    type: 'website',
    images: [
      {
        url: 'https://imagetopdf.online/image.png',
        width: 1200,
        height: 630,
        alt: 'Image to PDF Online - Free Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to PDF Online – Free JPG & PNG to PDF Converter',
    description: 'Convert JPG, PNG, and WEBP images to PDF online for free in seconds. 100% private, zero watermarks.',
    images: ['https://imagetopdf.online/image.png'],
  },
};

const FAQ_ITEMS = [
  {
    question: 'How do I convert an image to PDF online for free?',
    answer:
      'To convert an image to PDF online, drag and drop your JPG, PNG, or WEBP photos into the upload area on ImageToPDF.online. Arrange your files in the order you want them to appear, select your preferred page orientation and margins, and click "Convert to PDF". Your PDF is generated in your browser and ready to download immediately.',
  },
  {
    question: 'Can I combine multiple JPG, PNG, and WEBP images into one single PDF?',
    answer:
      'Yes! You can upload multiple images simultaneously, mix different formats (e.g. JPG, PNG, and WEBP together), reorder the pages with drag-and-drop, rotate any photo 90 degrees, and merge them all into a single organized PDF file.',
  },
  {
    question: 'Is ImageToPDF.online really 100% free with no limits?',
    answer:
      'Yes, ImageToPDF.online is completely free forever. There are zero subscription paywalls, no hidden charges, and no daily conversion limits. You can convert unlimited images with maximum high-resolution quality.',
  },
  {
    question: 'Are my photos and personal documents private and secure?',
    answer:
      'Yes, your privacy is 100% guaranteed. Unlike other online converters that upload your personal pictures to cloud servers, ImageToPDF.online processes all image transformations locally inside your own browser using HTML5 Canvas and WebAssembly. Your photos never leave your device.',
  },
  {
    question: 'Will converting images to PDF reduce the quality or resolution?',
    answer:
      'No. ImageToPDF.online maintains the original resolution and sharpness of your images. When you select high quality, images are rendered with crisp fidelity suitable for high-resolution printing, legal documents, and official submissions.',
  },
  {
    question: 'Does this image to PDF converter work on mobile phones (iPhone & Android)?',
    answer:
      'Yes! ImageToPDF.online is fully responsive and optimized for touchscreens on iPhones, iPads, Android smartphones, and tablets. You can select photos straight from your camera roll or photo gallery without downloading any apps.',
  },
  {
    question: 'Can I convert images to PDF without watermarks?',
    answer:
      'Yes. Every PDF created on ImageToPDF.online is 100% watermark-free, clean, and professional. We never stamp logos or branding onto your converted documents.',
  },
  {
    question: 'What page sizes and margin settings are available?',
    answer:
      'You can choose from standard ISO page sizes including A4, A3, US Letter, and US Legal, or select "Fit to Image" to match the exact dimensions of your photos. You can also customize margins (None, Small, Medium, Large) and page orientation (Portrait or Landscape).',
  },
  {
    question: 'How do I rearrange image order and rotate orientation?',
    answer:
      'After uploading your images, you can drag and drop any thumbnail card to change the page sequence. Each image card also includes a quick 90-degree rotate button to fix sideways or upside-down photos before compiling.',
  },
  {
    question: 'Do I need to install any software or register an account?',
    answer:
      'No installation and no registration required. You can convert images to PDF right now from any modern web browser on Windows, Mac, Linux, iOS, or Android.',
  },
];

export default function HomePage() {
  const faqSchema = getFaqSchema(FAQ_ITEMS);
  const howToSchema = getHowToSchema();

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full min-w-0 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* 1. HERO CONVERTER SECTION */}
      <section className="w-full max-w-4xl mx-auto pt-4 sm:pt-6 pb-6 px-4 sm:px-6 lg:px-8 text-center min-w-0">
        {/* Exact-Match Target Keyword H1 */}
        <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-black tracking-tight leading-tight mb-2 max-w-full">
          Image to PDF Online{' '}
          <span className="bg-[#D7CDFC] px-2.5 py-0.5 rounded-xl inline-block text-black mt-1 sm:mt-0 text-xl sm:text-4xl lg:text-[44px]">
            Free & Fast
          </span>
        </h1>

        {/* Keyword-Rich Subheading */}
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed mb-4 px-2">
          Convert JPG, PNG, and WEBP images to PDF online for free in seconds. Combine multiple photos into one document with custom page sizes, margins, and 100% browser privacy.
        </p>

        {/* DIRECT UPLOAD CONVERTER COMPONENT (Above the fold) */}
        <div id="converter" className="w-full max-w-full mx-auto scroll-mt-20 min-w-0">
          <ConverterApp
            toolName="Image to PDF"
            acceptedFormats={['.jpg', '.jpeg', '.png', '.webp']}
          />
        </div>

        {/* Workflow Showcase Illustration (Above Ad) */}
        <div className="pt-6 sm:pt-10 pb-2 w-full max-w-5xl mx-auto px-2 sm:px-4 flex justify-center">
          <Image
            src="/image.png"
            alt="Image to PDF conversion workflow - photos into organized PDF document"
            width={1600}
            height={500}
            priority
            className="w-full max-w-4xl h-auto object-contain mx-auto select-none pointer-events-none"
          />
        </div>

        {/* Clean Ad Slot 1 */}
        <div className="pt-6 w-full max-w-3xl mx-auto overflow-hidden">
          <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="auto" />
        </div>
      </section>

      {/* 2. DEDICATED TOOL CLUSTER (INTERNAL LINKING FOR HIGH SEO AUTHORITY) */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Quick Converters</span>
              <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight mt-1">
                Explore Specialized PDF Converters
              </h2>
            </div>
            <Link href="/tools" className="text-xs font-bold text-[#4D4AE8] hover:underline flex items-center gap-1 mt-2 sm:mt-0">
              View all PDF tools <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/jpg-to-pdf"
              className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] hover:bg-[#D7CDFC]/10 transition-all group"
            >
              <h3 className="font-bold text-black text-base group-hover:text-[#4D4AE8]">
                JPG to PDF
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Turn JPEG & JPG photos into clean, shareable PDF documents.
              </p>
            </Link>

            <Link
              href="/png-to-pdf"
              className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] hover:bg-[#D7CDFC]/10 transition-all group"
            >
              <h3 className="font-bold text-black text-base group-hover:text-[#4D4AE8]">
                PNG to PDF
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Preserve sharp transparency and high-resolution vector artwork.
              </p>
            </Link>

            <Link
              href="/webp-to-pdf"
              className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] hover:bg-[#D7CDFC]/10 transition-all group"
            >
              <h3 className="font-bold text-black text-base group-hover:text-[#4D4AE8]">
                WEBP to PDF
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Convert modern web graphics and screenshots into standard PDF files.
              </p>
            </Link>

            <Link
              href="/image-to-pdf"
              className="p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] hover:bg-[#D7CDFC]/10 transition-all group"
            >
              <h3 className="font-bold text-black text-base group-hover:text-[#4D4AE8]">
                Merge Images to PDF
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Combine multi-format image bundles into a single page-ordered PDF.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. TRUST & PERFORMANCE PILLARS */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="brand" className="mb-3">
            Why Choose ImageToPDF.online
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">
            The Fastest, Most Private Image to PDF Converter
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mb-12">
            Engineered with modern browser technologies so your documents are processed with maximum speed and zero cloud exposure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            {/* Trust Card 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">100% Client-Side Privacy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your images never touch an external server. Everything is rendered and merged directly inside your web browser memory, ensuring your sensitive receipts, contracts, and personal ID cards stay confidential.
              </p>
            </div>

            {/* Trust Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Instant Processing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Experience instantaneous conversions powered by optimized WebAssembly routines. No waiting in slow upload queues or waiting for email delivery links.
              </p>
            </div>

            {/* Trust Card 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Cross-Platform Friendly</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Works seamlessly on Windows, macOS, Linux, iOS (iPhone & iPad), and Android smartphones without requiring plugins, downloads, or software installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE (SEO POWERHOUSE: HIGHLIGHTS SUPERIOR VALUE & DWELl TIME) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="brand" className="mb-3">Comparison</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight mb-3">
            Why ImageToPDF.online Outperforms Other Converters
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
            See how our client-side, 100% free tool stands out against traditional cloud converters.
          </p>
        </div>

        {/* Mobile View: Clean Comparison Cards (Zero Horizontal Overflow) */}
        <div className="md:hidden space-y-3">
          {[
            {
              feature: 'Subscription Cost',
              us: '100% Free Forever',
              them: '₹299/mo or $12/mo paywalls',
            },
            {
              feature: 'Data Security & Privacy',
              us: '100% Client-Side (Zero Upload)',
              them: 'Uploaded to cloud servers',
            },
            {
              feature: 'Watermarks',
              us: 'Zero Watermarks',
              them: 'Forces watermark unless you pay',
            },
            {
              feature: 'File Size Limits',
              us: 'Unlimited (Device Dependent)',
              them: 'Capped at 5MB – 10MB',
            },
            {
              feature: 'Custom Page Layouts',
              us: 'A4, A3, Letter, Fit + Margins',
              them: 'Basic or locked behind premium',
            },
            {
              feature: 'Annoying Popups',
              us: 'Zero Popups or Overlays',
              them: 'Intrusive fullscreen modal takeovers',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-4 space-y-2.5">
              <p className="font-bold text-sm text-black">{item.feature}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] p-2.5 rounded-xl space-y-1">
                  <span className="font-extrabold text-[#4D4AE8] block text-[11px] uppercase tracking-wide">ImageToPDF</span>
                  <span className="font-bold text-emerald-700 block leading-tight">{item.us}</span>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-2.5 rounded-xl space-y-1 text-gray-500">
                  <span className="font-semibold text-gray-400 block text-[11px] uppercase tracking-wide">Others</span>
                  <span className="block leading-tight">{item.them}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Full Comparison Table */}
        <div className="hidden md:block bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xs">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="py-4 px-6 font-bold text-gray-700">Feature</th>
                <th className="py-4 px-6 font-extrabold text-[#4D4AE8] bg-[#D7CDFC]/30">ImageToPDF.online</th>
                <th className="py-4 px-6 font-medium text-gray-400">Other Online Converters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-4 px-6 font-semibold text-black">Subscription Cost</td>
                <td className="py-4 px-6 font-bold text-emerald-600 bg-[#D7CDFC]/15">100% Free Forever</td>
                <td className="py-4 px-6 text-gray-500">₹299/mo or $12/mo paywalls</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-black">Data Security & Privacy</td>
                <td className="py-4 px-6 font-bold text-emerald-600 bg-[#D7CDFC]/15">100% Client-Side (Zero Upload)</td>
                <td className="py-4 px-6 text-gray-500">Uploaded to unknown cloud servers</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-black">Watermarks</td>
                <td className="py-4 px-6 font-bold text-emerald-600 bg-[#D7CDFC]/15">Zero Watermarks</td>
                <td className="py-4 px-6 text-gray-500">Forces watermark unless you pay</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-black">File Size Limits</td>
                <td className="py-4 px-6 font-bold text-emerald-600 bg-[#D7CDFC]/15">Unlimited (Device Dependent)</td>
                <td className="py-4 px-6 text-gray-500">Capped at 5MB – 10MB</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-black">Custom Page Layouts</td>
                <td className="py-4 px-6 font-bold text-emerald-600 bg-[#D7CDFC]/15">A4, A3, Letter, Fit + Margins</td>
                <td className="py-4 px-6 text-gray-500">Basic or locked behind premium</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-black">Annoying Popups</td>
                <td className="py-4 px-6 font-bold text-emerald-600 bg-[#D7CDFC]/15">Zero Popups or Overlays</td>
                <td className="py-4 px-6 text-gray-500">Intrusive fullscreen modal takeovers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION (HOWTO SCHEMA COMPLIANT) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-3">Step-by-Step Guide</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            How to Convert Image to PDF Online?
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            Converting your photos into an organized, high-definition PDF document takes only five simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              step: '01',
              title: 'Upload Images',
              desc: 'Drag and drop your JPG, PNG, or WEBP photos or browse from your device.',
            },
            {
              step: '02',
              title: 'Arrange Order',
              desc: 'Drag thumbnails to reorder pages and rotate sideways photos.',
            },
            {
              step: '03',
              title: 'Customize Settings',
              desc: 'Select page size (A4, Letter), orientation, and margin spacing.',
            },
            {
              step: '04',
              title: 'Convert to PDF',
              desc: 'Our engine compiles your photos into a crisp PDF in seconds.',
            },
            {
              step: '05',
              title: 'Download PDF',
              desc: 'Save your completed PDF document with zero watermarks.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:border-black transition-colors"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#4D4AE8] bg-[#D7CDFC]/40 px-2.5 py-1 rounded-lg">
                  STEP {item.step}
                </span>
                <h3 className="text-lg font-bold text-black mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Ad Slot 2 (Mid-content display banner) */}
      <div className="w-full max-w-4xl mx-auto px-4 my-2 overflow-hidden">
        <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="auto" />
      </div>

      {/* 6. DEEP SEO KNOWLEDGE GUIDE & TOPICAL AUTHORITY SECTION */}
      <section className="py-16 sm:py-24 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="brand" className="mb-3">
              Comprehensive Guide
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
              Everything You Need to Know About Converting Images to PDF Online
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether you are preparing a job application, compiling receipts for taxes, or organizing homework assignments, ImageToPDF.online makes converting photos into clean, professional PDF documents fast, private, and effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Guide Card 1 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Why Convert Images to PDF Online?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Raw image formats like JPG and PNG can vary in resolution, layout, and display behavior across different devices. Converting images to PDF consolidates multiple loose photos into a single, standardized, easily shareable file that opens identically on any smartphone, tablet, or desktop computer.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Preserves original aspect ratios and sharp print resolution</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reduces clutter by combining dozens of pictures into 1 document</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accepted by all official email and online submission portals</span>
                </li>
              </ul>
            </div>

            {/* Guide Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                100% Client-Side Privacy: Zero Cloud Uploads
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Most online converters transmit your files to remote cloud servers to process them. This presents serious security risks for sensitive documents such as passport scans, driver licenses, invoices, or medical records.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                ImageToPDF.online is built entirely on modern browser technologies (HTML5 Canvas and WebAssembly). Every conversion happens locally in your device memory—your personal data never travels across the internet or touches an external database.
              </p>
            </div>

            {/* Guide Card 3 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Supported Formats: JPG, PNG, WEBP & Photos
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our converter supports seamless mixing of all popular web and camera image formats in a single batch:
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <Link
                  href="/jpg-to-pdf"
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] transition-colors"
                >
                  <span className="font-bold text-[#4D4AE8] block mb-0.5">JPG / JPEG</span>
                  <span className="text-gray-500">Camera photos, scanned papers, and receipts</span>
                </Link>
                <Link
                  href="/png-to-pdf"
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] transition-colors"
                >
                  <span className="font-bold text-[#4D4AE8] block mb-0.5">PNG</span>
                  <span className="text-gray-500">Lossless charts, screenshots, and graphics</span>
                </Link>
                <Link
                  href="/webp-to-pdf"
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] transition-colors"
                >
                  <span className="font-bold text-[#4D4AE8] block mb-0.5">WEBP</span>
                  <span className="text-gray-500">Modern web images and compressed exports</span>
                </Link>
                <Link
                  href="/image-to-pdf"
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#4D4AE8] transition-colors"
                >
                  <span className="font-bold text-[#4D4AE8] block mb-0.5">Multi-Format</span>
                  <span className="text-gray-500">Mix and match any photo bundle</span>
                </Link>
              </div>
            </div>

            {/* Guide Card 4 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#D7CDFC] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-[#4D4AE8]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Convert Photos to PDF on iPhone & Android
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                You do not need to install bulky third-party apps from the App Store or Google Play Store. Simply visit ImageToPDF.online in Safari, Chrome, or any mobile browser, tap to choose pictures straight from your photo gallery or camera roll, and convert them instantly on your phone.
              </p>
              <ul className="text-xs text-gray-500 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Works directly in mobile Safari, Chrome, Samsung Internet & Firefox</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rotate sideways camera photos 90° with a single tap</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant download directly to your mobile Files or Downloads folder</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Popular Use Cases Pill Grid */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-6">
              Popular Real-World Use Cases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-sm text-black block mb-1">Students & Academics</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Combine pictures of handwritten notes, chalkboard sketches, and textbook diagrams into one organized homework assignment.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-sm text-black block mb-1">Job Applications</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Merge scanned certificates, diploma photos, identity verification, and portfolio work into a single neat submission file.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-sm text-black block mb-1">Invoices & Expenses</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Compile snapshots of paper receipts, hotel bills, and signed supplier purchase orders into a monthly PDF report for accounting.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-sm text-black block mb-1">Official & Visa Portals</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Format utility bills, passport pictures, and signed forms into standard ISO A4 PDF documents ready for government portals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (FAQPAGE SCHEMA COMPLIANT) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <Badge variant="brand" className="mb-3">Got Questions?</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-500 max-w-md mx-auto">
            Everything you need to know about converting images to PDF online with ImageToPDF.online.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
