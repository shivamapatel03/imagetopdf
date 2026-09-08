'use client';

import React, { useState, useEffect } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { RecentConversionsTable } from '@/components/dashboard/RecentConversionsTable';
import { fetchUserConversions } from '@/lib/supabase/conversions';
import { ConversionRecord } from '@/types';
import { Search } from 'lucide-react';

export default function HistoryPage() {
  const [history, setHistory] = useState<ConversionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUserConversions()
      .then((records) => setHistory(records))
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = history.filter((item) =>
    item.convertedFileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.toolUsed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Conversion History"
        subtitle="Review and download your previously converted PDF documents."
      />

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by file name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-hidden focus:border-[#4D4AE8]"
          />
        </div>
        <div className="text-xs text-gray-500 self-end sm:self-center">
          Showing {filtered.length} of {history.length} conversions
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="h-64 bg-gray-200/50 rounded-3xl animate-pulse" />
      ) : (
        <RecentConversionsTable records={filtered} showViewAll={false} />
      )}
    </div>
  );
}
