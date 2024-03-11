import { FormEventHandler } from 'react';
import { Box } from '@mui/material';
import * as React from 'react';

interface AuthFormProps {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const AuthForm: React.FC<AuthFormProps> = ({ children, onSubmit }) => {
  return (
    <Box
      onSubmit={onSubmit}
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
