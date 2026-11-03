'use client';

import React, { useEffect } from 'react';

export interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const AdBanner: React.FC<AdBannerProps> = ({
  slot,
  format = 'auto',
  className = '',
  responsive = true,
}) => {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6649084210449054';
  const adSlot = slot || process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER || '3372959670';
  const isConfigured = Boolean(adsenseClientId && adSlot);

  useEffect(() => {
    if (isConfigured && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense banner error:', err);
      }
    }
  }, [isConfigured]);

  return (
    <div
      className={`my-6 flex flex-col items-center justify-center w-full max-w-full overflow-hidden transition-all ${className}`}
    >
      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">
        Advertisement
      </span>

      {isConfigured ? (
        <div className="w-full max-w-full overflow-hidden flex justify-center min-h-[90px]">
          <ins
            className="adsbygoogle block w-full max-w-full text-center overflow-hidden"
            style={{ display: 'block', maxWidth: '100%', overflow: 'hidden' }}
            data-ad-client={adsenseClientId}
            data-ad-slot={adSlot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
          />
        </div>
      ) : null}
    </div>
  );
};
