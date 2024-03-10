import { Box } from '@mui/material';
import * as React from 'react';

type FormAction = string | ((formData: FormData) => void) | undefined;

interface AuthFormProps {
  children: React.ReactNode;
  action: FormAction;
}

const AuthForm: React.FC<AuthFormProps> = ({ children, action }) => {
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
      action={action}
    >
      {children}
    </Box>
  );
};

export default AuthForm;
