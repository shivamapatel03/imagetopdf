'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/components/providers/AuthProvider';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { user, profile } = useAuth();
  const isLoggedIn = Boolean(user);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/image-to-pdf', label: 'Image to PDF' },
    { href: '/jpg-to-pdf', label: 'JPG to PDF' },
    { href: '/png-to-pdf', label: 'PNG to PDF' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-150 ${
          isScrolled || isMobileMenuOpen ? 'border-b border-gray-200/80 shadow-xs' : 'border-b border-gray-100'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-17">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-hidden py-1"
          >
            <Image
              src="/logo.png?v=4"
              alt="ImageToPDF.online"
              width={215}
              height={34}
              unoptimized
              priority
              className="h-[26px] sm:h-[34px] w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-black bg-[#D7CDFC]/40 font-semibold'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {isLoggedIn ? (
              <Link href="/dashboard">
                <Button variant="outline" size="sm" leftIcon={<User className="w-4 h-4" />}>
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-gray-200 text-gray-700 hover:text-black hover:bg-gray-50 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-gray-800 hover:bg-[#D7CDFC]/30 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            {isLoggedIn ? (
              <Link href="/dashboard" className="w-full">
                <Button variant="outline" className="w-full justify-center" leftIcon={<User className="w-4 h-4" />}>
                  My Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full justify-center">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button variant="primary" className="w-full justify-center">
                    Sign Up Free
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      </header>

      {/* Spacer to prevent layout shift under fixed navbar */}
      <div className="h-16 sm:h-17 w-full shrink-0 pointer-events-none" aria-hidden="true" />
    </>
  );
};
