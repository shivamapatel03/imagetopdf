import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/convert',
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
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/convert', '/dashboard', '/api', '/login', '/signup'],
      },
    ],
    sitemap: 'https://imagetopdf.online/sitemap.xml',
  };
}
