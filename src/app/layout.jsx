import './styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import GoogleAnalytics from '@/utils/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Minerva Room',
  description:
    'Butuh tempat tinggal transit, harian, atau mingguan dengan harga terjangkau? Sewa apartemen di Minerva Room adalah pilihan yang cocok untuk staycation kamu bersama orang tersayang.',
  generator: 'Next.js',
  applicationName: 'Minerva Rooms',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'rental',
    'apartement',
    'bekasi',
    'rental apartement',
    'apartement bekasi',
    'apartement jakarta',
    'rental harian',
    'apartement transit',
    'apartement transit bekasi',
    'rental mingguan',
    'rental fullday',
  ],
  authors: { name: 'Abdul Rahman', url: 'http://ar-portofolio.my.id/' },
  colorScheme: 'white',
  canonical: 'https://www.minervarooms.com',
  languages: {
    'en-US': '/en-US',
    'id-ID': '/id-ID',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Minerva Room | ',
    description:
      'Butuh tempat tinggal transit, harian, atau mingguan dengan harga terjangkau? Sewa apartemen di Minerva Room adalah pilihan yang cocok untuk staycation kamu bersama orang tersayang.',
    url: 'https://www.minervarooms.com',
    siteName: 'Next.js',
    images: [
      {
        url: '/minervalogo1.png',
        width: 800,
        height: 600,
      },
      {
        url: '/minervalogo1.png',
        width: 1800,
        height: 1600,
        alt: 'Minerva Rooms Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GmTsvMzfiS60zwLJ_YkyITdo0Y7ph59dvEwiNBEiipI',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer></Footer>
      </body>
    </html>
  );
}
