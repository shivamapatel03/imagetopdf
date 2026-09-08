import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AdBanner } from '@/components/ads/AdBanner';
import { Check, ShieldCheck, Zap, Heart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '100% Free Forever – Image to PDF Online Converter',
  description:
    'ImageToPDF.online is completely free to use with unlimited file conversions, high resolution, and zero subscription paywalls. Learn about our commitment to free, accessible document privacy.',
  alternates: {
    canonical: 'https://imagetopdf.online/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <Badge variant="brand">100% Free Forever</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          No Paywalls. No Subscriptions.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          We believe high-quality, private document conversion tools should be freely accessible to everyone worldwide—students, freelancers, and businesses alike.
        </p>
      </div>

      {/* Free Promise Banner */}
      <div className="bg-gradient-to-br from-white to-[#D7CDFC]/15 border border-[#C4B5FD] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] mx-auto flex items-center justify-center">
          <Heart className="w-8 h-8 text-[#4D4AE8]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
          All Features Are Unlocked & Free
        </h2>

        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
          Every feature—from custom ISO page sizes (A4, Letter) and custom margin spacing to batch multi-image merging and 90-degree rotations—is available with zero fees.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto pt-4">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
            <Check className="w-5 h-5 text-[#4D4AE8] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-black">Unlimited Files</p>
              <p className="text-xs text-gray-500">Convert as many files as you need daily.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
            <Check className="w-5 h-5 text-[#4D4AE8] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-black">High Resolution</p>
              <p className="text-xs text-gray-500">Original image pixel quality preserved.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-100">
            <Check className="w-5 h-5 text-[#4D4AE8] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-black">100% Client Privacy</p>
              <p className="text-xs text-gray-500">Photos never leave your device.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link href="/">
            <Button variant="primary" size="lg" className="px-8 font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Converting Images Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Clean, Non-Intrusive Banner Ad */}
      <AdBanner slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER} format="horizontal" />

      {/* How We Sustain Our Service */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 space-y-4">
        <h3 className="text-xl font-bold text-black">How is ImageToPDF.online funded?</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          We sustain our free platform through clean, unobtrusive display advertisements. We strictly enforce a policy of <strong>zero popups, zero intrusive overlays, and zero tracking redirects</strong> to ensure your conversion experience remains seamless, fast, and respectful.
        </p>
      </div>
    </div>
  );
}
