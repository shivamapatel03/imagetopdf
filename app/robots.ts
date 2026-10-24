import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/ads.txt'],
        disallow: [
          '/dashboard',
          '/dashboard/*',
          '/api/*',
          '/login',
          '/signup',
          '/forgot-password',
          '/reset-password',
        ],
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: ['/', '/ads.txt'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/ads.txt'],
      },
    ],
    sitemap: 'https://imagetopdf.online/sitemap.xml',
  };
}
