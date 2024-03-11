import { Box } from '@mui/material';
import * as React from 'react';

type FormAction = ((formData: FormData) => void) | undefined;

interface AuthFormProps {
  children: React.ReactNode;
}

const AuthForm: React.FC<AuthFormProps> = ({ children }) => {
  return (
    <Box
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default AuthForm;
