'use client';

import { LoginFormSchema, LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import PasswordVisibility from '@/features/auth/ui/PasswordVisibility';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
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
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component='form'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        sx={{ width: '100%' }}
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
      />
      <PasswordVisibility label='Passoword' name='password' errors={errors} register={register} />
      <Button type='submit' variant='contained' fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;