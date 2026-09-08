'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <Badge variant="brand">Get In Touch</Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
          Contact & Support
        </h1>
        <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
          Have questions about your subscription, feature requests, or technical assistance? We are here to help.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xs">
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-black">Message Received!</h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Thank you for contacting ImageToPDF.online. Our support team typically replies within 12 hours.
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-700">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-700">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-700">Subject</label>
              <input
                required
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-700">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Describe your issue or feedback..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-hidden focus:border-[#4D4AE8] text-sm"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="w-full justify-center font-bold"
              rightIcon={<Send className="w-4 h-4" />}
            >
              Send Message
            </Button>
          </form>
        )}
      </div>

      <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
        <Mail className="w-4 h-4 text-gray-400" />
        <span>Direct email: support@imagetopdf.online</span>
      </div>
    </div>
  );
}
