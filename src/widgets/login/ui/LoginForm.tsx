'use client';

import { AuthForm, PasswordVisibility } from '@/features/auth';
import { Button, TextField } from '@mui/material';
import * as React from 'react';

const LoginForm: React.FC = () => {
  return (
    <>
      <AuthForm>
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
