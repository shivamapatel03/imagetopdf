import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  FileText,
  Image as ImageIcon,
  Minimize2,
  Maximize2,
  Crop,
  Layers,
  Scissors,
  FileArchive,
  RotateCw,
  Lock,
  Unlock,
  Hash,
  ArrowRight,
  BookOpen,
  Smartphone,
  Printer,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All PDF & Image Productivity Tools – ImageToPDF.online',
  description:
    'Explore our complete suite of PDF and image productivity tools and technical guides. Convert JPG, PNG, WEBP to PDF, merge, format, and organize documents with 100% privacy.',
  alternates: {
    canonical: 'https://imagetopdf.online/tools',
  },
};

interface ToolCard {
  name: string;
  description: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  ctaText: string;
  category: 'Live Converter' | 'Workflow Guide';
}

const ALL_TOOLS: ToolCard[] = [
  {
    name: 'Image to PDF Converter',
    description: 'Convert and merge multi-format JPG, PNG, and WEBP pictures into an organized, high-quality PDF document.',
    icon: FileText,
    href: '/image-to-pdf',
    badge: 'Most Popular',
    ctaText: 'Open Converter',
    category: 'Live Converter',
  },
  {
    name: 'JPG to PDF Converter',
    description: 'Transform JPEG and JPG photos, receipts, and scans into multi-page PDF documents with customizable page margins and orientation.',
    icon: ImageIcon,
    href: '/jpg-to-pdf',
    badge: 'Fast',
    ctaText: 'Open Converter',
    category: 'Live Converter',
  },
  {
    name: 'PNG to PDF Converter',
    description: 'Convert PNG graphics, UI screenshots, and transparent diagrams into crisp PDFs with lossless text clarity and zero black artifacts.',
    icon: ImageIcon,
    href: '/png-to-pdf',
    badge: 'Lossless',
    ctaText: 'Open Converter',
    category: 'Live Converter',
  },
  {
    name: 'WEBP to PDF Converter',
    description: 'Convert modern WEBP web graphics and product pictures into universally viewable PDF documents instantly.',
    icon: ImageIcon,
    href: '/webp-to-pdf',
    badge: 'Modern Web',
    ctaText: 'Open Converter',
    category: 'Live Converter',
  },
  {
    name: 'Batch Image Merger Workflow',
    description: 'Learn how to sequence, rotate, and combine 20+ multi-format photos into a single neat document ready for email or portals.',
    icon: Layers,
    href: '/guides/how-to-combine-multiple-images-into-one-pdf',
    badge: 'Tutorial',
    ctaText: 'Read Workflow',
    category: 'Workflow Guide',
  },
  {
    name: 'DPI & Print Resolution Guide',
    description: 'Calculate exact pixel dimensions for 300 DPI printing on standard ISO A4 and US Letter sizes to prevent blurry documents.',
    icon: Printer,
    badge: 'Print Optimization',
    href: '/guides/best-image-resolution-for-pdf-printing',
    ctaText: 'Read Guide',
    category: 'Workflow Guide',
  },
  {
    name: 'Mobile Phone Conversion Guide',
    description: 'Convert pictures straight from iOS Safari or Android Chrome camera rolls to PDF without downloading suspicious third-party apps.',
    icon: Smartphone,
    badge: 'Mobile Walkthrough',
    href: '/guides/how-to-convert-photos-to-pdf-on-iphone-and-android',
    ctaText: 'Read Guide',
    category: 'Workflow Guide',
  },
  {
    name: 'Client-Side Privacy Architecture',
    description: 'Discover how in-browser WebAssembly and HTML5 Canvas eliminate data risks by keeping your files off remote servers.',
    icon: Shield,
    badge: 'Security Guide',
    href: '/guides/client-side-vs-cloud-pdf-conversion',
    ctaText: 'Read Guide',
    category: 'Workflow Guide',
  },
  {
    name: 'Image Formats Comparison',
    description: 'A deep technical breakdown of JPEG lossy compression, PNG lossless vectors, and WEBP efficiency for document creation.',
    icon: BookOpen,
    badge: 'Technical Analysis',
    href: '/guides/image-formats-compared-jpg-vs-png-vs-webp',
    ctaText: 'Read Analysis',
    category: 'Workflow Guide',
  },
];

export default function ToolsPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="brand">Toolbox & Directory</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          All PDF & Image Productivity Tools
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Explore our suite of specialized client-side converters, step-by-step tutorials, and print optimization guides. 100% free with complete browser privacy.
        </p>
      </div>

      {/* Directory Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black tracking-tight">Active Tools & Workflows</h2>
            <p className="text-xs text-gray-500">Select any tool to launch or explore its detailed operational guide</p>
          </div>
          <span className="text-xs font-semibold text-[#4D4AE8] bg-[#D7CDFC]/40 px-3 py-1 rounded-full">
            All Links Verified
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 hover:border-[#4D4AE8] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xs transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#4D4AE8] group-hover:bg-[#D7CDFC]/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {tool.badge && (
                      <span className="text-[11px] font-bold text-[#4D4AE8] bg-[#D7CDFC]/30 border border-[#C4B5FD] px-2.5 py-0.5 rounded-full">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      {tool.category}
                    </span>
                    <h3 className="font-bold text-lg text-black group-hover:text-[#4D4AE8] transition-colors leading-snug">
                      <Link href={tool.href}>{tool.name}</Link>
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <Link href={tool.href}>
                    <Button
                      variant={tool.category === 'Live Converter' ? 'primary' : 'outline'}
                      size="sm"
                      className="w-full justify-center"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {tool.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Architecture Banner */}
      <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <Badge variant="brand">Zero Server Uploads</Badge>
          <h3 className="text-2xl font-bold text-black tracking-tight">
            How Every Tool in Our Suite Protects Your Privacy
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every converter and processing routine on ImageToPDF.online runs client-side in your web browser using HTML5 Canvas and WebAssembly. Your photos and generated documents are never transmitted across the internet to external cloud storage.
          </p>
          <div className="pt-2">
            <Link href="/about" className="text-xs font-bold text-[#4D4AE8] hover:underline flex items-center gap-1">
              Learn more about our architecture <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <div className="w-16 h-16 rounded-3xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center shrink-0">
          <Shield className="w-8 h-8 text-[#4D4AE8]" />
        </div>
      </section>
    </div>
  );
}
