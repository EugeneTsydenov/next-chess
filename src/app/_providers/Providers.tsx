import ThemeProvider from '@/app/_providers/ThemeProvider';
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
