import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from '@/app/_providers';
import type { Metadata } from 'next';
import './_styles/globals.css';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'ChessHub',
  description: 'The Best web site for chess online',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
