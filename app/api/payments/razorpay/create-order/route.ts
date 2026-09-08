import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, plan = 'premium' } = body;

    const amountInPaise = 1900; // ₹19 in paise
    const currency = 'INR';
    const receipt = `rcpt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // If Razorpay credentials are fully provided, create real order via Razorpay API
    if (keyId && keySecret && !keyId.includes('yourKeyId')) {
      const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
      const res = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
        body: JSON.stringify({
          amount: amountInPaise,
          currency,
          receipt,
          notes: {
            userId: userId || 'anonymous',
            plan,
          },
        }),
      });

      const orderData = await res.json();
      if (!res.ok) {
        throw new Error(orderData?.error?.description || 'Failed to create Razorpay order');
      }

      return NextResponse.json({
        success: true,
        orderId: orderData.id,
        amount: orderData.amount,
        currency: orderData.currency,
        keyId,
      });
    }

    // Fallback sandbox/demo order response
    return NextResponse.json({
      success: true,
      orderId: `order_demo_${Date.now()}`,
      amount: amountInPaise,
      currency,
      keyId: keyId || 'rzp_test_placeholder',
      isDemo: true,
    });
  } catch (error: any) {
    console.error('Create order error', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Order creation failed' },
      { status: 500 }
    );
  }
}
