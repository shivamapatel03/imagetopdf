'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Clock,
  Settings,
  LogOut,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useAuth } from '@/components/providers/AuthProvider';

export const DashboardSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, signOut } = useAuth();

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/history', label: 'History', icon: Clock },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  const displayName = profile?.fullName || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const initial = displayName ? displayName[0].toUpperCase() : 'U';

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between shrink-0 min-h-[calc(100vh-4rem)]">
      <div className="p-6 space-y-6">
        {/* User Card */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-[#D7CDFC] border border-[#C4B5FD] flex items-center justify-center font-bold text-black text-sm shrink-0">
            {initial}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-black truncate" title={displayName}>
              {displayName}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Badge variant="brand">
                100% FREE
              </Badge>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1.5">
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#D7CDFC]/40 text-black font-bold'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#4D4AE8]' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-6 border-t border-gray-100">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 w-full transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
