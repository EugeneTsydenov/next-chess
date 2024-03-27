import { AuthTitle, Chessboard } from '@/shared/ui';
import { Paper, Typography } from '@mui/material';
import { ProtectedRoute } from '@/entities/auth';
import Box from '@mui/material/Box';
import * as React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <ProtectedRoute permission='notAuthUser'>
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '65%',
                alignItems: 'center',
                height: '100%',
                gap: 2,
              }}
            >
              <AuthTitle />
              <Typography variant='h3' component='h2' fontWeight={600} mb={4}>
                Login to open new opportunities
              </Typography>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
};

export default AuthLayout;
