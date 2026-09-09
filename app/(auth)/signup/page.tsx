'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
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
              style={{ width: 'auto' }}
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
