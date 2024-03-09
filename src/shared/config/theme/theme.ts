'use client';

import { darkColorTokens, lightColorTokens } from '@/shared/config/theme/colorTokens';
import { Noto_Sans } from 'next/font/google';
import { createTheme } from '@mui/material';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: darkColorTokens.primary[500],
      light: darkColorTokens.primary[400],
      dark: darkColorTokens.primary[700],
      contrastText: darkColorTokens.grey[100],
    },
    secondary: {
      main: darkColorTokens.secondary[500],
      dark: darkColorTokens.secondary[600],
      light: darkColorTokens.secondary[400],
      contrastText: darkColorTokens.grey[100],
    },
    background: {
      default: darkColorTokens.grey[700],
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: [notoSans.style.fontFamily, 'sans serif'].join(', '),
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1500,
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: lightColorTokens.primary[500],
      light: lightColorTokens.primary[600],
      dark: lightColorTokens.primary[300],
      contrastText: lightColorTokens.grey[100],
    },
    secondary: {
      main: lightColorTokens.secondary[500],
      dark: lightColorTokens.secondary[400],
      light: lightColorTokens.secondary[600],
      contrastText: lightColorTokens.grey[100],
    },
    background: {
      default: lightColorTokens.grey[900],
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: [notoSans.style.fontFamily, 'sans serif'].join(', '),
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1500,
    },
  },
});
