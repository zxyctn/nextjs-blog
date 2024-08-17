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
        className={`${robotoMono.className} max-w-[1200px] mx-auto p-8 lg:p-12`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
