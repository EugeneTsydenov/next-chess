import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import * as React from 'react';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AppRouterCacheProvider options={{ key: 'mui' }}>{children}</AppRouterCacheProvider>;
};

export default ThemeProvider;
