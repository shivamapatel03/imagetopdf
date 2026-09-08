import { NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/payments/razorpay';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (webhookSecret && signature) {
      const isValid = verifyWebhookSignature({
        rawBody,
        signature,
        webhookSecret,
      });

      if (!isValid) {
        return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;
    const paymentEntity = payload.payload?.payment?.entity;
    const userId = paymentEntity?.notes?.userId;

    const supabase = createServerClient();

    if (event === 'payment.captured' && supabase && userId) {
      await supabase.from('subscriptions').upsert({
        user_id: userId,
        plan_name: 'premium',
        status: 'active',
        payment_provider: 'razorpay',
        payment_id: paymentEntity.id,
        amount_in_inr: 19,
        start_date: new Date().toISOString(),
      });
    } else if (event === 'payment.failed' && supabase && userId) {
      await supabase.from('subscriptions').update({
        status: 'failed',
      }).eq('user_id', userId);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
