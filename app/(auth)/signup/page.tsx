'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const supabase = createClient();
      if (!supabase || !isSupabaseConfigured) {
        throw new Error('Supabase is not configured yet. Please check your credentials.');
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) {
        throw error;
      }

      // If Supabase has email confirmation enabled, session will be null
      if (data.user && !data.session) {
        setSignupSuccess(true);
      } else if (data.session) {
        router.push('/dashboard');
      } else {
        setSignupSuccess(true);
      }
    } catch (err: any) {
      console.error('Signup error:', err);
      let message = err.message || 'Failed to create account.';
      if (message.toLowerCase().includes('already registered')) {
        message = 'This email is already registered. Please log in instead.';
      }
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const supabase = createClient();
      if (!supabase) throw new Error('Supabase client unavailable');
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
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
            Create Your Account
          </h1>
          <p className="text-sm text-gray-500">
            Free forever account with private, instant PDF conversions.
          </p>
        </div>

        {signupSuccess ? (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-black">Check Your Email</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                We sent a verification link to <strong className="text-black">{email}</strong>. Please check your inbox or spam folder and click the link to confirm your account.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/login">
                <Button variant="primary" size="lg" className="w-full justify-center font-bold">
                  Go to Login
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm text-black"
                />
              </div>

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
                <label className="text-xs font-bold uppercase text-gray-700">
                  Password (Min 8 characters)
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
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
                Create Free Account
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
              onClick={handleGoogleSignup}
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
              Sign up with Google
            </Button>

            <p className="text-center text-xs text-gray-500 pt-2">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-[#4D4AE8] hover:underline">
                Log in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
