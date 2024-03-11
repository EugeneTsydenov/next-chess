'use client';

import { loginAction } from '@/widgets/login/lib/actions/loginAction';
import { AuthForm, PasswordVisibility } from '@/features/auth';
import { Alert, Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { AuthTitle, Link } from '@/shared/ui';
import { useFormState } from 'react-dom';
import Box from '@mui/material/Box';
import * as React from 'react';

const LoginForm: React.FC = () => {
  const [state, formAction] = useFormState(loginAction, undefined);

  return (
    <>
      <AuthForm action={formAction}>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          required
          name='email'
          sx={{ width: '100%' }}
        />
        <PasswordVisibility label='Passoword' name='password' />
        <Button type='submit' variant='contained' fullWidth>
          Login
        </Button>
      </AuthForm>
    </>
  );
};

export default LoginForm;
