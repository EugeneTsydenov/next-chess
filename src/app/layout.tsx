import { Providers } from '@/app/_providers';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './_styles/globals.css';
import * as React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChessHub',
  description: 'The Best web site for chess online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
