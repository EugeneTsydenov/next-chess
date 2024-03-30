'use client';

import {
  loginErrorResponseSchema,
  loginSuccessResponseSchema,
} from '@/features/auth/model/schemas/loginResponseSchema';
import { LoginFormSchema, LoginInputType } from '@/features/auth/model/schemas/loginFormSchema';
import PasswordVisibility from '@/features/auth/ui/PasswordVisibility';
import { loginAction } from '@/features/auth/lib/actions/loginAction';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { myToast, useAppDispatch } from '@/shared/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { setJwt } from '@/shared/model/jwt/jwtSlice';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { authApi } from '@/entities/auth';
import { Link } from '@/shared/ui';
import * as React from 'react';

interface LoginFormProps {
  callbackUrl?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ callbackUrl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: zodResolver(LoginFormSchema),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginInputType> = async data => {
    try {
      const resData = await loginAction(data);
      if (resData.jwt) {
        const validatedData = loginSuccessResponseSchema.parse(resData);
        myToast(validatedData.data.message);
        dispatch(setJwt(validatedData.jwt));
        dispatch(authApi.util?.upsertQueryData('refresh', null, { jwt: validatedData.jwt }));
        router.push(callbackUrl ? callbackUrl : '/');
      } else {
        const validatedData = loginErrorResponseSchema.parse(resData);
        myToast(validatedData.message, { type: 'error' });
      }
    } catch (e) {
      myToast('An error occurred while executing the request', { type: 'error' });
    }
  };

  return (
    <>
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
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        width='100%'
      >
        <Link href='#'>
          <Typography>Forgot password?</Typography>
        </Link>
        <Link href='/registration'>
          <Typography>Dont have an account? Sign Up</Typography>
        </Link>
      </Box>
    </>
  );
};

export default LoginForm;
