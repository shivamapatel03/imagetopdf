import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Image to PDF Online – 100% Free Converter',
    short_name: 'ImageToPDF',
    description: 'Convert JPG, PNG, and WEBP images to PDF online for free. Fast, private, and unlimited client-side conversions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4D4AE8',
    icons: [
      {
        src: '/icon.png?v=4',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png?v=4',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
