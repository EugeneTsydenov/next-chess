import { Providers } from '@/app/_providers';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import './_styles/globals.css';
import * as React from 'react';

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
