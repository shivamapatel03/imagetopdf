'use client';

import React from 'react';
import Link from 'next/link';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

export default function SubscriptionPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <DashboardHeader
        title="Plan & Access Status"
        subtitle="ImageToPDF.online is 100% free forever for all registered and guest users."
      />

      {/* Plan Status Card */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Your Account Status
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black capitalize mt-1">
              Permanent Free Plan
            </h2>
          </div>
          <Badge variant="brand" className="self-start sm:self-center">
            ACTIVE & UNLIMITED
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-gray-500 text-xs uppercase font-bold">Billing Cycle</p>
            <p className="font-semibold text-black mt-1">No Renewal Required</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase font-bold">Price</p>
            <p className="font-semibold text-emerald-600 mt-1">₹0 / Free Forever</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase font-bold">Conversion Allowance</p>
            <p className="font-semibold text-black mt-1">Unlimited Conversions</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
          <Heart className="w-5 h-5 text-[#4D4AE8] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            All premium features—including batch image converting, custom margins, multi-image merging, and high-resolution PDF rendering—are 100% free and unlocked for your account.
          </p>
        </div>

        <div className="pt-2">
          <Link href="/image-to-pdf">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Converting Images
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
