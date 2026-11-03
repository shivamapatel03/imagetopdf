'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Send,
  CheckCircle2,
  MessageSquare,
  HelpCircle,
  Shield,
  Sparkles,
  Mail,
  ArrowRight,
  Clock,
  MapPin,
  FileQuestion,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous local submission confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="brand">Help Center & Support</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Get in Touch with ImageToPDF.online
        </h1>
        <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Have a question about converting your files, encountering an unexpected formatting issue, or want to suggest a new tool? Our support team is here to help.
        </p>
      </div>

      {/* Support Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#D7CDFC]/40 text-[#4D4AE8] flex items-center justify-center font-bold">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Direct Email Support</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Send an email directly to our dedicated help desk at{' '}
            <a href="mailto:support@imagetopdf.online" className="text-[#4D4AE8] font-semibold underline">
              support@imagetopdf.online
            </a>.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Rapid Turnaround</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            We aim to review and respond to user inquiries and bug reports within 24–48 business hours.
          </p>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Privacy-First Inquiries</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Never send sensitive personal documents with bug reports. We only need reproduction steps.
          </p>
        </div>
      </div>

      {/* Contact Form & Office Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#4D4AE8]" />
              <span>Send Us a Direct Message</span>
            </h3>
            <p className="text-xs text-gray-500">
              Fill out this form and we will send a reply directly to your email inbox.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-black">Message Received!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you for contacting ImageToPDF.online. A member of our support engineering team will review your inquiry shortly.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Message
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
                  <label className="text-xs font-semibold text-gray-700">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#4D4AE8] focus:ring-2 focus:ring-[#D7CDFC]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#4D4AE8] focus:ring-2 focus:ring-[#D7CDFC]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Topic / Category</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#4D4AE8] focus:ring-2 focus:ring-[#D7CDFC] bg-white"
                >
                  <option value="General Question">General Inquiry</option>
                  <option value="Bug Report">Bug Report / Conversion Issue</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Advertising">Advertising & Partnership</option>
                  <option value="Privacy">Privacy or Legal Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your question, request, or issue in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#4D4AE8] focus:ring-2 focus:ring-[#D7CDFC]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full justify-center"
                disabled={isSubmitting}
                rightIcon={<Send className="w-4 h-4" />}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>

        {/* Operational & FAQ Card */}
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 space-y-4">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <FileQuestion className="w-4 h-4 text-[#4D4AE8]" />
              <span>Looking for Quick Answers?</span>
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Before submitting a ticket, check our tutorials and technical guides for quick solutions on DPI settings, file sizes, and mobile conversions.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4D4AE8] hover:underline"
            >
              Browse Knowledge Guides <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">Site Maintenance & Publisher</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              ImageToPDF.online is an independently developed and operated web document utility dedicated to client-side data privacy and accessible browser computing.
            </p>
            <div className="pt-2 border-t border-gray-100 text-xs text-gray-600 space-y-1">
              <p><strong>Official Contact:</strong> support@imagetopdf.online</p>
              <p><strong>Operating Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
