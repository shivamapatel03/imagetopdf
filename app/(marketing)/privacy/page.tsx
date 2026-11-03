import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Lock, EyeOff, Server, Cookie, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Cookie Disclosure – ImageToPDF.online',
  description:
    'Read the ImageToPDF.online Privacy Policy. Learn about our 100% client-side privacy model, zero server storage, Google AdSense cookie compliance, and data protection practices.',
  alternates: {
    canonical: 'https://imagetopdf.online/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <Badge variant="brand">Data Protection & Compliance</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Privacy Policy & Cookie Policy
        </h1>
        <p className="text-sm text-gray-500">Last updated: November 2026</p>
      </div>

      {/* Client-Side Architecture Guarantee */}
      <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
        <div className="space-y-2">
          <h3 className="font-bold text-emerald-900 text-lg">
            Client-Side Architecture Guarantee: Zero Server Uploads
          </h3>
          <p className="text-sm text-emerald-800 leading-relaxed">
            ImageToPDF.online is built on a privacy-first browser architecture. When you convert JPG, PNG, or WEBP photos into PDF documents, all rendering, compression, and document compiling happen entirely inside your device&apos;s local web browser memory using HTML5 Canvas and WebAssembly. <strong>Your files, photos, and generated PDFs are never uploaded to, transmitted through, or stored on our servers.</strong>
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-700 space-y-10 leading-relaxed text-sm sm:text-base">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            1. Information We Do Not Collect or Store
          </h2>
          <p>
            Because file conversions occur exclusively within your client web browser session, ImageToPDF.online does not have access to, collect, inspect, or retain:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
            <li>Any uploaded source image files (including JPG, JPEG, PNG, WEBP, or other graphics formats).</li>
            <li>Any compiled PDF documents created using our tools.</li>
            <li>Any personally identifiable information, confidential texts, sensitive documents (such as passports, identification cards, academic certificates, invoices, or medical receipts) displayed within your photos.</li>
            <li>Metadata or EXIF location coordinates contained within your photos.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="security" className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            2. Local Browser Sandbox & Memory Lifecycle
          </h2>
          <p>
            All file processing is executed inside the secure sandboxed runtime provided by your web browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, etc.). Image object URLs and binary memory allocations created during the conversion workflow exist only in your browser&apos;s volatile RAM. As soon as you refresh or close your browser tab, all temporary memory references are immediately and permanently purged by the browser garbage collector.
          </p>
        </section>

        {/* Section 3 - Google AdSense Mandatory Disclosures */}
        <section id="cookies" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2">
            <Cookie className="w-5 h-5 text-[#4D4AE8]" />
            <span>3. Cookies & Advertising Policy (Google AdSense)</span>
          </h2>
          <p>
            To keep ImageToPDF.online 100% free for all users worldwide without charging subscription fees or creating paywalls, we display digital advertisements. Please review how third-party advertising partners and Google manage cookies:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3 text-xs sm:text-sm text-gray-700">
            <p>
              <strong>Third-Party Vendors & Google Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to ImageToPDF.online or other websites across the Internet.
            </p>
            <p>
              <strong>Google Advertising Cookies:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites on the Internet.
            </p>
            <p>
              <strong>Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising at any time by visiting{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#4D4AE8] underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#4D4AE8] underline"
              >
                www.aboutads.info
              </a>{' '}
              or{' '}
              <a
                href="https://youronlinechoices.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#4D4AE8] underline"
              >
                Your Online Choices (EU)
              </a>
              .
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            4. Local Storage & Functional Cookies
          </h2>
          <p>
            We use standard browser localStorage and essential session cookies strictly for functional, non-advertising utility purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
            <li>Remembering your conversion layout preferences (e.g. chosen default page orientation or margin size).</li>
            <li>Managing user authentication sessions if you register an optional account.</li>
            <li>Preventing rate-limiting or automated denial-of-service script abuse.</li>
          </ul>
        </section>

        {/* Section 5 - GDPR & CCPA Compliance */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            5. GDPR and CCPA / CPRA Rights
          </h2>
          <p>
            Under privacy regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA), individuals have specific rights regarding their personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
            <li><strong>Right to Know & Access:</strong> You have the right to request details regarding what data is collected. Because we do not upload or store your documents, we hold zero user document data.</li>
            <li><strong>Right to Deletion:</strong> If you maintain an account profile, you may request account deletion at any time.</li>
            <li><strong>Non-Discrimination:</strong> We will never discriminate against you for exercising your legal privacy rights.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            6. Changes to this Privacy Policy
          </h2>
          <p>
            We may periodically update this policy to reflect enhancements in our client-side software, web standards, or applicable advertising policies. Any modifications will be posted directly on this page with an updated revision date.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            7. Contact Information
          </h2>
          <p>
            If you have questions, feedback, or inquiries regarding our privacy standards or advertising practices, please reach out to us:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-2 text-sm text-gray-700">
            <p><strong>ImageToPDF.online Privacy & Data Protection</strong></p>
            <p>Email: <a href="mailto:support@imagetopdf.online" className="text-[#4D4AE8] font-semibold underline">support@imagetopdf.online</a></p>
            <p>Contact Center:{' '}
              <Link href="/contact" className="text-[#4D4AE8] font-semibold underline">
                Help & Support Page
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
