import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, FileCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service – ImageToPDF.online',
  description:
    'Review the Terms of Service for using ImageToPDF.online free browser-based image and PDF conversion utilities.',
  alternates: {
    canonical: 'https://imagetopdf.online/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <Badge variant="brand">Legal Terms & Usage</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">Effective Date: November 2026</p>
      </div>

      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website ImageToPDF.online (&quot;the Service&quot;), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service. If you do not agree to these terms, you should immediately cease all access and use of our web services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">2. Description of Service & Free Access</h2>
          <p>
            ImageToPDF.online provides client-side web utilities allowing users to convert, merge, organize, and format digital images (such as JPG, JPEG, PNG, and WEBP) into Adobe Portable Document Format (PDF) files. The core conversion tools provided on ImageToPDF.online are offered 100% free of charge with zero required paid subscriptions.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">3. User Content & Intellectual Property</h2>
          <p>
            You retain 100% complete ownership, copyright, and title to all photos, graphics, texts, and compiled documents processed using our platform. Because our processing architecture executes entirely within your client web browser memory without uploading your data to remote cloud servers, ImageToPDF.online does not claim any license, ownership, or custody over your files.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">4. Acceptable Use Policy</h2>
          <p>
            You agree not to use the Service for any unlawful or harmful purposes, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
            <li>Processing, distributing, or producing content that violates third-party intellectual property rights or local, national, or international laws.</li>
            <li>Attempting to interfere with the proper functioning of the site, inject malicious code, or overload our infrastructure with automated bots or denial-of-service scripts.</li>
            <li>Circumventing or attempting to bypass security restrictions or ad-delivery mechanisms.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">5. Disclaimer of Warranties</h2>
          <p>
            The Service and all associated documentation are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express, statutory, or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. While we endeavor to provide reliable, high-fidelity conversion tools, ImageToPDF.online does not warrant that the conversion output will be completely error-free or that the Service will operate without occasional interruption.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall ImageToPDF.online, its operators, creators, or contributors be held liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the Service, including data corruption, system memory limits, or document loss.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">7. Third-Party Advertisements & External Links</h2>
          <p>
            The Service displays advertisements served by third-party advertising partners, including Google AdSense. ImageToPDF.online does not endorse or assume liability for the products, services, or claims made by external advertisers or third-party web destinations linked from advertisements.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">8. Governing Law & Modifications</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with applicable governing laws. We reserve the right to amend or revise these terms at any time by updating this page with an effective date notice.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-black">9. Contact & Support</h2>
          <p>
            For any inquiries regarding these Terms of Service or general platform support, please visit our{' '}
            <Link href="/contact" className="text-[#4D4AE8] font-semibold underline">
              Help Center & Support Page
            </Link>{' '}
            or contact us directly at{' '}
            <a href="mailto:support@imagetopdf.online" className="text-[#4D4AE8] font-semibold underline">
              support@imagetopdf.online
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
