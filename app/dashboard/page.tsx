'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RecentConversionsTable } from '@/components/dashboard/RecentConversionsTable';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useAuth } from '@/components/providers/AuthProvider';
import { fetchUserConversions } from '@/lib/supabase/conversions';
import { ConversionRecord } from '@/types';
import { Plus } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, isLoading } = useAuth();
  const [history, setHistory] = useState<ConversionRecord[]>([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
      return;
    }

    if (user) {
      fetchUserConversions()
        .then((records) => {
          setHistory(records);
        })
        .finally(() => {
          setIsHistoryLoading(false);
        });
    }
  }, [user, isLoading, router]);

  if (isLoading || (!user && isHistoryLoading)) {
    return (
      <div className="max-w-5xl mx-auto space-y-6 animate-pulse">
        <div className="h-32 bg-gray-200/70 rounded-3xl" />
        <div className="h-64 bg-gray-200/50 rounded-3xl" />
      </div>
    );
  }

  if (!user) return null;

  const displayName = profile?.fullName || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  const displayEmail = user.email || '';
  const initial = displayName ? displayName[0].toUpperCase() : 'U';

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* 1. SIMPLE HEADER: User Name & New Convert Button */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center font-black text-black text-xl shadow-2xs">
            {initial}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                {displayName}
              </h1>
              <Badge variant="brand">100% Free</Badge>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              {displayEmail} • {history.length} {history.length === 1 ? 'saved PDF' : 'saved PDFs'}
            </p>
          </div>
        </div>

        {/* New Convert Button */}
        <Link href="/image-to-pdf" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Plus className="w-5 h-5" />}
            className="w-full sm:w-auto font-bold px-6 py-3 text-base shadow-sm"
          >
            New Convert
          </Button>
        </Link>
      </div>

      {/* 2. SAVED PDF FILES LIST with Real Saved File Names */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-xl font-black text-black tracking-tight">
              My Saved Files
            </h2>
            <p className="text-xs text-gray-500">
              Access and download your converted PDF documents anytime.
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {history.length} {history.length === 1 ? 'File' : 'Files'}
          </span>
        </div>

        <RecentConversionsTable records={history} showViewAll={false} />
      </div>
    </div>
  );
}
