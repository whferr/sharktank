import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Next.js 16 SEO Starter',
    template: '%s | Next.js 16 SEO Starter',
  },
  description: 'A blazingly fast Next.js 16 starter with exceptional SEO practices built-in.',
  applicationName: 'Next.js 16 SEO Starter',
  keywords: ['Next.js', 'React', 'TypeScript', 'SEO', 'Web Development', 'App Router'],
  authors: [{ name: 'Your Name', url: 'https://yourdomain.com' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Next.js 16 SEO Starter',
    title: 'Next.js 16 SEO Starter',
    description: 'A blazingly fast Next.js 16 starter with exceptional SEO practices built-in.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js 16 SEO Starter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 16 SEO Starter',
    description: 'A blazingly fast Next.js 16 starter with exceptional SEO practices built-in.',
    images: ['/og-image.png'],
    creator: '@yourusername',
    site: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

