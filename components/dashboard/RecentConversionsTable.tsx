'use client';

import React from 'react';
import Link from 'next/link';
import { ConversionRecord } from '@/types';
import { Download, FileText, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export interface RecentConversionsTableProps {
  records: ConversionRecord[];
  showViewAll?: boolean;
}

export const RecentConversionsTable: React.FC<RecentConversionsTableProps> = ({
  records,
  showViewAll = true,
}) => {
  const formatFileSize = (bytes: number) => {
    if (!bytes) return '—';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Today';
    }
  };

  if (!records || records.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
          <FileText className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-black">No conversions yet</h3>
          <p className="text-sm text-gray-500 max-w-sm mx-auto">
            Start converting your images into high-quality PDF files.
          </p>
        </div>
        <div>
          <Link href="/image-to-pdf">
            <Button variant="primary" size="sm">
              Convert Images
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-base font-bold text-black">Recent Conversions</h3>
        {showViewAll && (
          <Link href="/dashboard/history" className="text-xs font-bold text-[#4D4AE8] hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/60 text-xs font-bold uppercase text-gray-400">
              <th className="py-3.5 px-6">Saved PDF File Name</th>
              <th className="py-3.5 px-6">Type</th>
              <th className="py-3.5 px-6">Date</th>
              <th className="py-3.5 px-6">Status</th>
              <th className="py-3.5 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {records.map((rec) => (
              <tr key={rec.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#D7CDFC]/40 border border-[#C4B5FD]/50 flex items-center justify-center text-[#4D4AE8] shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm truncate max-w-sm" title={rec.convertedFileName}>
                        {rec.convertedFileName}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                        <span>Source: {rec.originalFileName}</span>
                        <span>•</span>
                        <span>{formatFileSize(rec.fileSize)}</span>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <Badge variant="neutral">{rec.toolUsed}</Badge>
                </td>
                <td className="py-4 px-6 text-xs text-gray-500 whitespace-nowrap">
                  {formatDate(rec.createdAt)}
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  {rec.downloadUrl ? (
                    <a href={rec.downloadUrl} download={rec.convertedFileName}>
                      <Button variant="outline" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />}>
                        Download
                      </Button>
                    </a>
                  ) : (
                    <Link href="/image-to-pdf">
                      <Button variant="outline" size="sm">
                        Convert Again
                      </Button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
