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
    default: 'Image to PDF Online Free | Convert JPG & PNG to PDF – ImageToPDF.online',
    template: '%s – ImageToPDF.online',
  },
  description:
    'Convert JPG, PNG and WEBP images to PDF online for free. Fast, secure and easy-to-use image to PDF converter with custom page sizes, margins and ordering.',
  keywords: [
    'image to pdf',
    'jpg to pdf',
    'png to pdf',
    'webp to pdf',
    'convert photo to pdf',
    'combine images into one pdf',
    'free online pdf converter',
    'merge images to pdf',
    'photo to pdf maker',
  ],
  authors: [{ name: 'ImageToPDF.online Team' }],
  creator: 'ImageToPDF.online',
  publisher: 'ImageToPDF.online',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Image to PDF Online Free | Convert JPG & PNG to PDF – ImageToPDF.online',
    description:
      'Convert JPG, PNG and WEBP images to PDF online for free. Fast, secure, client-side conversion.',
    url: 'https://imagetopdf.online',
    siteName: 'ImageToPDF.online',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image to PDF Online Free – ImageToPDF.online',
    description: 'Convert JPG, PNG and WEBP images to PDF online for free.',
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
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
        {/* Google AdSense Official Script */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6649084210449054'}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black overflow-x-hidden">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
