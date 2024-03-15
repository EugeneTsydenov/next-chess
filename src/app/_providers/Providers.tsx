import ThemeProvider from '@/app/_providers/ThemeProvider';
import ReduxProvider from '@/app/_providers/ReduxProvider';
import * as React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
