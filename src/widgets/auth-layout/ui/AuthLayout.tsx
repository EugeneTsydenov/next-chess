import { Chessboard } from '@/shared/ui';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box component='main' sx={{ height: '100vh', display: 'flex' }}>
      <Chessboard />
      <Box component={Paper} sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
