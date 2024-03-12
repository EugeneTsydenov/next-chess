'use client';

import { LoginFormSchema, LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import PasswordVisibility from '@/features/auth/ui/PasswordVisibility';
import { loginAction } from '@/features/auth/lib/actions/loginAction';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { myToast } from '@/shared/lib';
import * as React from 'react';

interface LoginFormProps {
  callbackUrl?: string;
}

const LoginForm: React.FC<LoginFormProps> = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: zodResolver(LoginFormSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputType> = async data => {
    const res = await loginAction(data);

    if (!res) {
      myToast('Something Went Wrong!', { type: 'error' });
    } else {
      if (res.error) {
        myToast(res.error, { type: 'error' });
      } else {
        myToast('You have successfully logged in!');
        router.push(props.callbackUrl ? props.callbackUrl : '/');
      }
    }
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
