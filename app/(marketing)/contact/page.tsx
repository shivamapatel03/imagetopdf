'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle2, MessageSquare, HelpCircle, Shield, Sparkles, Mail, ArrowRight } from 'lucide-react';

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
          Need assistance with your PDF conversions or have a feature suggestion? We are here to assist you.
        </p>
      </div>

      {/* Support Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#D7CDFC]/40 text-[#4D4AE8] flex items-center justify-center font-bold">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Direct Assistance</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Have questions about converting files? Send us your query below for fast support.
          </p>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">100% Client-Side</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Your images are converted locally in your browser. Files never touch any remote servers.
          </p>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Feature Requests</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Tell us which document tools or export options you would like to see added next.
          </p>
        </div>
      </div>

      {/* Contact Form Box */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#4D4AE8]" />
            <span>Send a Support Request</span>
          </h3>
          <p className="text-xs text-gray-500">
            Fill in the details below and our team will get back to you as soon as possible.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-black">Message Sent Successfully!</h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Thank you for reaching out. We have received your inquiry and will review it promptly.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Send Another Request
              </Button>
              <Link href="/">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Back to Converter
                </Button>
              </Link>
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
                <label className="text-xs font-bold uppercase text-gray-700">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-gray-700">Subject / Category</label>
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
                placeholder="Describe your question or issue in detail..."
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

      {/* Helpful Links & FAQ shortcut */}
      <div className="text-center text-xs text-gray-500 space-y-2">
        <p>
          Need quick answers? Check out our{' '}
          <Link href="/#faq" className="font-semibold text-[#4D4AE8] hover:underline">
            Frequently Asked Questions
          </Link>{' '}
          or review our{' '}
          <Link href="/privacy" className="font-semibold text-[#4D4AE8] hover:underline">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </div>
  );
}
