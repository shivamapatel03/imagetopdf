import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conversion Studio – ImageToPDF.online',
  description: 'Interactive client-side image to PDF conversion studio.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConvertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

