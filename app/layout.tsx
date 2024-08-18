import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

import Nav from '@/lib/components/nav';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '_blog',
  description: 'Simple blog website example with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${robotoMono.className} max-w-[1200px] mx-auto p-4 md:p-8 lg:p-12`}
      >
        <Nav />
        <div className='py-4 md:py-8 lg:py-12 w-full'>{children}</div>
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
