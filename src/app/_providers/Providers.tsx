import QueryClientProvider from '@/app/_providers/QueryClientProvider';
import ThemeProvider from '@/app/_providers/ThemeProvider';
import * as React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
