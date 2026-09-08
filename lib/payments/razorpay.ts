import crypto from 'crypto';

export interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export const verifyRazorpaySignature = ({
  orderId,
  paymentId,
  signature,
  secret,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
  secret: string;
}): boolean => {
  if (!secret) return false;
  const text = `${orderId}|${paymentId}`;
  const generatedSignature = crypto
    .createHmac('sha256', secret)
    .update(text)
    .digest('hex');

  return generatedSignature === signature;
};

export const verifyWebhookSignature = ({
  rawBody,
  signature,
  webhookSecret,
}: {
  rawBody: string;
  signature: string;
  webhookSecret: string;
}): boolean => {
  if (!webhookSecret) return false;
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(rawBody)
    .digest('hex');

  return expectedSignature === signature;
};
