'use client';

import { AuthForm, PasswordVisibility } from '@/features/auth';
import { Button, TextField } from '@mui/material';
import * as React from 'react';

const RegistrationFrom: React.FC = () => {
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
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          required
          name='username'
          sx={{ width: '100%' }}
        />
        <PasswordVisibility label='Password' name='password' />
        <PasswordVisibility label='Confirm the password' name='confirm_password' />
        <Button type='submit' variant='contained' fullWidth>
          Register
        </Button>
      </AuthForm>
    </>
  );
};

export default RegistrationFrom;
