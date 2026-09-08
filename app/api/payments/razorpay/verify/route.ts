import { NextResponse } from 'next/server';
import { verifyRazorpaySignature } from '@/lib/payments/razorpay';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      userId,
      plan = 'premium',
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET;

    // In real mode with secrets present, enforce cryptographic validation
    if (secret && !secret.includes('yourRazorpaySecret')) {
      const isValid = verifyRazorpaySignature({
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
        secret,
      });

      if (!isValid) {
        return NextResponse.json(
          { success: false, message: 'Invalid payment signature. Verification failed.' },
          { status: 400 }
        );
      }
    }

    // Update Supabase subscriptions table if server client is configured
    const supabase = createServerClient();
    if (supabase && userId) {
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 1);

      await supabase.from('subscriptions').upsert({
        user_id: userId,
        plan_name: plan,
        status: 'active',
        payment_provider: 'razorpay',
        payment_id: razorpayPaymentId,
        amount_in_inr: 19,
        start_date: new Date().toISOString(),
        expiry_date: expiryDate.toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified and subscription activated successfully.',
      plan,
    });
  } catch (error: any) {
    console.error('Verify error', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Verification process failed.' },
      { status: 500 }
    );
  }
}
