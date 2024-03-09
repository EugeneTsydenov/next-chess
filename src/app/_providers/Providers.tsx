import ThemeProvider from '@/app/_providers/ThemeProvider';
import * as React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
