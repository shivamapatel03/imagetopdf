'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';


export interface PricingCardsProps {
  onPlanSelected?: (plan: 'free' | 'premium') => void;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ onPlanSelected }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const freeFeatures = [
    'Up to 10 conversions per day',
    'Standard file size limit (25MB)',
    'A4, A3 & Letter formats',
    'Client-side instant processing',
    'Standard quality output',
    'Basic image rotation & sorting',
  ];

  const premiumFeatures = [
    'Unlimited conversions every day',
    'No advertisements ever',
    'Ultra-large file uploads (up to 100MB)',
    'Maximum high-resolution PDF output',
    'Unlimited image batch uploads',
    'Full conversion history sync',
    'Priority feature access',
    'Future premium tools included',
  ];

  const handleUpgradeClick = () => {
    setIsCheckoutOpen(true);
  };

  const handleSimulatePayment = async () => {
    setIsProcessing(true);
    // Simulate Razorpay checkout verification
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      if (onPlanSelected) onPlanSelected('premium');
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* FREE PLAN CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col justify-between hover:border-gray-300 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-black">Free</h3>
              <Badge variant="neutral">Starter</Badge>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Perfect for occasional image conversions and quick tasks.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold text-black">₹0</span>
              <span className="text-sm font-medium text-gray-500">/month</span>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                What's included:
              </p>
              {freeFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gray-700" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <Link href="/image-to-pdf" className="w-full">
            <Button variant="outline" className="w-full justify-center text-base py-3">
              Start Free
            </Button>
          </Link>
        </div>

        {/* PREMIUM PLAN CARD - HIGHLIGHTED */}
        <div className="relative bg-[#D7CDFC]/15 border-2 border-[#4D4AE8] rounded-3xl p-8 flex flex-col justify-between">
          {/* Most Affordable Badge */}
          <div className="absolute -top-3.5 right-8">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-[#D7CDFC] text-black border border-[#C4B5FD] shadow-xs">
              Most Affordable
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-black">Premium</h3>
              <Badge variant="brand">Unlimited</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              For professionals, creators, and teams needing unlimited power.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold text-black">₹19</span>
              <span className="text-sm font-medium text-gray-600">/month</span>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#D7CDFC] mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-black mb-2">
                Everything in Free, plus:
              </p>
              {premiumFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-900 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#4D4AE8] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="primary"
            onClick={handleUpgradeClick}
            className="w-full justify-center text-base py-3 font-bold"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Get Premium
          </Button>
        </div>
      </div>

      {/* Razorpay Subscription Checkout Modal */}
      <Modal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setPaymentSuccess(false);
        }}
        title="Upgrade to ImageToPDF.online Premium"
        maxWidth="max-w-md"
      >
        {paymentSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-black">Subscription Activated!</h4>
            <p className="text-sm text-gray-600">
              You now have unlimited conversions, maximum resolution output, and priority speed.
            </p>
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={() => setIsCheckoutOpen(false)}
            >
              Continue to Dashboard
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-2">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div>
                <p className="font-bold text-black">Premium Monthly Plan</p>
                <p className="text-xs text-gray-500">Billed monthly • Cancel anytime</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-black">₹19</span>
                <span className="text-xs text-gray-500">/mo</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Secure payments powered by Razorpay (UPI, Cards, NetBanking)</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#4D4AE8] shrink-0" />
                <span>Instant activation and 100% money-back guarantee</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                isLoading={isProcessing}
                onClick={handleSimulatePayment}
                className="w-full justify-center font-bold"
              >
                Pay ₹19 & Activate Premium
              </Button>
              <p className="text-[11px] text-gray-400 text-center mt-3">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
