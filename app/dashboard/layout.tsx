import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50/50">
      <DashboardSidebar />
      <div className="flex-1 p-4 sm:p-8 lg:p-10 max-w-6xl w-full">
        {children}
      </div>
    </div>
  );
}
