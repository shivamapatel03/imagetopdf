import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheck,
  Cpu,
  Lock,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe,
  Code,
  FileCheck2,
  Calendar,
  Layers,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us – ImageToPDF.online Mission, Architecture & Standards',
  description:
    'Learn about ImageToPDF.online, our mission to provide private, 100% client-side document conversions, our technical architecture, and our commitment to user security.',
  alternates: {
    canonical: 'https://imagetopdf.online/about',
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="brand">About ImageToPDF.online</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          Empowering Document Productivity with Absolute Privacy
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          We built ImageToPDF.online to solve a critical flaw in modern online utilities: the widespread, unnecessary transmission of private personal files to remote cloud servers.
        </p>
      </div>

      {/* Origin Story / Mission */}
      <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#4D4AE8]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">Our Mission & Purpose</h2>
            <p className="text-xs text-gray-500">Why we founded ImageToPDF.online</p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-gray-700 space-y-4 leading-relaxed">
          <p>
            Every day, millions of students, job seekers, small business owners, and professionals need to convert photos of receipts, driver&apos;s licenses, passports, invoices, and academic transcripts into PDF documents. Unfortunately, most traditional conversion websites require users to upload these confidential records onto remote, third-party cloud servers where they are queued, processed, and potentially logged.
          </p>
          <p>
            We believed there had to be a better way. Modern web browsers are powerful computing platforms. By combining <strong>HTML5 Canvas, optimized client-side rendering engines, and WebAssembly</strong>, we engineered ImageToPDF.online to execute 100% of the conversion pipeline directly within your own browser memory.
          </p>
          <p className="font-semibold text-gray-900">
            Our promise is simple: Your documents never leave your device. Zero cloud uploads, zero server databases, and zero data mining.
          </p>
        </div>
      </section>

      {/* Team & Publisher Identity (E-E-A-T) */}
      <section className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="space-y-2">
          <Badge variant="brand">Publisher & Team</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Who Builds and Maintains ImageToPDF.online
          </h2>
          <p className="text-sm text-gray-500">
            Transparent engineering leadership committed to web standards and user privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center font-bold text-lg text-[#4D4AE8]">
                SP
              </div>
              <div>
                <h3 className="font-bold text-black text-base">Shivam Patel</h3>
                <p className="text-xs text-gray-500">Founder & Lead Software Engineer</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Full-stack software engineer specializing in browser-based computing, WebAssembly, and client-side document processing pipelines. Passionate about eliminating unnecessary cloud data retention and advocating for user privacy rights.
            </p>
            <div className="pt-1 text-xs text-[#4D4AE8] font-medium">
              <span>Contact: </span>
              <a href="mailto:support@imagetopdf.online" className="underline font-bold">
                support@imagetopdf.online
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-lg text-emerald-700">
                QA
              </div>
              <div>
                <h3 className="font-bold text-black text-base">Document Standards Review</h3>
                <p className="text-xs text-gray-500">Standards & Quality Assurance</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Responsible for testing ISO 32000-1 PDF syntax compliance, 300 DPI print accuracy, margin precision, and cross-browser rendering reliability across Apple Safari, Google Chrome, Mozilla Firefox, and Microsoft Edge.
            </p>
            <div className="pt-1 text-xs text-emerald-700 font-medium">
              <span>Audited against: </span>
              <strong>ISO 32000-1 & W3C HTML5 standards</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Deep Dive */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="brand">Technical Architecture</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
            How Client-Side Conversion Works
          </h2>
          <p className="text-sm text-gray-500">
            A peek under the hood of our zero-upload browser document compiler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-black">1. Local Binary Ingestion</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              When you select images or drop them into our converter, the browser&apos;s standard File API reads the raw byte streams into local memory via temporary blob URLs. No HTTP POST payload is ever dispatched to a server.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-black">2. Hardware-Accelerated Rendering</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Using the HTML5 Canvas 2D graphics context, image dimensions, rotations (90°, 180°, 270°), and aspect ratio fits are calculated on your device&apos;s GPU and CPU, ensuring crisp fidelity and zero compression artifacts.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-black">3. Native PDF Compilation</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our compiled JavaScript engine structures the PDF cross-reference tables, font maps, and embedded image streams into standard ISO 32000-1 PDF syntax, generating a direct download link immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Curation & Maintenance Changelog */}
      <section className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center">
            <Calendar className="w-5 h-5 text-[#4D4AE8]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black tracking-tight">
              Ongoing Curation & Platform Maintenance
            </h2>
            <p className="text-xs text-gray-500">Live development log and version improvements</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          ImageToPDF.online is actively curated and maintained. We continually update our conversion algorithms, expand our educational documentation, and benchmark against the latest browser releases.
        </p>

        <div className="space-y-4 not-prose">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-black">Version 2.4 — Knowledge Hub Expansion & Canvas Memory Optimization</span>
              <span className="text-xs text-gray-400 font-mono">November 2026</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Added 10 comprehensive technical guides covering DPI calculation, HEIC conversion, PDF/A standards, and RGB vs CMYK color spaces. Optimized canvas garbage collection for 30+ photo batches on low-RAM mobile devices.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-black">Version 2.3 — Interactive Visual Thumbnail Board</span>
              <span className="text-xs text-gray-400 font-mono">October 2026</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Shipped drag-and-drop reordering with live visual thumbnail cards and dedicated 90° clockwise rotation tools for sideways mobile camera captures.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-black">Version 2.2 — ISO 216 Page Standards & Custom Margins</span>
              <span className="text-xs text-gray-400 font-mono">September 2026</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Implemented strict ISO 216 dimension standards (A4, A3) alongside North American US Letter and Legal formats with configurable print margin borders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
          <span className="text-2xl font-black text-[#4D4AE8]">100%</span>
          <p className="text-xs font-bold text-gray-900">Client-Side Privacy</p>
          <p className="text-[11px] text-gray-500">Your documents never touch a remote server</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
          <span className="text-2xl font-black text-[#4D4AE8]">0</span>
          <p className="text-xs font-bold text-gray-900">Watermarks Added</p>
          <p className="text-[11px] text-gray-500">Clean, professional documents every time</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
          <span className="text-2xl font-black text-[#4D4AE8]">∞</span>
          <p className="text-xs font-bold text-gray-900">Unlimited Conversions</p>
          <p className="text-[11px] text-gray-500">No paywalls or restrictive daily limits</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
          <span className="text-2xl font-black text-[#4D4AE8]">&lt;1s</span>
          <p className="text-xs font-bold text-gray-900">Compilation Speed</p>
          <p className="text-[11px] text-gray-500">Instant client-side memory execution</p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center bg-gradient-to-br from-white to-[#D7CDFC]/20 border border-[#C4B5FD] rounded-3xl p-8 sm:p-12 space-y-4">
        <h3 className="text-2xl font-bold text-black">Ready to Convert Your Images to PDF?</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Start converting your JPG, PNG, and WEBP photos into clean, secure PDF files right now in your browser.
        </p>
        <div className="pt-2">
          <Link href="/">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Open Free Converter
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
