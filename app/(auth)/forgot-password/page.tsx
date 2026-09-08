'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block mb-3">
            <Image
              src="/logo.png?v=3"
              alt="ImageToPDF.online"
              width={240}
              height={38}
              unoptimized
              priority
              className="h-[34px] sm:h-[38px] w-auto object-contain mx-auto"
            />
          </Link>

          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Reset Password
          </h1>
          <p className="text-sm text-gray-500">
            Enter your email to receive a password reset link.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-black">Reset Link Sent</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              If an account exists for {email}, you will receive a reset link shortly.
            </p>
            <Link href="/login">
              <Button variant="outline" size="sm" className="w-full justify-center">
                Back to Login
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-700">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm text-black"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full justify-center font-bold"
            >
              Send Reset Link
            </Button>
          </form>
        )}

        <div className="pt-2 text-center">
          <Link href="/login" className="text-xs font-semibold text-gray-500 hover:text-black flex items-center justify-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
