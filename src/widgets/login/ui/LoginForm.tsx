'use client';

import { AuthForm, LoginFormSchema, LoginInputType, PasswordVisibility } from '@/features/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import * as React from 'react';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginInputType> = data => {
    console.log(data);
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          required
          name='email'
          sx={{ width: '100%' }}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <PasswordVisibility label='Passoword' name='password' errors={errors} register={register} />
        <Button type='submit' variant='contained' fullWidth>
          Login
        </Button>
      </AuthForm>
    </>
  );
};

export default LoginForm;
