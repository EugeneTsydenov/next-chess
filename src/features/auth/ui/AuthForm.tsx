import { Box } from '@mui/material';
import * as React from 'react';

const AuthForm: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
};

export default AuthForm;
