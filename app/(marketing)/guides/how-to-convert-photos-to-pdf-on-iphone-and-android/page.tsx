import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Smartphone,
  CheckCircle2,
  Apple,
  ArrowRight,
  Clock,
  Shield,
  RotateCw,
  ChevronRight,
  Download,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Convert Photos to PDF on iPhone & Android (No Apps Needed)',
  description:
    'Convert pictures directly from your mobile camera roll to PDF on iPhone, iPad, and Android without downloading sketchy third-party apps.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/how-to-convert-photos-to-pdf-on-iphone-and-android',
  },
};

export default function MobileConversionGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'Convert Photos to PDF on Mobile', item: 'https://imagetopdf.online/guides/how-to-convert-photos-to-pdf-on-iphone-and-android' },
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
        <span className="text-gray-900 font-semibold truncate">Mobile Photo to PDF Guide</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Mobile Guide</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 5 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          How to Convert Photos to PDF on iPhone & Android Without Installing Apps
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Need to turn phone pictures into an official PDF document on the go? You do not need to download sketchy scanner apps that flood your screen with intrusive ads or charge expensive recurring subscriptions. Here is how to convert photos straight from your mobile browser.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Why Mobile Scanner Apps Are Often a Trap
          </h2>
          <p>
            When users search the App Store or Google Play Store for &quot;photo to PDF&quot;, they are commonly met with applications that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Force users into weekly or annual auto-renewing subscriptions (often \$40–\$60 per year).</li>
            <li>Stamp ugly watermarks or logos onto your official documents unless you upgrade.</li>
            <li>Track device identifiers and upload photo metadata to third-party ad brokers.</li>
          </ul>
          <p>
            Because modern mobile browsers support WebAssembly and HTML5 Canvas, <strong>ImageToPDF.online runs directly in Safari, Chrome, and Samsung Internet</strong> with zero app installations required.
          </p>
        </section>

        {/* Platform Walkthroughs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black">
            Platform Walkthroughs: iPhone & Android
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            {/* iPhone Walkthrough */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-black">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-black">On iPhone & iPad (Safari / Chrome)</h3>
              <ol className="text-xs sm:text-sm text-gray-600 space-y-3 list-decimal pl-5">
                <li>Open <strong>Safari</strong> and visit <code>imagetopdf.online</code>.</li>
                <li>Tap <strong>&quot;Browse Files&quot;</strong> and choose <strong>Photo Library</strong>.</li>
                <li>Tap multiple photos to select them in bulk, then tap <strong>Add</strong>.</li>
                <li>Use the 90° rotate button to fix any sideways camera shots.</li>
                <li>Tap <strong>Convert to PDF</strong> and then <strong>Download</strong>.</li>
                <li>Tap the Share icon in Safari to save to the <strong>Files</strong> app or email directly.</li>
              </ol>
            </div>

            {/* Android Walkthrough */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-black">On Android (Chrome / Samsung Internet)</h3>
              <ol className="text-xs sm:text-sm text-gray-600 space-y-3 list-decimal pl-5">
                <li>Open <strong>Google Chrome</strong> and navigate to <code>imagetopdf.online</code>.</li>
                <li>Tap the upload zone and select <strong>Media picker / Files</strong>.</li>
                <li>Hold and select multiple JPG, PNG, or WEBP photos.</li>
                <li>Drag thumbnail cards to arrange the desired document order.</li>
                <li>Tap <strong>Convert to PDF</strong>.</li>
                <li>The PDF is saved directly to your phone&apos;s <strong>Downloads</strong> folder instantly.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Cellular Data Benefits */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Save Mobile Cellular Data on the Go
          </h2>
          <p>
            When traveling on limited mobile data plans, uploading 50 megabytes of high-resolution camera photos to a cloud server consumes significant bandwidth. Because ImageToPDF.online processes files locally inside your phone&apos;s browser memory, <strong>zero megabytes of your personal photos are uploaded over mobile networks</strong>.
          </p>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Try Mobile Conversion Now</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          No app downloads, no subscriptions, and 100% private conversion on your phone.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Start Converting Photos
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/image-formats-compared-jpg-vs-png-vs-webp" className="text-gray-500 hover:text-black font-medium">
          ← Previous: Format Comparison
        </Link>
        <Link href="/guides" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Back to Knowledge Hub <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

