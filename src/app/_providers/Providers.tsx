'use client';

import SessionProvider from '@/app/_providers/SessionProvider';
import ThemeProvider from '@/app/_providers/ThemeProvider';
import * as React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
