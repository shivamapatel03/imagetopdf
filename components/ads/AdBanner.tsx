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
  const isConfigured = Boolean(adsenseClientId && slot);

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
      className={`my-6 flex flex-col items-center justify-center overflow-hidden transition-all ${className}`}
    >
      <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">
        Advertisement
      </span>

      {isConfigured ? (
        <ins
          className="adsbygoogle block w-full text-center"
          style={{ display: 'block' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      ) : (
        /* Clean, non-intrusive fallback banner when ad client is unconfigured or in development */
        <div className="w-full max-w-3xl min-h-[90px] rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 flex items-center justify-center p-4 text-center">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-500">
              Display Ad Banner Slot
            </p>
            <p className="text-[11px] text-gray-400">
              Supports Google AdSense (728×90 / 320×50 responsive). Zero popups or intrusive overlays.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
