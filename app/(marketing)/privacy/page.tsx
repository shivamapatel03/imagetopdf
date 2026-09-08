import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Cookie Policy – ImageToPDF.online',
  description: 'Understand how ImageToPDF.online protects your privacy with 100% client-side processing, zero server storage, and strict document security.',
  alternates: {
    canonical: 'https://imagetopdf.online/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <Badge variant="brand">Data Protection</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Privacy Policy & Data Security
        </h1>
        <p className="text-sm text-gray-500">Last updated: September 1, 2026</p>
      </div>

      <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-emerald-900 text-base">Client-Side Architecture Guarantee</h3>
          <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
            Unlike other conversion services, ImageToPDF.online processes files directly within your web browser memory using HTML5 Canvas and WebAssembly. Your images and documents are <strong>never uploaded to our servers</strong>.
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">1. Information We Do NOT Collect</h2>
          <p>
            Because file conversions occur locally on your machine, ImageToPDF.online does not collect, inspect, store, or transmit:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your uploaded image files (JPG, PNG, WEBP)</li>
            <li>Your generated PDF documents</li>
            <li>Any personal or confidential data contained within images (passports, tax forms, bank receipts)</li>
          </ul>
        </section>

        <section id="security" className="space-y-3">
          <h2 className="text-xl font-bold text-black">2. Security Architecture</h2>
          <p>
            When you use our tool, modern browser sandbox security models isolate the application. Once you close or reload the browser tab, all temporary memory objects containing your images are completely and permanently purged.
          </p>
        </section>

        <section id="cookies" className="space-y-3">
          <h2 className="text-xl font-bold text-black">3. Cookie Policy & Local Storage</h2>
          <p>
            We use minimal cookies and browser localStorage strictly necessary for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preserving your chosen conversion preferences (page size, orientation)</li>
            <li>Maintaining your account authentication session if logged in</li>
            <li>Preventing abuse of free daily conversion limits</li>
          </ul>
          <p>
            We do not sell personal data to third-party advertising brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">4. Payment Information</h2>
          <p>
            All subscription payments for our ₹19/month plan are handled securely via Razorpay. We do not store or process credit card numbers or UPI PINs on our servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">5. Contacting Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact our Data Protection Officer at privacy@imagetopdf.online.
          </p>
        </section>
      </div>
    </div>
  );
}
