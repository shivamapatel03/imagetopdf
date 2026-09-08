'use client';

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  action,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {action || (
          <Link href="/image-to-pdf">
            <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
              New Conversion
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
