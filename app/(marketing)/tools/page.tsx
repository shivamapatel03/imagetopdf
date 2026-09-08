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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All PDF & Image Productivity Tools – ImageToPDF.online',
  description: 'Explore our complete suite of PDF and image productivity tools. Convert JPG, PNG, WEBP to PDF, merge, compress, and organize documents with 100% privacy.',
  alternates: {
    canonical: 'https://imagetopdf.online/tools',
  },
};

interface ToolItem {
  name: string;
  description: string;
  icon: React.ElementType;
  href: string;
  status: 'available' | 'coming-soon';
  badge?: string;
}

const IMAGE_TOOLS: ToolItem[] = [
  {
    name: 'Image to PDF',
    description: 'Convert multiple JPG, PNG, and WEBP images into an organized, high-quality PDF document.',
    icon: FileText,
    href: '/image-to-pdf',
    status: 'available',
    badge: 'Popular',
  },
  {
    name: 'JPG to PDF',
    description: 'Transform JPG and JPEG photos into multi-page PDF files with customizable page margins and orientation.',
    icon: ImageIcon,
    href: '/jpg-to-pdf',
    status: 'available',
    badge: 'Fast',
  },
  {
    name: 'PNG to PDF',
    description: 'Convert PNG graphics and transparent screenshots into crisp PDFs with zero compression blur.',
    icon: ImageIcon,
    href: '/png-to-pdf',
    status: 'available',
    badge: 'Lossless',
  },
  {
    name: 'WEBP to PDF',
    description: 'Convert modern WEBP web images into universally viewable PDF documents instantly.',
    icon: ImageIcon,
    href: '/webp-to-pdf',
    status: 'available',
  },
  {
    name: 'Compress Image',
    description: 'Reduce image file sizes while preserving high visual sharpness for web and email attachments.',
    icon: Minimize2,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Resize Image',
    description: 'Change pixel dimensions, aspect ratio, or percentage scale for JPG, PNG, and WEBP files.',
    icon: Maximize2,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Crop Image',
    description: 'Trim unwanted borders and crop photos to exact aspect ratios with an interactive canvas.',
    icon: Crop,
    href: '#',
    status: 'coming-soon',
  },
];

const PDF_TOOLS: ToolItem[] = [
  {
    name: 'Merge PDF',
    description: 'Combine multiple PDF documents into a single consolidated file in your specified order.',
    icon: Layers,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Split PDF',
    description: 'Extract specific page ranges or split each page of a PDF document into individual files.',
    icon: Scissors,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Compress PDF',
    description: 'Shrink PDF file size for easy email sharing without sacrificing text readability.',
    icon: FileArchive,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'PDF to JPG',
    description: 'Convert each page of a PDF document into high-resolution JPG images.',
    icon: ImageIcon,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'PDF to PNG',
    description: 'Export PDF document pages into lossless PNG graphics with sharp text borders.',
    icon: ImageIcon,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Rotate PDF',
    description: 'Rotate permanent page orientations 90, 180, or 270 degrees clockwise.',
    icon: RotateCw,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Protect PDF',
    description: 'Encrypt your PDF with strong AES-256 password protection to safeguard private records.',
    icon: Lock,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'Unlock PDF',
    description: 'Remove password security restrictions from your authorized PDF files.',
    icon: Unlock,
    href: '#',
    status: 'coming-soon',
  },
  {
    name: 'PDF Page Numbering',
    description: 'Add customized page numbers, headers, and footers to your PDF pages.',
    icon: Hash,
    href: '#',
    status: 'coming-soon',
  },
];

export default function ToolsPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="brand">Toolbox</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          All PDF & Image Productivity Tools
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Everything you need to convert, organize, and manage your images and PDF files with complete client-side security.
        </p>
      </div>

      {/* Image Tools Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">Image Tools</h2>
            <p className="text-xs text-gray-500">Convert, crop, resize and optimize image files</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGE_TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            const isAvailable = tool.status === 'available';

            return (
              <div
                key={idx}
                className={`relative bg-white border rounded-3xl p-6 flex flex-col justify-between transition-all ${
                  isAvailable
                    ? 'border-gray-200 hover:border-[#4D4AE8] hover:shadow-sm'
                    : 'border-gray-100 opacity-80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D7CDFC]/40 flex items-center justify-center text-[#4D4AE8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    {tool.badge ? (
                      <Badge variant="brand">{tool.badge}</Badge>
                    ) : !isAvailable ? (
                      <Badge variant="neutral">Coming Soon</Badge>
                    ) : null}
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2">{tool.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div>
                  {isAvailable ? (
                    <Link href={tool.href}>
                      <Button variant="outline" size="sm" className="w-full justify-between group">
                        <span>Open Tool</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" disabled className="w-full justify-center opacity-60">
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PDF Tools Section */}
      <section className="space-y-6 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center">
            <FileText className="w-5 h-5 text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">PDF Document Tools</h2>
            <p className="text-xs text-gray-500">Merge, split, protect and manipulate PDF documents</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PDF_TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            const isAvailable = tool.status === 'available';

            return (
              <div
                key={idx}
                className="relative bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between opacity-80"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="neutral">Coming Soon</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2">{tool.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div>
                  <Button variant="outline" size="sm" disabled className="w-full justify-center opacity-60">
                    In Development
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
