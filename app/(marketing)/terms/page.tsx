import React from 'react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Terms of Service – ImageToPDF.online',
  description: 'Terms of Service and usage conditions for ImageToPDF.online.',
  alternates: {
    canonical: 'https://imagetopdf.online/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <Badge variant="brand">Legal Terms</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500">Effective Date: September 1, 2026</p>
      </div>

      <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">1. Acceptance of Terms</h2>
          <p>
            By accessing and using ImageToPDF.online ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you must not use our service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">2. Permitted Use & User Content</h2>
          <p>
            You retain all ownership, copyright, and intellectual property rights to the images and documents you convert. You agree not to use the Service to generate or process illegal, abusive, or infringing materials.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">3. Premium Subscriptions & Billing</h2>
          <p>
            Our Premium plan is offered at ₹19 per month billed on a recurring monthly cycle via Razorpay. You can cancel your subscription anytime via your account dashboard. Refunds are governed by our standard satisfaction guarantee within 7 days of purchase.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">4. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-black">5. Governing Law</h2>
          <p>
            These terms are governed and construed in accordance with the laws of India.
          </p>
        </section>
      </div>
    </div>
  );
}
