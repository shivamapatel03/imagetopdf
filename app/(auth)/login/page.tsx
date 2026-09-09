'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const supabase = createClient();
      if (!supabase || !isSupabaseConfigured) {
        throw new Error('Supabase is not configured yet. Please check your credentials.');
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        router.push('/dashboard');
        router.refresh();
      }
    } catch (err: any) {
      console.error('Login error:', err);
      let msg = err.message || 'Failed to log in.';
      if (msg.toLowerCase().includes('invalid login credentials')) {
        msg = 'Invalid email or password. Please verify your credentials.';
      } else if (msg.toLowerCase().includes('email not confirmed')) {
        msg = 'Please verify your email address by clicking the confirmation link sent to your inbox.';
      }
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block mb-3">
            <img
              src="/logo.png?v=3"
              alt="ImageToPDF.online"
              width={240}
              height={38}
              className="h-[34px] sm:h-[38px] w-auto object-contain mx-auto"
            />
          </Link>

          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Log in to access your converted files and settings.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 leading-relaxed">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm text-black"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase text-gray-700">
                Password
              </label>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
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
            Log In
          </Button>
        </form>


        {/* Footer link */}
        <p className="text-center text-xs text-gray-500 pt-2">
          Don't have an account?{' '}
          <Link href="/signup" className="font-bold text-[#4D4AE8] hover:underline">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  );
}
