import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getOrganizationSchema, getWebSiteSchema, getWebApplicationSchema } from '@/lib/seo/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imagetopdf.online'),
  title: {
    default: 'Image to PDF Online – 100% Free JPG & PNG to PDF Converter',
    template: '%s | Image to PDF Online',
  },
  description:
    'Convert image to PDF online for free in seconds. Combine multiple JPG, PNG, and WEBP photos into a high-quality PDF document. 100% private, no signup, zero watermarks, and no file limits.',
  keywords: [
    'image to pdf online',
    'image to pdf',
    'convert image to pdf online',
    'free image to pdf online',
    'jpg to pdf',
    'png to pdf',
    'webp to pdf',
    'combine images to pdf online',
    'merge images to pdf',
    'free online pdf converter',
    'photo to pdf converter online',
    'convert picture to pdf',
    'jpeg to pdf online converter free',
    'client side pdf converter',
    'image to pdf converter without watermark',
    'turn photo into pdf free',
  ],
  authors: [{ name: 'ImageToPDF.online Team' }],
  creator: 'ImageToPDF.online',
  publisher: 'ImageToPDF.online',
  category: 'Utilities',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Image to PDF Online – 100% Free JPG & PNG to PDF Converter',
    description:
      'Convert JPG, PNG, and WEBP images to PDF online for free. Combine multiple photos into one clean PDF document with 100% client-side privacy.',
    url: 'https://imagetopdf.online',
    siteName: 'ImageToPDF.online',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://imagetopdf.online/image.png',
        width: 1200,
        height: 630,
        alt: 'Image to PDF Online - Free Image to PDF Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to PDF Online – 100% Free JPG & PNG to PDF Converter',
    description: 'Convert JPG, PNG, and WEBP images to PDF online for free in seconds. 100% private, no signup, no limits.',
    images: ['https://imagetopdf.online/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://imagetopdf.online',
  },
  verification: {
    google: 't2KGnXYnTNGoMDiZ3CK3bigwEoHTU_wjMQYENqWw8BU',
  },
  icons: {
    icon: [
      { url: '/icon.png?v=4', type: 'image/png' },
      { url: '/favicon.ico?v=4', sizes: '48x48' },
    ],
    shortcut: '/favicon.ico?v=4',
    apple: [
      { url: '/icon.png?v=4', sizes: '180x180', type: 'image/png' },
    ],
  },
};

import { AuthProvider } from '@/components/providers/AuthProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebSiteSchema();
  const appSchema = getWebApplicationSchema();

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`} suppressHydrationWarning>
      <head>
        {/* Google AdSense Official Script for Site Verification & Ad Delivery */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6649084210449054"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black overflow-x-hidden w-full max-w-full" suppressHydrationWarning>
        <script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          id="site-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
        <AuthProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-full min-w-0 overflow-x-hidden">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
