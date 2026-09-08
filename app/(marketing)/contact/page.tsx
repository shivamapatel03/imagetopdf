'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, MessageCircle, ExternalLink, HelpCircle, Shield, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="brand">Help Center</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Help Center & Support
        </h1>
        <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
          Need assistance with your PDF conversions or have a feature suggestion? Connect with our official Help Center on Instagram.
        </p>
      </div>

      {/* Primary Instagram Help Center Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50/70 border border-pink-200/80 p-6 sm:p-10 text-center shadow-xs">
        <div className="relative z-10 space-y-5">
          {/* Instagram Gradient Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white mx-auto flex items-center justify-center shadow-md shadow-pink-500/20">
            <InstagramIcon className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
              Official Support Channel
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              Instagram: /imagetopdf.online
            </h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Our official Help Center operates directly on Instagram. Send us a direct message anytime for fast support and inquiries.
            </p>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://instagram.com/imagetopdf.online"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:via-pink-700 hover:to-rose-600 text-white font-bold text-sm shadow-md shadow-pink-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Message on Instagram (@imagetopdf.online)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Feature Badges */}
          <div className="pt-4 border-t border-pink-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3 bg-white/80 backdrop-blur-xs rounded-xl border border-pink-100/60">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                <MessageCircle className="w-3.5 h-3.5 text-pink-600" />
                <span>Direct Support</span>
              </div>
              <p className="text-[11px] text-gray-500">Fast DM replies for conversion or feature questions.</p>
            </div>

            <div className="p-3 bg-white/80 backdrop-blur-xs rounded-xl border border-pink-100/60">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Private</span>
              </div>
              <p className="text-[11px] text-gray-500">Your photos are converted in browser and never sent to servers.</p>
            </div>

            <div className="p-3 bg-white/80 backdrop-blur-xs rounded-xl border border-pink-100/60">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Feature Requests</span>
              </div>
              <p className="text-[11px] text-gray-500">Tell us what formats and tools you'd like added next.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Help Inquiry Box */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#4D4AE8]" />
            <span>Leave a Help Request</span>
          </h3>
          <p className="text-xs text-gray-500">
            You can also submit a question below or message us directly on Instagram for immediate help.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-black">Message Sent!</h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Thank you! For fastest real-time support, message our official Instagram Help Center: <strong className="text-black font-bold">@imagetopdf.online</strong>.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <a
                href="https://instagram.com/imagetopdf.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm" leftIcon={<InstagramIcon className="w-3.5 h-3.5" />}>
                  Open Instagram
                </Button>
              </a>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Send Another
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase text-gray-700">Instagram Handle (Optional)</label>
                <input
                  type="text"
                  placeholder="@yourhandle"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-700">Topic</label>
              <input
                required
                type="text"
                placeholder="e.g. Help with conversion, question, feature request"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-700">How can we help?</label>
              <textarea
                required
                rows={4}
                placeholder="Describe your question or issue..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              className="w-full justify-center font-bold"
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Help Request
            </Button>
          </form>
        )}
      </div>

      {/* Footer Support Tag */}
      <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
        <InstagramIcon className="w-4 h-4 text-pink-600" />
        <span>Official Help Center: <a href="https://instagram.com/imagetopdf.online" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 hover:text-pink-600 underline">instagram.com/imagetopdf.online</a></span>
      </div>
    </div>
  );
}
