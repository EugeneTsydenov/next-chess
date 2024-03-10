'use client';

import { registrationAction } from '@/widgets/registration/lib/actions/registrationAction';
import { AuthForm, PasswordVisibility } from '@/features/auth';
import { Alert, Button, TextField } from '@mui/material';
import { useFormState } from 'react-dom';
import * as React from 'react';

const RegistrationFrom: React.FC = () => {
  const [state, formAction] = useFormState(registrationAction, undefined);

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
      {state && !state.isAuth ? <Alert severity='error'>{state.message}</Alert> : ''}
    </>
  );
};

export default RegistrationFrom;
