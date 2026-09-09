'use client';

import { useEffect } from 'react';

export const GoogleAdSense: React.FC = () => {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6649084210449054';
    if (!clientId) return;

    // Check if script is already present to avoid duplicate injections
    if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }, []);

  return null;
};
