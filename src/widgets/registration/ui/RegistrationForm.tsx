'use client';

import {
  AuthForm,
  PasswordVisibility,
  RegistrationFormSchema,
  RegistrationInputType,
} from '@/features/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from '@mui/material';
import * as React from 'react';

const RegistrationFrom: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInputType>({
    resolver: zodResolver(RegistrationFormSchema),
  });

  const onSubmit: SubmitHandler<RegistrationInputType> = data => {
    console.log(data);
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={!!errors.email}
          id='outlined-basic'
          label='Email'
          variant='outlined'
          {...register('email')}
          sx={{ width: '100%' }}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          error={!!errors.username}
          id='outlined-basic'
          label='Username'
          variant='outlined'
          {...register('username')}
          sx={{ width: '100%' }}
          helperText={errors.username ? errors.username.message : ''}
        />
        <PasswordVisibility label='Password' name='password' register={register} errors={errors} />
        <PasswordVisibility
          label='Confirm the password'
          name='confirmedPassword'
          register={register}
          errors={errors}
        />
        <Button type='submit' variant='contained' fullWidth>
          Register
        </Button>
      </AuthForm>
    </>
  );
};

export default RegistrationFrom;
