import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getBreadcrumbSchema } from '@/lib/seo/structured-data';
import {
  Palette,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
  Printer,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Color Profiles in PDF: Understanding RGB vs CMYK for Printing Photos',
  description:
    'Learn why colors look different on screens versus printed paper. Discover how RGB and CMYK color spaces work when converting photos and documents to PDF.',
  alternates: {
    canonical: 'https://imagetopdf.online/guides/color-profiles-rgb-vs-cmyk-in-pdf',
  },
};

export default function ColorProfilesRgbVsCmykGuidePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', item: 'https://imagetopdf.online' },
    { name: 'Guides', item: 'https://imagetopdf.online/guides' },
    { name: 'Color Profiles: RGB vs CMYK in PDF', item: 'https://imagetopdf.online/guides/color-profiles-rgb-vs-cmyk-in-pdf' },
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
        <span className="text-gray-900 font-semibold truncate">RGB vs CMYK Color Profiles</span>
      </nav>

      {/* Title & Metadata */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="brand">Prepress & Design</Badge>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 7 min read
          </span>
          <span className="text-xs text-gray-400">• Updated November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Color Profiles in PDF: Understanding RGB vs CMYK for Print & Screen
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Have you ever converted a vibrant photo or graphic design into a PDF, printed it on a commercial laser printer, and wondered why the electric blues and vivid greens appeared noticeably duller? The reason lies in fundamental color science: the difference between RGB and CMYK.
        </p>
      </header>

      {/* Body Content */}
      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            The Physics of Color: Additive vs Subtractive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="p-6 bg-white border border-gray-200 rounded-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4D4AE8]">Screen Display Model</span>
              <h3 className="font-bold text-lg text-black">RGB (Additive Color)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Computer monitors, smartphones, and televisions generate colors by emitting light from red, green, and blue sub-pixels. When all three colors are combined at full intensity, they produce pure white light. Because screens emit light directly into your eyes, RGB can display an extraordinarily broad palette of neon and hyper-saturated hues.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Physical Print Model</span>
              <h3 className="font-bold text-lg text-black">CMYK (Subtractive Color)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Printers do not emit light; they deposit physical ink onto paper. Sunlight or room light bounces off the paper, and the ink absorbs (subtracts) specific wavelengths. The four primary inks used are Cyan, Magenta, Yellow, and Key (Black). When combined, physical inks absorb light to create darker shades.
              </p>
            </div>
          </div>
        </section>

        {/* Gamut Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Why Color Shifts Happen: Gamut Mismatch
          </h2>
          <p>
            The &quot;gamut&quot; is the total range of colors a system can physically produce. The standard sRGB color space covers roughly 35% of all colors visible to human eyesight. In contrast, standard commercial CMYK print gamuts (such as SWOP or ISO 12647) cover only about 20% to 25%.
          </p>
          <div className="not-prose overflow-x-auto bg-white border border-gray-200 rounded-3xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-bold text-gray-700">Property</th>
                  <th className="py-3 px-4 font-bold text-[#4D4AE8]">RGB (Screens & Digital)</th>
                  <th className="py-3 px-4 font-bold text-emerald-700">CMYK (Physical Print)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Color Spectrum</td>
                  <td className="py-3 px-4 text-gray-600">Wide gamut (Over 16.7 million colors)</td>
                  <td className="py-3 px-4 text-gray-600">Narrower print gamut (~thousands of physical ink mixes)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Vivid / Neon Hues</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">Vibrant and luminous</td>
                  <td className="py-3 px-4 text-amber-600 font-semibold">Rendered as closest muted ink tone</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Native Camera Format</td>
                  <td className="py-3 px-4 text-emerald-600 font-bold">All phone cameras capture in sRGB / Display P3</td>
                  <td className="py-3 px-4 text-gray-600">Requires RIP translation by printer hardware</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Recommended Use in PDF</td>
                  <td className="py-3 px-4 text-gray-600">Digital submission, email, web viewing</td>
                  <td className="py-3 px-4 text-gray-600">Commercial offset press & high-end print brochures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Best Practices for Converting Photos to PDF for Printing
          </h2>
          <div className="space-y-3 not-prose">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">1. Use Standard sRGB for Universal Balance:</strong>
                <span className="text-xs text-gray-600">
                  ImageToPDF.online preserves sRGB color maps. When modern office laser printers or photo labs open your PDF, their Raster Image Processors (RIP) handle the RGB-to-CMYK conversion with smooth color gradients.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">2. Avoid Ultra-Saturated Neon Highlights:</strong>
                <span className="text-xs text-gray-600">
                  If you are designing certificates, portfolios, or graphics, select rich natural tones rather than maximum-brightness neon shades that will shift when printed.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-black text-sm block">3. Pair with High Resolution (300 DPI):</strong>
                <span className="text-xs text-gray-600">
                  Accurate color means little if the print is pixelated. Check our <Link href="/guides/best-image-resolution-for-pdf-printing" className="text-[#4D4AE8] font-bold underline">DPI Print Guide</Link> to ensure crisp reproduction.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-[#D7CDFC]/25 border border-[#C4B5FD] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-black">Convert Your Photos to Clean PDF Now</h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Preserve natural colors and sharp document clarity with our 100% free, private browser converter.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Open Free Converter
          </Button>
        </Link>
      </div>

      {/* Footer Nav */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <Link href="/guides/pdf-a-archival-standards-explained" className="text-gray-500 hover:text-black font-medium">
          ← Previous: PDF/A Archival Standards
        </Link>
        <Link href="/guides" className="text-[#4D4AE8] font-bold hover:underline flex items-center gap-1">
          Back to Knowledge Hub <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

