import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { darkTheme, lightTheme } from '@/shared/config';
import * as React from 'react';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
