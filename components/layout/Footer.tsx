'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Shield, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  // Hide footer in focused studio workspace (/convert)
  if (pathname === '/convert' || pathname?.startsWith('/convert/')) {
    return null;
  }

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png?v=3"
                alt="ImageToPDF.online"
                width={225}
                height={36}
                unoptimized
                className="h-[32px] sm:h-[36px] w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Convert images to PDF instantly. Simple, fast and secure document conversion in your browser.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Client-Side Privacy Guaranteed</span>
            </div>
          </div>

          {/* Tools Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/image-to-pdf" className="text-gray-600 hover:text-black transition-colors">
                  Image to PDF
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-pdf" className="text-gray-600 hover:text-black transition-colors">
                  JPG to PDF
                </Link>
              </li>
              <li>
                <Link href="/png-to-pdf" className="text-gray-600 hover:text-black transition-colors">
                  PNG to PDF
                </Link>
              </li>
              <li>
                <Link href="/webp-to-pdf" className="text-gray-600 hover:text-black transition-colors">
                  WEBP to PDF
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-600 hover:text-black transition-colors">
                  All PDF Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  100% Free Forever
                </span>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-black transition-colors">
                  User Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy#cookies" className="text-gray-600 hover:text-black transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy#security" className="text-gray-600 hover:text-black transition-colors">
                  Security Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 ImageToPDF.online. All rights reserved.</p>
          <p className="font-medium text-gray-700">
            Made for simple document conversion.
          </p>
        </div>
      </div>
    </footer>
  );
};
