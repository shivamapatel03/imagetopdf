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

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const supabase = createClient();
      if (!supabase) throw new Error('Supabase client unavailable');
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: `${window.location.origin}/dashboard` },
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Google sign-in failed.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        {/* Header */}
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

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400 font-semibold">Or continue with</span>
          </div>
        </div>

        {/* Google OAuth Button */}
        <Button
          variant="outline"
          onClick={handleGoogleLogin}
          className="w-full justify-center text-sm font-semibold"
          leftIcon={
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.02 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          }
        >
          Sign in with Google
        </Button>

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
